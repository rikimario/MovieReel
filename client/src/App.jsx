import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
// import NavBar from './components/NavBar.jsx';
import Heading from './components/Heading.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import NavTwo from './components/NavTwo.jsx';
import NewsLetter from './components/NewsLetter.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <NavTwo />
      {/* <NavBar /> */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}


      <Heading />



      <NewsLetter />
      <Footer />
    </ThemeProvider>
  )
}

export default App
