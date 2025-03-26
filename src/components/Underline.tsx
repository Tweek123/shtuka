import React from 'react';

interface UnderlineProps {
  children: any;
  gradient?: string;
  className?: string;
}

const Underline: React.FC<UnderlineProps> = ({ children, gradient = 'to-[#fed841]' , className}) => {
  const words = children.split(' ');

  return words.map((word: any, index: any) => (
      <span key={index} className={`relative inline-block bg-gradient-to-b from-transparent via-transparent via-80% ${gradient} to-80% bg-[length:100px_1.2em] ${className}`}>
        {word}
        {index < words.length - 1 && <span className="inline-block">&nbsp;</span>}
      </span>
    ))
};

export default Underline;