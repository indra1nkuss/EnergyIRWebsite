import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import '../App.css';

const Tentang = () => {
  const teamMembers = [
    { id: 1, name: 'Goldy Raymond PPS', role: 'EC Manager', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'M Priyo Pambudi', role: 'EC Supervisor', img: 'https://images.unsplash.com/photo-1573496359-7013ac2bebb5?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Marini', role: 'EC Document Control', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Indra Nurul Kusuma', role: 'EC Analyst', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80' },
    { id: 5, name: 'Juliansyah', role: 'EC Patrol & Control', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <motion.div 
      className="page-transition"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <div className="container">
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Reveal width="100%">
            <div className="logo-circle-wrapper">
               {/* Ganti src ini dengan logo perusahaan asli jika ada */}
               <img src="https://via.placeholder.com/150" alt="Logo" className="about-logo" />
            </div>
          </Reveal>
          
          <Reveal width="100%" delay={0.1}>
             <h1 className="about-title">Energy Future</h1>
             <p className="about-subtitle">Empowering Through Knowledge</p>
          </Reveal>
        </div>

        {/* PROFIL PERUSAHAAN */}
        <Reveal width="100%" delay={0.2}>
          <div className="glass-panel">
            <div className="section-header"><h3>Tentang Kami</h3></div>
            <div className="about-text">
              <p>
                Energy Future adalah portal manajemen pelatihan terintegrasi yang didedikasikan untuk 
                mengembangkan talenta terbaik di sektor energi. Kami berkomitmen menyediakan 
                platform yang transparan, modern, dan mudah diakses untuk memantau perkembangan 
                kompetensi karyawan.
              </p>
            </div>
          </div>
        </Reveal>

        {/* TIM KAMI (GRID FIXED) */}
        <div style={{ marginBottom: '4rem' }}>
          <Reveal width="100%">
             <h2 className="section-divider-title">Tim Kami</h2>
          </Reveal>

          {/* GRID: Menggunakan class 'team-grid' yang sudah diperbaiki di CSS */}
          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <Reveal key={member.id} width="100%" delay={i * 0.1}>
                <div className="team-card">
                  <div className="team-img-wrapper">
                    <img src={member.img} alt={member.name} />
                  </div>
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
                <span style={{fontSize:'1.5rem'}}>📧</span>
                <div className="text">
                  <small>Email</small>
                  <strong>admin@energyfuture.co.id</strong>
                </div>
              </div>
              
              <div className="contact-item">
                <span style={{fontSize:'1.5rem'}}>☎️</span>
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