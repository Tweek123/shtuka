import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`flex w-full flex-row py-8 md:py-16 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
