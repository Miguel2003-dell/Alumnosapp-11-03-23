//Imports que le da funcionabilidad a lo usado para hacer esta pantalla.
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { deleteData, getData } from "../../api/api";

//Funcionabilidad y estilos.
import { AuthContext } from "../../context/AuthContext";
import { GeneralStyles } from "../../theme/Styles";
import { RefreshControl } from "react-native-gesture-handler";

//Funcionabilidad de la pantalla.
const HomeSreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { user } = useContext(AuthContext);

  //Reciben los datos.
  const [data, setData] = useState([]);

  //Refresca los datos.
  const [refresing, setRefresing] = useState(false);

  //Variable para cargar datos existentes.
  const loadData = async () => {
    const response = await getData()
    setData(response)
  }

  //Carga los datos obtenidos y actualiza automaticamente.
  useEffect(() => {
    loadData();
  }, [isFocused]);

  //Funcion dada a el boton de Eliminar.
  const handleDelete = async (id) => {
    await deleteData(id)
    if (deleteData) {
      loadData();
    }
  }

  //Funcion para recargar haciendo scroll hacia abajo la pantalla.
  const onRefresh = React.useCallback(async () => {
    setRefresing(true);
    await loadData();
    setRefresing(false);
  })

  //Renderizacion de la lista de elementos que recibe para pintarla.
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
      {/* Pintando los datos que se renderizaron */}
      <FlatList
        style={{ width: '80%' }}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id + ''}
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={refresing}
          />
        }
      />

    </View>
  );
};

//Estilos usados para esta pantalla.
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
