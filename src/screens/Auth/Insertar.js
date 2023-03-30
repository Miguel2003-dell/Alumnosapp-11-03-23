//Imprts que daran muncionalidad y permitiran navegar entre pantallas.
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";

//Import de estilos usados en esta pantalla.
import { GeneralStyles } from "../../theme/Styles";
import { TextInput } from 'react-native-gesture-handler';

//Import del api usada en esta pantalla.
import { saveData } from '../../api/api';

const Insertar = () => {
  //Inicializando los datos recibidos como vacios.
  const [data, setData] = useState({
    marca: '',
    cantidad: '',
  });

  //Constante que perimitira la navegación entre pantallas.
  const nav = useNavigation()

  //Aqui se cargan y actualizan los datos que se reciban.
  const handleChange = (name, value) => setData({ ...data, [name]: value });

  //Aqui despues de actualizar va a mandar a la pantalla principal.
  const handleSubmit = () => {
    saveData(data);
    nav.navigate("Home")
  };

  //Uso de datos recibidos en los TextInput.
  return (
    <View style={GeneralStyles.container}>
      <Text style={styles.text}>Marca:</Text>
      <TextInput
        style={styles.input}
        placeholder='Escribe la Marca'
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange('marca', text)}
      />
      <Text style={styles.textc}>Cantidad:</Text>
      <TextInput
        style={styles.input}
        placeholder='La Cantidad'
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange('cantidad', text)}
      />
      {/* Boton que hara la funcion de actualizar y regresar al menú */}
      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

//Estilos creados para esta pantalla.
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
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  text: {
    marginLeft: -270,
    marginBottom: 5,
    fontSize: 20,
  },
  textc: {
    marginLeft: -250,
    marginBottom: 5,
    fontSize: 20,
  }
});

export default Insertar