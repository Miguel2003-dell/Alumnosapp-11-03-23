//Imports usados para el funcionamiento de la app
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  //Estado inicial del usuario
  const initialState = {
    user: "",
    id: "",
    token: "",
    auth: false,
  };
  const [user, setUser] = useState(initialState);
  //Funcion para realizar la peticion a la base de datos y autenticar al usuario
  const IP = "192.168.1.254";
  const login = async (user) => {
    // console.log(user);
    try {
      const response = await fetch(`http://${IP}:5000/users/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.status == 200) {
        //Obtencion y guardado dentro de la aplicacion los valores obtenidos desde la base de datos
        // console.log(response);
        const AuthUser = await response.json();
        setUser(AuthUser);
        return true
      } else {
        setUser(initialState);
        return false
      }
    } catch (error) {
      console.log(error);
      setUser(initialState);
      return false
    }
  };
  //Funcion para cerrar sesion y regresar al usuario a la pantalla de login
  const logout = async () => {
    setUser(initialState);
  };
  //Componente JSX que envolvera a la aplicacion para darles acceso al contecti global
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
