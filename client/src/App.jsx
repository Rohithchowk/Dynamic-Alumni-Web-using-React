// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import FormPage from './components/Form';
import About from './components/About';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Events from './components/Events';
import Newsroom from './components/Newsroom';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Form" element={<FormPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Newsroom" element={<Newsroom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
