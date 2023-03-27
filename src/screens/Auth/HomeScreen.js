import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getData, deleteData } from "../../api/api";


import { AuthContext } from "../../context/AuthContext";
import { GeneralStyles } from "../../theme/Styles";
import { RefreshControl } from "react-native-gesture-handler";

const HomeSreen = ({ route }) => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  // const { logout } = useContext(AuthContext);

  const [data, setData] = useState([]);

  // const [refresing, setRefresing] = useState(false);

  const loadData = async () => {
    const response = await getData()
    setData(response)
  }

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    await deleteData(id)
    if (deleteData) {
      loadData();
    }
  }

  // const onRefresh = React.useCallback(async () => {
  //   setRefresing(true);
  //   await loadData();
  //   setRefresing(false);
  // })

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Editar", { _id: item._id })}
      >
        <Text style={{ color: '#fff' }}>Marca: {item.marca}</Text>
        <Text style={{ color: '#fff' }}>Cantidad: {item.cantidad}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ backgroundColor: '#ee5253', padding: 7, borderRadius: 8 }}
        onPress={() => handleDelete(item._id)}
      >
        <Text style={{ color: '#fff' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );



  return (
    <View style={GeneralStyles.container}>
      <Text style={GeneralStyles.subTitle}>Inventario</Text>
      <Text style={GeneralStyles.subTitle}>{user.User}</Text>
      <FlatList
        style={{ width: '80%' }}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id + ''}
      />
      {/* <RefreshControl
        refresing={refresing}
        colors={["#78e08f"]}
        onRefresh={() => console.log('Refrescado')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#333333',
    padding: 15,
    marginVertical: 8,
    marginTop: 2,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default HomeSreen;
