import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`flex flex-row w-full py-8 md:py-12 lg:py-16 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
