import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";

import { GeneralStyles } from "../../theme/Styles";
import { TextInput } from 'react-native-gesture-handler';

import { saveData } from '../../api/api';

const Insertar = ({navigation, route}) => {
  const [data, setData] = useState({
    marca: '',
    cantidad: '',
  });

  // console.log(route.params)
 
  const handleChange = (name, value) => setData({ ...data, [name]: value });

  const handleSubmit = () => {
    saveData(data);
    navigation.navigate('HomeScreen')
  };

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

      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    fontSize: 15,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '10ac84',
    height: 37,
    padding: 4,
    textAlign: 'center',
    borderRadius: 5
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
    marginLeft: -252,
    marginBottom: 5,
    fontSize: 20,
  }
});

export default Insertar