import React, { useEffect } from 'react';
// Ganti BrowserRouter jadi HashRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import { AnimatePresence } from 'framer-motion';

// === COMPONENTS ===
import Navbar from './components/Navbar';
import AuroraBackground from './components/AuroraBackground';
import MusicWidget from './components/MusicWidget'; 
import Footer from './components/Footer'; 

// === PAGES ===
import Beranda from './pages/Beranda';
import DaftarPemenang from './pages/DaftarPemenang';
import Dokumentasi from './pages/Dokumentasi';
import Tentang from './pages/Tentang';

import './App.css';

const updateViewport = () => {
  const viewport = document.querySelector('meta[name=viewport]');
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
  }
};

function App() {
  useEffect(() => {
    updateViewport();
  }, []);

  return (
    // HAPUS PROPERTI basename. HashRouter tidak butuh basename.
    <Router>
      <div className="App">
        <AuroraBackground />
        <Navbar />
        <MusicWidget />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/daftar-pemenang" element={<DaftarPemenang />} />
            <Route path="/dokumentasi" element={<Dokumentasi />} />
            <Route path="/tentang" element={<Tentang />} />
          </Routes>
        </AnimatePresence>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;