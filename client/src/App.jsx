import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/authContext.jsx";
import Path from "./paths/paths.js";

import Home from "./components/home/Home.jsx";
import NavBar from "./components/nav-bar/NavBar.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Footer from "./components/footer/Footer.jsx";
import MovieDetails from "./components/movie-details/MovieDetails.jsx";
import MyAccount from "./components/my-account/MyAccount.jsx";
import PopularMoviesPage from "./components/movies-popular/PopularMoviesPage.jsx";
import TopRatedPage from "./components/movies-top-rated/TopRatedPage.jsx";
import ComingSoonPage from "./components/movies-coming-soon/ComingSoonPage.jsx";
import CreateReview from "./components/review/CreateReview.jsx";
import Review from "./components/review/Review.jsx";
import Reviews from "./components/review/Reviews.jsx";
import Edit from "./components/edit/Edit.jsx";
import AuthGuard from "./components/guards/AuthGuard.jsx";
import Logout from "./components/logout/Logout.jsx";
import NotFound from "./components/not-found/NotFound.jsx";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Register} element={<Register />} />
        <Route path={Path.Reviews} element={<Reviews />} />
        <Route path={`${Path.MovieDetails}/:id`} element={<MovieDetails />} />
        <Route path={Path.PopularMoviesPage} element={<PopularMoviesPage />} />
        <Route path={Path.TopRatedPage} element={<TopRatedPage />} />
        <Route path={Path.ComingSoonPage} element={<ComingSoonPage />} />
        <Route path={`${Path.Review}/:id`} element={<Review />} />

        <Route element={<AuthGuard />}>
          <Route path={Path.MyAccount} element={<MyAccount />} />
          <Route path={Path.CreateReview} element={<CreateReview />} />
          <Route path={Path.Edit} element={<Edit />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;
