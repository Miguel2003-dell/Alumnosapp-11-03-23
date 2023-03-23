import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getData, deleteData } from "../../api/api";


import { AuthContext } from "../../context/AuthContext";
import { GeneralStyles } from "../../theme/Styles";

const HomeSreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  // const { logout } = useContext(AuthContext);

  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await getData()
    setData(response)
  }

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    await deleteData(id)
    if(deleteData) {
      loadData();
    }
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
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
      <Text style={GeneralStyles.subTitle}>HomeSreen</Text>
      <Text style={GeneralStyles.subTitle}>{user.User}</Text>
      <FlatList
        style={{ width: '80%' }}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id + ''}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#333333',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default HomeSreen;
