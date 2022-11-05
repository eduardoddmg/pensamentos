import { createContext, useState, useContext } from "react";
import { login as loginAction } from '../actions';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  async function login(data) {
      const response = await loginAction(data);
      if (response.type === 'success') {
        setUsername(data.username);
        setIsLogged(true);
        return true;
      }
  }

  // async function register(data) {
  //   const response = await RegisterAction(data);
  //   if (response.type === 'success') return true;
  // }

  function logout() {
    setUsername("");
    setIsLogged(false);
  }

  return (
    <AuthContext.Provider
      value={{
        username,
        isLogged,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);