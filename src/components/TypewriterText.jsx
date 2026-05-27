import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 70, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [index, text, delay]);

  return <span className={className}>{displayText}</span>;
};

export default TypewriterText;