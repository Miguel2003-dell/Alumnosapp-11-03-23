import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { GeneralStyles } from "../../theme/Styles";

const Eliminar = () => {
  return (
    <View style={GeneralStyles.container}>
      <Text style={GeneralStyles.subTitle}>Eliminar</Text>

      <TouchableOpacity style={GeneralStyles.boton} onPress={() => console.log("Saquen a Edgar de la casa pq es negro y me da miedo :v")}>
        <Text style={{ fontSize: 20, marginTop: 10, color: "#fff" }}>
          {" "}
          Presioname{" "}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Eliminar