import { useState, createContext, useEffect } from "react";
import { saveItem, getItem, deleteItem } from "../services/storage";

const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const loadSession = async () => {
      const session = await getItem("userSession");
      if (session) {
        setAuth(JSON.parse(session));
      }
    };
    loadSession();
  }, []);

  const login = async (user: FormData) => {
    setAuth(user);
    await saveItem("userSession", JSON.stringify(user));
  };

  const logout = async () => {
    setAuth(undefined);
    await deleteItem("userSession");
  };

  const valueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
