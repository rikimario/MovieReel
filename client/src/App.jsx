import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as authServices from "./services/authService.js";
import Path from "./paths/paths.js";
import AuthContext from "./context/authContext.js";
import { MovieProvider } from "./context/movieContext.jsx";

import NavBar from "./components/NavBar.jsx";
import Heading from "./components/Home.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";
import MovieDetails from "./components/movie-details/MovieDetails.jsx";
import MyAccount from "./components/my-account/MyAccount.jsx";
import Logout from "./components/Logout.jsx";
import PopularMoviesPage from "./components/movies-popular/PopularMoviesPage.jsx";
import TopRatedPage from "./components/movies-top-rated/TopRatedPage.jsx";
import ComingSoonPage from "./components/movies-coming-soon/ComingSoonPage.jsx";
import CreateReview from "./components/review/CreateReview.jsx";
import Review from "./components/review/Review.jsx";
import Reviews from "./components/review/Reviews.jsx";

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
        <Route path={Path.MyAccount} element={<MyAccount />} />
        <Route path={Path.CreateReview} element={<CreateReview />} />
        <Route path={`${Path.Review}/:id`} element={<Review />} />
        <Route path={Path.Reviews} element={<Reviews />} />
        <Route path={`${Path.MovieDetails}/:id`} element={<MovieDetails />} />
        <Route path={Path.PopularMoviesPage} element={<PopularMoviesPage />} />
        <Route path={Path.TopRatedPage} element={<TopRatedPage />} />
        <Route path={Path.ComingSoonPage} element={<ComingSoonPage />} />
      </Routes>

      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
