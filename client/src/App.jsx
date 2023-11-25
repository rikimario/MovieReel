import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar.jsx";
import Heading from "./components/Heading.jsx";
import About from "./components/About.jsx";
import Create from "./components/Create.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";
import MovieCard from "./components/MovieCard.jsx";
import MyAccount from "./components/MyAccount.jsx";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

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
    </ThemeProvider>
  );
}

export default App;
