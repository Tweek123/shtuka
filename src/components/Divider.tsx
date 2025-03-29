import React from 'react';

interface DividerProps {
  className?: string;
  thickness?: string;
  color?: string;
  orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({
  className,
  thickness = '3px',
  color = '',
  orientation = 'horizontal',
}) => {
  const style =
    orientation === 'horizontal' ? { height: thickness } : { width: thickness };

  return (
    <div
      className={`${orientation === 'horizontal' ? 'w-full' : 'h-full'} bg-black ${color} ${className}`}
      style={style}
    />
  );
};

export default Divider;
