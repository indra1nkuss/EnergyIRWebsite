import React from 'react';
import './AuroraBackground.css';

const AuroraBackground = () => {
  return (
    <div className="aurora-wrapper">
      {/* Background Gelap Dasar */}
      <div className="aurora-base"></div>

      {/* 3 Bola Cahaya Aurora Bergerak */}
      <div className="aurora-blob blob-1"></div>
      <div className="aurora-blob blob-2"></div>
      <div className="aurora-blob blob-3"></div>

      {/* Overlay Garis Grid Halus (Opsional, biar makin tech) */}
      <div className="aurora-grid"></div>
    </div>
  );
};

export default AuroraBackground;