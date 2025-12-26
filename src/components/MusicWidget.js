import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MusicWidget.css';

const MusicWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [status, setStatus] = useState("idle");

  // === LINK STREAMING INTERNASIONAL (ANTI-BLOKIR) ===
  
  // OPSI 1: I LOVE RADIO (Jerman) - SANGAT STABIL
  // Genre: Top 40, Dance, TikTok Hits, Pop Global
  const URL_EUROPE = "https://streams.ilovemusic.de/iloveradio1.mp3";

  // OPSI 2: POWER 181 (USA) - CADANGAN
  // Genre: Billboard Top 40
  const URL_USA = "https://listen.181fm.com/181-power_128k.mp3";

  // Kita pakai Opsi 1 (Eropa) karena servernya sangat kencang
  const STREAM_URL = URL_EUROPE; 
  
  const audioRef = useRef(new Audio(STREAM_URL));

  // Fungsi Play dengan "Cache Busting" (Supaya selalu live)
  const togglePlay = () => {
    const audio = audioRef.current;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setStatus("idle");
    } else {
      setStatus("loading");
      
      // Tambahkan angka acak di belakang URL agar browser menganggap ini koneksi baru
      // Ini trik ampuh mengatasi "Network Error"
      audio.src = STREAM_URL + "?nocache=" + Date.now(); 
      audio.load();
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setStatus("playing");
          })
          .catch((error) => {
            console.error("Browser Block:", error);
            setIsPlaying(false);
            setStatus("error");
          });
      }
    }
  };

  // Atur Volume
  useEffect(() => {
    if(audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handle Error Putus
  useEffect(() => {
    const audio = audioRef.current;
    
    // Jika stream putus, otomatis set status error
    audio.onerror = () => {
      console.log("Stream Error/Offline");
      setStatus("error");
      setIsPlaying(false);
    };

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <div className={`music-widget ${isExpanded ? 'expanded' : 'collapsed'}`}>
      
      {/* TOMBOL UTAMA */}
      <div className="music-toggle" onClick={() => setIsExpanded(!isExpanded)}>
        <motion.div 
          className="ncs-circle"
          animate={{ 
            rotate: isPlaying ? 360 : 0,
            // Warna Biru Neon (Kesan Internasional/Futuristik)
            borderColor: status === 'error' ? "#ff4444" : (isPlaying ? "#0ea5e9" : "#fff"),
            boxShadow: isPlaying ? "0 0 20px rgba(14, 165, 233, 0.6)" : "0 0 0px rgba(0,0,0,0)"
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: "linear" }
          }}
        >
          <div className="inner-icon">
            {status === 'loading' ? '⌛' : (isPlaying ? 'IlI' : '🌍')}
          </div>
        </motion.div>
      </div>

      {/* PANEL KONTROL */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="player-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div className="track-info">
              {/* Gambar Cover Global */}
              <motion.img 
                src="https://cdn-icons-png.flaticon.com/512/3222/3222791.png" 
                alt="Global Radio" 
                className="album-art"
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ background: '#e0f2fe', padding: '2px' }}
              />
              
              <div className="track-details">
                <div className="scrolling-text">
                  <h4>Global Top 40 Hits</h4>
                </div>
                {/* Status Text */}
                <p style={{color: status === 'error' ? '#ff4444' : '#94a3b8', fontSize:'11px'}}>
                  {status === 'loading' ? "Connecting to Europe..." : 
                   (status === 'error' ? "Connection Failed ❌" : 
                   (isPlaying ? "LIVE ON AIR 📡" : "Paused"))}
                </p>
                <span className="source-badge" style={{background:'#0ea5e9', color:'white'}}>
                   INTL HITS 🎵
                </span>
              </div>
            </div>

            <div className="player-controls">
              <button 
                onClick={togglePlay} 
                className="play-btn" 
                style={{ 
                  width: '100%', 
                  background: status === 'error' ? '#333' : (isPlaying ? '#0ea5e9' : '#333'), // Biru Langit
                  color: 'white',
                  fontWeight: 'bold',
                  border: 'none'
                }}
              >
                {status === 'loading' ? 'LOADING...' : 
                 (status === 'error' ? 'RETRY' : 
                 (isPlaying ? '⏸ STOP MUSIC' : '▶ PLAY HITS'))}
              </button>
            </div>

            <div className="volume-control" style={{marginTop: '10px', padding: '0 5px'}}>
              <input 
                type="range" 
                min="0" max="1" step="0.1" 
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                style={{width: '100%', accentColor: '#0ea5e9', cursor: 'pointer'}}
              />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicWidget;