//Imprts que darán funcionabilidad a las pantallas principales.
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Import de los Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Import del Login de acceso
import Login from "./src/screens/Login";

//Imports de las pantallas que se usaron.
import Home from "./src/screens/Auth/HomeScreen";
import Insertar from "./src/screens/Auth/Insertar";
import Editar from "./src/screens/Auth/Editar";

//Contenedor de las pantallas.
import AuthContextProvider from "./src/context/AuthContext";

//Funciones para crear la distribucion de pantallas
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

//Stack que compone las pantallas login y de registro
const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Editar"
        component={Editar}
        options={{
          headerShown: true,
          tabBarLabel: "Editar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

//stack para crear el menu con tab navigator
const MenuTab = () => {
  return (
    <Tab.Navigator
      //initialRouteName="Home" Ruta inicial
      screenOptions={{
        tabBarActiveTintColor: "#4853a4",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          //tabBarBadge: 1 Notificaciones
        }}
      />
      <Tab.Screen
        name="Insertar"
        component={Insertar}
        options={{
          headerShown: false,
          tabBarLabel: "Insertar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

//Inicializacion de la aplicacion
const app = () => {
  //Funcion para verificar si hay un usuario loggeado
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginStack"
            component={LoginStack}
            options={{ headerShown: false, headerLeft: null }}
          />
          <Stack.Screen
            name="Menu"
            component={MenuTab}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default app;
