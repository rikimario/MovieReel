import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar.jsx";
import Heading from "./components/Heading.jsx";
import About from "./components/About.jsx";
import Create from "./components/Create.jsx";
import Login from "./components/Login.jsx";
import Footer from "./components/Footer.jsx";

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
        <Route path="create" element={<Create />} />
        <Route path="login" element={<Login />} />
      </Routes>

      <Footer />
      {/* <NewsLetter/> */}
    </ThemeProvider>
  );
}

export default App;
