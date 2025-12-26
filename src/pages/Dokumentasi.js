import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import '../App.css';

const fotoPemenang = [
  // Data ini tetap saya simpan text-nya di sini agar Anda mudah mengingat ini foto apa
  // Tapi text-nya TIDAK AKAN DITAMPILKAN di layar.
  { id: 1, src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80' },
  { id: 2, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80' },
  { id: 3, src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80' },
  { id: 4, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80' },
  { id: 5, src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80' },
  { id: 6, src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80' },
  { id: 7, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80' },
  { id: 8, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
];

const Dokumentasi = () => {
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
             <p className="section-subtitle">Rekaman kegiatan dan pencapaian terbaik.</p>
          </Reveal>
        </div>
        
        {/* GRID FOTO */}
        <div className="dokumentasi-grid">
          {fotoPemenang.map((item, i) => (
            <Reveal key={item.id} width="100%" delay={ (i % 3) * 0.1 }>
                {/* Card ini sekarang berfungsi sebagai bingkai saja.
                   Saya beri padding 10px agar terlihat seperti bingkai foto modern.
                */}
                <div className="modern-card" style={{ padding: '10px', cursor: 'pointer', height: '100%' }}>
                  
                  {/* Container Foto (Rasio 4:3 otomatis dari CSS) */}
                  {/* margin-bottom saya set 0 karena tidak ada teks dibawahnya */}
                  <div className="doc-img-container" style={{ marginBottom: 0 }}>
                    <img src={item.src} alt="Dokumentasi" />
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