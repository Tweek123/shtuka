import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`flex flex-row w-full max-w-screen-xl py-8 md:py-12  ${className} lg:py-24`}>
      {children}
    </div>
  );
};

export default Container;