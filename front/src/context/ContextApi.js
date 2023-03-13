import { useContext, createContext, useState, useEffect } from "react";
const ContextAPI = createContext();

export const ContextProvider = ({ children }) => {
  // const [userLogged, setUserLogged] = useState(false);
  const userToken = localStorage.getItem("@App:token");
  const userLogged = localStorage.getItem("@App:userActive");
  // const userId = localStorage.getItem("@Reservei:userId");

  return (
    <ContextAPI.Provider
      value={{
        userToken,
        userLogged
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
};

export const useAuth = () => useContext(ContextAPI);
