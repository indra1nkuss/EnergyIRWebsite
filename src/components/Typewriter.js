import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 50, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    // Reset saat text berubah
    setDisplayedText(''); 
    
    // Tunggu delay awal sebelum mulai mengetik
    const startTimeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        if (index === text.length) clearInterval(interval);
      }, speed);
      
      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return <span>{displayedText}<span className="cursor-blink">|</span></span>;
};

export default Typewriter;