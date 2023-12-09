import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

import * as authServices from "../services/authService.js";
import Path from "../paths/paths.js";
import usePersistedState from "../hooks/usePersistedState.js";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const registerSubmitHandler = async (values) => {
    const result = await authServices.register(
      values.email,
      values.password,
      values.username,
      values.firstName,
      values.lastName
    );

    localStorage.setItem("accessToken", result.accessToken);

    setAuth(result);
    navigate(Path.Home);
  };

  const loginSubmitHandler = async (values) => {
    const result = await authServices.login(values.email, values.password);

    localStorage.setItem("accessToken", result.accessToken);

    setAuth(result);
    navigate(Path.Home);
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
    navigate(Path.Home);
  };

  const values = {
    registerSubmitHandler,
    loginSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    firsName: auth.firsName,
    lastName: auth.lastName,
    userId: auth._id,
    isAuth: !!auth.accessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
