import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal'; // Pastikan path komponen ini benar
import '../App.css';

// ==========================================
// 1. IMPORT SEMUA GAMBAR (WAJIB DI SRC/ASSETS)
// ==========================================
// Pastikan file-file ini ada di folder "src/assets/"
import irLogo from '../assets/irlogo.png'; // Logo Utama

// Foto Tim (Sesuaikan nama file dengan yang ada di folder Anda)
import goldyPic from '../assets/irlogo.png'; 
import priyoPic from '../assets/irlogo.png';
import mariniPic from '../assets/irlogo.png';
import indraPic from '../assets/indra.png';
import juliPic from '../assets/irlogo.png';

const Tentang = () => {
  
  // Data Tim
  const teamMembers = [
    { 
      id: 1, 
      name: 'Goldy Raymond PPS', 
      role: 'EC Manager', 
      img: goldyPic 
    },
    { 
      id: 2, 
      name: 'M Priyo Pambudi', 
      role: 'EC Supervisor', 
      img: priyoPic 
    },
    { 
      id: 3, 
      name: 'Marini', 
      role: 'EC Document Control', 
      img: mariniPic 
    },
    { 
      id: 4, 
      name: 'Indra Nurul Kusuma', 
      role: 'EC Analyst', 
      img: indraPic 
    },
    { 
      id: 5, 
      name: 'Juliansyah', 
      role: 'EC Patrol & Control', 
      img: juliPic 
    },
  ];

  return (
    <motion.div 
      className="page-transition"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <div className="container">
        
        {/* HEADER SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Reveal width="100%">
            <div className="logo-circle-wrapper">
               {/* Gunakan variabel import 'irLogo' disini */}
               <img src={irLogo} alt="Logo Energy Future" className="about-logo" />
            </div>
          </Reveal>
          
          <Reveal width="100%" delay={0.1}>
             <h1 className="about-title">Energy Team</h1>
             <p className="about-subtitle">Empowering Through Knowledge</p>
          </Reveal>
        </div>

        {/* PROFILE SECTION */}
        <Reveal width="100%" delay={0.2}>
          <div className="glass-panel" style={{ marginBottom: '4rem' }}>
            <div className="section-header"><h3>Tentang Kami</h3></div>
            <div className="about-text">
              <p>
                Energy Team merupakan unit kerja strategis yang dibentuk secara khusus dengan tanggung jawab utama melakukan pemantauan, analisis, 
                serta pengendalian konsumsi energi di seluruh operasional Pratama. Saat ini, 
                fokus pengawasan tim tertuju pada dua sumber energi utama yang menopang aktivitas produksi di PT Pratama Abadi Industri, yaitu energi listrik dan gas. Melalui manajemen yang terstruktur, 
                tim ini berkomitmen untuk memastikan penggunaan energi berjalan secara efisien, terukur, dan berkelanjutan.
              </p>
            </div>
          </div>
        </Reveal>

        {/* TEAM SECTION (SESUAI CSS BARU) */}
        <div style={{ marginBottom: '4rem' }}>
          <Reveal width="100%">
             <h2 className="section-title">Tim Kami</h2>
          </Reveal>

          <div className="team-grid">
            {teamMembers.map((member, i) => (
              // Kita bungkus Reveal di luar card agar animasi masuknya rapi per item
              <Reveal key={member.id} width="100%" delay={i * 0.1}> 
                <div className="team-card">
                  {/* Bagian Foto */}
                  <div className="team-img-wrapper">
                    <img src={member.img} alt={member.name} />
                  </div>
                  
                  {/* Bagian Info (Nama & Jabatan) */}
                  <div className="team-info">
                    <h4>{member.name}</h4>
                    <span className="team-role">{member.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* FOOTER KONTAK */}
        <Reveal width="100%">
          <div className="contact-footer glass-panel">
            <h3>Hubungi Kami</h3>
            <div className="contact-details-row">
              <div className="contact-item">
                <span className="icon">📧</span>
                <div className="text">
                  <small>Email</small>
                  <strong>admin@energyfuture.co.id</strong>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">☎️</span>
                <div className="text">
                  <small>Extension</small>
                  <strong>500</strong>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </motion.div>
  );
};

export default Tentang;