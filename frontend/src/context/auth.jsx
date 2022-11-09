import { createContext, useState, useContext } from "react";
import { login as loginAction, register as RegisterAction } from '../actions';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  async function login(data) {
      const response = await loginAction(data);
      if (response.type === 'success') {
        setUsername(data.username);
        setIsLogged(true);
        return {type: true, message: response.message };
      }
      else if (response.type === 'err') return {type: false, message: response.message };
  }

  async function register(data) {
    const response = await RegisterAction(data);
    return {type: true, message: response.message};
  }

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
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);