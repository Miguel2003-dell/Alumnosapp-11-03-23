import { StatusBar } from "expo-status-bar";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Styles, { GeneralStyles } from '../theme/Styles'

const Login = () => {
  //Estado inicial de los campos y utilizacion del hook useNavigation

  const navigation = useNavigation();
  const [user, setUser] = useState({
    User: "",
    password: "",
  });

  //Funcion que permite copear los valores ingresados en el input y cambia el estado para usarlos en la funcion de autenticacion (login())

  const handleChange = (name, value) => setUser({ ...user, [name]: value });
  //Funcion llamada desde el archivi AuthContext para autentificar al usuario

  const { login } = useContext(AuthContext);

  //Funcion asincrona para autentificaar al usuario, una vez autentificado navegar a la siguente pantalla, o sea, el menu ya dentro de la app

  const handleSubmit = async (e) => {
    // console.log(user);
    // await login(user);
    // navigation.navigate("Menu");
    if (await login(user)) {
      navigation.navigate("Menu");
    } else {
      Alert.alert("Usuario y/o contraseña incorrectos",
        "Por favor vuelva a intentar", [
        {
          text: "Ok",
          onPress: () => navigation.navigate("LoginStack")
        }
      ])
    }
  };

  return (
    <View style={GeneralStyles.container}>
      {/* <Text style={styles.title}> UTD </Text> */}
      <Image
        source={require("../images/logo.png")}
        style={{ width: 180, height: 180, marginBottom: 15, borderRadius: 40, }}
      />
      <Text style={GeneralStyles.subTitleI}> Iniciar sesion </Text>

      <Text style={styles.text}>Ingrese su Usuario:</Text>
      <TextInput
        placeholder="Usuario"
        style={GeneralStyles.Input}
        value={user.User}
        onChangeText={(text) => handleChange("User", text)}
      />
      <Text style={styles.textc}>Ingrese su Contraseña:</Text>
      <TextInput
        placeholder="Contraseña"
        style={GeneralStyles.Input}
        value={user.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry={true}
      />
      {/* Define un componente TouchableOpacity que se utiliza para mostrar un botón de inicio de sesión. Cuando se presiona el botón, se llama a la función handleSubmit. */}
      <TouchableOpacity style={GeneralStyles.boton} onPress={handleSubmit}>
        <Text style={{ fontSize: 20, marginTop: 11, color: "#ffffff" }}>
          Iniciar Sesión
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );

};
//Define un objeto de estilo que se utiliza para personalizar los estilos de los componentes en el componente Login.
const styles = StyleSheet.create({
  text: {
    marginLeft: -130,
    marginBottom: -10,
    fontSize: 19,
    color: 'grey',
  },
  textc: {
    marginTop: 8,
    marginLeft: -100,
    marginBottom: -10,
    fontSize: 19,
    color: 'grey',
  },
  buttonSave: {
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#000000',
    width: '40%'
  },
});

export default Login;
