import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  // Tambahkan property 'badge: true' pada menu yang ingin di-highlight
  const navItems = [
    { path: '/', label: 'Beranda', icon: '🏠' },
    { path: '/daftar-pemenang', label: 'Pemenang', icon: '🏆', badge: true }, // <--- ADA BADGE
    { path: '/dokumentasi', label: 'Dokumentasi', icon: '📸' },
    { path: '/tentang', label: 'Tentang', icon: 'ℹ️' },
  ];

  const sidebarVariants = {
    closed: { x: "100%", opacity: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    open: { x: "0%", opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            Energy<span style={{color: 'var(--primary)'}}>Portal</span>
          </Link>

          {/* Menu Desktop */}
          <div className="nav-menu-desktop">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
                {/* Tampilkan Badge jika ada */}
                {item.badge && <span className="nav-badge pulse">New</span>}
                
                {location.pathname === item.path && (
                  <motion.div className="active-dot" layoutId="activeDot" />
                )}
              </Link>
            ))}
          </div>

          {/* Tombol Hamburger dengan Notifikasi Titik Merah jika belum dibuka */}
          <div className="mobile-toggle" onClick={() => setIsOpen(true)}>
            <div className="hamburger-wrapper">
               {/* Titik notifikasi di icon hamburger */}
              <span className="hamburger-dot pulse"></span> 
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* === MOBILE SIDEBAR MENU === */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="mobile-backdrop"
              initial="closed" animate="open" exit="closed"
              variants={overlayVariants}
              onClick={() => setIsOpen(false)}
            />

            <motion.div 
              className="mobile-sidebar"
              initial="closed" animate="open" exit="closed"
              variants={sidebarVariants}
            >
              <div className="sidebar-header">
                <span className="sidebar-logo">Menu</span>
                <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
              </div>

              <div className="sidebar-content">
                {navItems.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <span style={{marginRight: '10px'}}>{item.icon}</span>
                      {item.label}
                    </div>
                    {/* Tampilkan Badge di Mobile juga */}
                    {item.badge && <span className="nav-badge-mobile pulse">Update!</span>}
                  </Link>
                ))}
              </div>

              <div className="sidebar-footer">
                <p>© 2024 Energy Portal</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;