//Imports de funcionabilidad y navegacion de esta pantalla.
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";

//Estilos usados.
import { GeneralStyles } from "../../theme/Styles";
import { TextInput } from 'react-native-gesture-handler';

//Apis usadas en esta pantalla.
import { saveData, getUpd, updateData } from '../../api/api';

const Editar = ({ route }) => {
  //Inicializando los datos en 0.
  const [data, setData] = useState({
    marca: '',
    cantidad: 0,
  });

  //Deconstruyendo los datos.
  const { marca, cantidad } = data;

  //Uso de la navegacion de las pantallas.
  const nav = useNavigation()

  //Función usada para actualizar y guardar los datos.
  const handleChange = (name, value) => setData({ ...data, [name]: value });

  //Variables usadas para hacer la edicion posible.
  const [editar, setEditar] = useState(false);

  //Función que ejecuta la operacion de actualizar, guardar y actualizar los datos.
  const handleSubmit = async () => {
    try {
      if (!editar) {
        await saveData(data);
      } else {
        await updateData(route.params._id, data)
      }
      nav.navigate("Menu")
    } catch (error) {
      console.error(error)
    }
  };

  //Función que recibe los datos, los compara, manda a la pantalla de editar, pasa los datos a una variable llamada dato y determina el valor de los datos.
  useEffect(() => {
    if (route.params && route.params._id) {
      setEditar(true);
      nav.setOptions({ headerTitle: "Actualizar" });
      (async () => {
        const dato = await getUpd(route.params._id);
        console.log(dato.condon);
        //Dando valor a los datos recibidos
        setData(
          {
            marca: dato.condon.marca,
            cantidad: Number.parseInt(dato.condon.cantidad),
          }
        );
        console.log(data)
      })();
    }
  }, [route.params._id]);

  useEffect(() => {
  }, [data]);

  return (
    <View style={GeneralStyles.container}>
      <Text style={styles.text}>Nueva Marca:</Text>
      <TextInput
        style={styles.input}
        placeholder='Escribe la Nueva Marca'
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange('marca', text)}
        //Pinta los datos que se recibieron.
        value={marca}
      />
      <TextInput
        style={styles.input}
        placeholder='Escribe la Nueva Cantidad'
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange('cantidad', text)}
        //Pinta los datos que se recibieron.
        value={String(cantidad)}
      />


      {/* Si está editando, cambia la función del botón. */}
      {
        !editar ? (
          <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Actualizar</Text>
          </TouchableOpacity>
        )
      }

    </View>
  );
};

//Estilos usados para esta pantalla.
const styles = StyleSheet.create({
  input: {
    width: '90%',
    fontSize: 15,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '10ac84',
    height: 39,
    padding: 4,
    textAlign: 'center',
    borderRadius: 20
  },
  buttonSave: {
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#000000',
    width: '40%'
  },
  buttonUpdate: {
    padding: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginBottom: 3,
    marginTop: 10,
    backgroundColor: "#e58e26",
    width: '40%',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  text: {
    marginLeft: -209,
    marginBottom: 5,
    fontSize: 20,
  }
});

export default Editar