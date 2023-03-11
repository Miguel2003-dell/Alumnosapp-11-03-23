import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";


import { AuthContext } from "../../context/AuthContext";
import { GeneralStyles } from "../../theme/Styles";

const HomeSreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  // const { logout } = useContext(AuthContext);

  return (
    <View style={GeneralStyles.container}>
      <Text style={GeneralStyles.subTitle}>HomeSreen</Text>
      <Text style={GeneralStyles.subTitle}>{user.User}</Text>

      <TouchableOpacity style={GeneralStyles.boton} onPress={() => console.log("Hola mundito UuU")}>
        <Text style={{ fontSize: 20, marginTop: 10, color: "#fff" }}>
          {" "}
          Iniciar{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeSreen;
