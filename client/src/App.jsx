import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import NavBar from './components/NavBar.jsx';
import Heading from './components/Heading.jsx';
import About from './components/About.jsx';
import Create from './components/Create.jsx';
import Test from './components/Test.jsx';
// import NavTwo from './components/NavTwo.jsx';
// import NewsLetter from './components/NewsLetter.jsx';
import Footer from './components/Footer.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* <NavTwo /> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Heading />} />
        <Route path='about' element={<About />} />
        <Route path='create' element={<Create />} />
        <Route path='test' element={<Test />} />
      </Routes>


      <Footer/>
      {/* <NewsLetter/> */}
    </ThemeProvider>
  )
}

export default App
