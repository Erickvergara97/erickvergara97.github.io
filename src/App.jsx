import { ThemeProvider, createGlobalStyle } from "styled-components"
import {colorPurple, colorWhite, darkTheme, lightTheme} from './assets/styles/abstracts/variables'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pdf from "./components/routes/Pdf";
import { useEffect, useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  },[])
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="pdf" element={<Pdf />} />
        </Routes>
          <GlobalStyle/>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          <main>
            <Home />
            <Profile />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  body{
  background: ${({ theme }) => theme.background };
  background-attachment: fixed;
  background-size: cover;
}
  section{
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  h2{
    margin-bottom: 4rem;
  }
  
  p{
    margin: 1rem;
  }

  .button{
    width: 9rem;
    line-height: 3rem;
    align-self: center;
    margin: 1rem;
    border: 3px solid;
    border-radius: 10px;
    font-weight: bold;
    transition: background-color 1s, color 1s;    
  }
  .primaryBtn{
    color: ${colorPurple};
    background-color: ${colorWhite};
    border-color: ${colorWhite};

    &&:hover{
      background-color: transparent;
      color: ${colorWhite};
      a{
        color: ${colorWhite};
      }
    }
  }

  .secondaryBtn{
      background-color: ${colorPurple};
      color: ${colorWhite};
      border-color: ${colorPurple};
    &&:hover{
      background-color: ${colorWhite};
      color: ${colorPurple};
    }
  }
  
`