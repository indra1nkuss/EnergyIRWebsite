import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// === COMPONENTS ===
import Navbar from './components/Navbar';
import AuroraBackground from './components/AuroraBackground';
import MusicWidget from './components/MusicWidget'; // <--- 1. IMPORT INI
import Footer from './components/Footer'; // <--- 1. IMPORT FOOTER

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
    <Router>
      <div className="App">
        {/* Background Animation */}
        <AuroraBackground />
        
        {/* Navigasi Atas */}
        <Navbar />

        {/* === 2. WIDGET MUSIK (FLOATING) === */}
        {/* Ditaruh disini agar muncul di semua halaman & posisinya fixed */}
        <MusicWidget />
        
        {/* Konten Halaman */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/daftar-pemenang" element={<DaftarPemenang />} />
            <Route path="/dokumentasi" element={<Dokumentasi />} />
            <Route path="/tentang" element={<Tentang />} />
          </Routes>
        </AnimatePresence>
    {/* 2. LETAKKAN FOOTER DISINI (DI BAWAH ROUTES) */}
        <Footer /> 

      </div>
    </Router>
  );
}
export default App;