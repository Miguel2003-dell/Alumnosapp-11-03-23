import { StatusBar } from "expo-status-bar";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
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
    await login(user);
    navigation.navigate("Menu");
  };

  return (
    <View style={GeneralStyles.container}>
      {/* <Text style={styles.title}> UTD </Text> */}
      {/* <Image
        source={require("../images/Reigen.png")}
        style={{ width: 200, height: 200, marginBottom: 15 }}
      /> */}
      <Text style={GeneralStyles.subTitle}> Iniciar sesion </Text>
      <TextInput
        placeholder="Usuario"
        style={GeneralStyles.Input}
        value={user.User}
        onChangeText={(text) => handleChange("User", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={GeneralStyles.Input}
        value={user.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={GeneralStyles.boton} onPress={handleSubmit}>
        <Text style={{ fontSize: 20, marginTop: 11, color: "#fff" }}>
          {" "}
          Iniciar{" "}
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={GeneralStyles.boton}
        onPress={() => navigation.navigate("register")}
      >
        <Text style={{ fontSize: 20, marginTop: 11, color: "#fff" }}>
          {" "}
          Registrarme{" "}
        </Text>
      </TouchableOpacity> */}
      <StatusBar style="auto" />
    </View>
  );
};

export default Login;
