import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Card Siluet yang "Bernafas" */}
      <div className="energy-card-silhouette">
        <p>
          Made with <span className="bolt-animate">⚡</span> 
          <span className="text-shimmer"> Energy Conservation</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;