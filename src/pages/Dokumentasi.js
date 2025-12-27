import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import '../App.css';

// ==========================================
// 1. IMPORT FOTO DARI FOLDER ASSETS
// ==========================================
// Pastikan file-file ini BENAR-BENAR ADA di folder "src/assets/"
// Anda bisa ganti "doc1.jpg" dengan nama file asli Anda (misal: "lomba-17an.jpg")

import doc1 from '../assets/indra.png'; // Ganti nama file ini
import doc2 from '../assets/indra.png'; // Ganti nama file ini
import doc3 from '../assets/indra.png';
import doc4 from '../assets/indra.png';
import doc5 from '../assets/indra.png';
import doc6 from '../assets/indra.png';

// Jika fotonya kurang dari 6, hapus import yang tidak perlu.
// Jika lebih, tambahkan sendiri barisnya.

const Dokumentasi = () => {

  // ==========================================
  // 2. MASUKKAN VARIABEL IMPORT KE DATA
  // ==========================================
  const fotoPemenang = [
    { id: 1, src: doc1 }, // Panggil variabel import di sini (tanpa kutip)
    { id: 2, src: doc2 },
    { id: 3, src: doc3 },
    { id: 4, src: doc4 },
    { id: 5, src: doc5 },
    { id: 6, src: doc6 },
  ];

  return (
    <motion.div 
      className="page-transition"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Reveal width="100%">
             <h1 className="section-title">Galeri Momen</h1>
          </Reveal>
          <Reveal width="100%" delay={0.1}>
             <p className="section-subtitle">Daftar Pemenang Training Online 2025.</p>
          </Reveal>
        </div>
        
        {/* GRID FOTO */}
        <div className="dokumentasi-grid">
          {fotoPemenang.map((item, i) => (
            <Reveal key={item.id} width="100%" delay={ (i % 3) * 0.1 }>
                {/* BINGKAI FOTO */}
                <div className="modern-card" style={{ padding: '10px', cursor: 'pointer', height: '100%' }}>
                  
                 {/* LOGIKA ANIMATION DELAY:
                   Kita memberi delay acak pada animasi CSS 'floating'
                   agar kartu tidak bergerak naik-turun secara bersamaan.
                */}
                <div 
                  className="gallery-card" 
                  style={{ animationDelay: `${i * 0.5}s` }} 
                >
                  <img src={item.src} alt={`Dokumentasi ${item.id}`} />
                </div>

                </div>
            </Reveal>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default Dokumentasi;