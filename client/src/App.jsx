import { Routes, Route } from "react-router-dom";

import Path from "./paths/paths.js";
import { AuthProvider } from "./context/authContext.jsx";

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
import Edit from "./components/edit/Edit.jsx";

function App() {

  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path={Path.Home} element={<Heading />} />
        <Route path={Path.About} element={<About />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Register} element={<Register />} />
        <Route path={Path.Logout} element={<Logout />} />
        <Route path={Path.MyAccount} element={<MyAccount />} />
        <Route path={Path.CreateReview} element={<CreateReview />} />
        <Route path={Path.Reviews} element={<Reviews />} />
        <Route path={`${Path.Review}/:id`} element={<Review />} />
        <Route path={Path.Edit} element={<Edit />} />
        <Route path={`${Path.MovieDetails}/:id`} element={<MovieDetails />} />
        <Route path={Path.PopularMoviesPage} element={<PopularMoviesPage />} />
        <Route path={Path.TopRatedPage} element={<TopRatedPage />} />
        <Route path={Path.ComingSoonPage} element={<ComingSoonPage />} />
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;
