import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as authServices from "./services/authService.js";
import Path from "./paths/paths.js";
import AuthContext from "./context/authContext.js";

import NavBar from "./components/NavBar.jsx";
import Heading from "./components/Heading.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";
import MovieCard from "./components/MovieCard.jsx";
import MyAccount from "./components/MyAccount.jsx";
import Logout from "./components/Logout.jsx";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");

    return {};
  });

  const registerSubmitHandler = async (values) => {
    const result = await authServices.register(values.email, values.password);

    localStorage.setItem("accessToken", result.accessToken);

    setAuth(result);
    navigate("/");
  };

  const loginSubmitHandler = async (values) => {
    const result = await authServices.login(values.email, values.password);

    localStorage.setItem("accessToken", result.accessToken);

    setAuth(result);
    navigate("/");
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const values = {
    registerSubmitHandler,
    loginSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuth: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={values}>
      <NavBar />
      <Routes>
        <Route path={Path.Home} element={<Heading />} />
        <Route path={Path.About} element={<About />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Register} element={<Register />} />
        <Route path={Path.Logout} element={<Logout />} />
        <Route path={Path.MovieCard} element={<MovieCard />} />
        <Route path={Path.MyAccount} element={<MyAccount />} />
      </Routes>

      <Footer />
      {/* <NewsLetter/> */}
    </AuthContext.Provider>
  );
}

export default App;
