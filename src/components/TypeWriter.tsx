
import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  className?: string;
  cursorStyle?: 'solid' | 'blinking' | 'none';
  delay?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  text, 
  speed = 100,
  className = '',
  cursorStyle = 'blinking',
  delay = 0
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  // Initial delay before starting to type
  useEffect(() => {
    if (!started && delay > 0) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      
      return () => clearTimeout(startTimeout);
    } else if (!started) {
      setStarted(true);
    }
  }, [delay, started]);

  // Typing effect
  useEffect(() => {
    if (started && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(current => current + text[index]);
        setIndex(index + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [index, speed, text, started]);

  // Cursor styling
  const getCursorStyle = () => {
    if (cursorStyle === 'none' || index >= text.length) return '';
    if (cursorStyle === 'solid') return '|';
    return <span className="animate-pulse">|</span>;
  };

  return (
    <span className={`inline-block ${className}`}>
      <span className="font-bold">{displayedText}</span>
      {getCursorStyle()}
    </span>
  );
};

export default TypeWriter;