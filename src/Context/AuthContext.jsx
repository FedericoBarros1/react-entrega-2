import React, { useContext, useState } from "react";

//Creacion context
export const AuthContext = React.createContext();

//Crear provider
const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(
    localStorage.getItem("login") ? true : false
  );

  const userLocalStorage = localStorage.getItem("user");
  const [user, setUser] = useState(
    userLocalStorage ? JSON.parse(userLocalStorage) : {}
  );

  const handleLogin = (responseUser) => {
    setLogin(true);
    //Guardar en localstorage
    localStorage.setItem("login", "true");
    setUser(responseUser);
    localStorage.setItem("user", JSON.stringify(responseUser));
  };

  const handleLogout = () => {
    setLogin(false);
    //Remove del localstorage
    localStorage.removeItem("login");
    setUser({});
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ login, user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);