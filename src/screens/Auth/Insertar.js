import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { GeneralStyles } from "../../theme/Styles";

const Insertar = () => {
  return (
    <View style={GeneralStyles.container}>
      <Text style={GeneralStyles.subTitle}>Insertar</Text>

      <TouchableOpacity style={GeneralStyles.boton} onPress={() => console.log("Ufff 🥵")}>
        <Text style={{ fontSize: 20, marginTop: 10, color: "#fff" }}>
          {" "}
          Presioname{" "}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Insertar