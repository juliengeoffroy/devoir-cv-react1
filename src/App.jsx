import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./css/App.css";
import  Navbar  from './components/Navbar.jsx';
import Blog from "./pages/Blog.jsx";
import Realisations from "./pages/Realisations.jsx";
import Contact from './pages/Contact';
import Services from "./pages/Services.jsx";
import Accueil from "./pages/Accueil.jsx";
import Mentions from './pages/Mentions';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mentions" element={<Mentions />} />
        </Routes>
      </header>
      <Footer />
    </div>
  );
}

export default App
