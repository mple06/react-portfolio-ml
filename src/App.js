import React from 'react';
import './App.css';
import Main from "./views/Main";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import About from "./views/About";
import Contact from "./views/Contact";
// import NavBar from "./views/Navbar";
// import Footer from './components/Footer/Footer.js';
// import Home from './components/Home/Home.js';
// import Projects from './components/Projects/Projects.js';
// import Contacts from './components/Contact/Contact.js';
// import Resume from './components/Resume/Resume.js';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

export default App;

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {/* <NavBar /> */}
        <Main />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}
