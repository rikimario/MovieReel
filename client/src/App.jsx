import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import * as authServices from "./services/authService.js";
import AuthContext from "./context/authContext.js";

import NavBar from "./components/NavBar.jsx";
import Heading from "./components/Heading.jsx";
import About from "./components/About.jsx";
import Create from "./components/Create.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";
import MovieCard from "./components/MovieCard.jsx";
import MyAccount from "./components/MyAccount.jsx";

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authServices.login(values.email, values.password);

    // setAuth(result);
    // localStorage.setItem("accessToken", result.accessToken);

    // console.log(values);
    console.log(result);
  };

  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Heading />} />
        <Route path="about" element={<About />} />
        {/* <Route path="create" element={<Create />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="movie-card" element={<MovieCard />} />
        <Route path="my-account" element={<MyAccount />} />
      </Routes>

      <Footer />
      {/* <NewsLetter/> */}
    </AuthContext.Provider>
  );
}

export default App;
