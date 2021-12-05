
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';
import Contacts from './components/Contact/Contact.js';
import Resume from './components/Resume/Resume.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default App;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact' element={<Contacts />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}