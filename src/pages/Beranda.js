import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from '../components/Typewriter';
import '../App.css';

const Beranda = () => {
  return (
    <motion.div 
      className="page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        
        {/* HERO SECTION: Layout Kiri Teks, Kanan Foto */}
        <div className="hero-grid">
          
          {/* KOLOM KIRI: Teks Ucapan */}
          <motion.div 
            className="hero-text-content"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="welcome-badge">👋 Halo, Selamat Datang!</div>
            <h1 className="hero-title">
   <Typewriter text="Selamat Kepada Pemenang" speed={100} delay={0.5} /> <br />
   <span className="text-gradient-animated">Training Online</span>
</h1>
            <p className="hero-desc">
              Pusat informasi terintegrasi untuk memantau daftar pemenang, 
              dokumentasi kegiatan, dan perkembangan training terkini.
              Mari wujudkan energi masa depan bersama.
            </p>
            
            <div className="hero-stats">
              <div className="stat-box">
                <h3>150+</h3>
                <p>Peserta</p>
              </div>
              <div className="stat-box">
                <h3>50+</h3>
                <p>Pemenang</p>
              </div>
              <div className="stat-box">
                <h3>10+</h3>
                <p>Event</p>
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN: Placeholder Foto */}
          <motion.div 
            className="hero-image-wrapper"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* CARD KACA PEMBUNGKUS FOTO */}
            <div className="modern-card image-card">
              {/* === TEMPAT GANTI FOTO DISINI === */}
              {/* Nanti ganti <div className="placeholder... dengan <img src="..." /> */}
              
              <div className="photo-placeholder">
                <span style={{fontSize: '3rem', marginBottom: '1rem'}}>🖼️</span>
                <p>Letakkan Foto Anda Disini</p>
                <small style={{color: 'var(--text-muted)'}}>(Ukuran Landscape / 4:3 Disarankan)</small>
                
                {/* Contoh jika sudah ada foto, hapus div di atas dan pakai ini: */}
                {/* <img src="URL_FOTO_ANDA.jpg" alt="Hero Banner" className="hero-img" /> */}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </motion.div>
  );
};

export default Beranda;