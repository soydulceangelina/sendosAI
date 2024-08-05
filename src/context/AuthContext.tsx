import { useState, createContext } from "react";

const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);

  const login = (user: FormData) => {
    setAuth(user);
  };

  
  const logout = () => {
    setAuth(undefined);
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
