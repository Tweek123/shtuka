import React from 'react';
import Typography from './Typography';

interface SquareListProps {
  items: string[];
}

const SquareList: React.FC<SquareListProps> = ({ items }) => {
  return (
    <ul className="flex list-none flex-col gap-4 pl-5">
      {items.map((item, index) => (
        <li key={index} className="relative pl-5">
          <span className="absolute left-0 top-1.5 h-2 w-2 bg-[#777777]"></span>
          <Typography
            className="font-light text-[#777777] md:text-xs"
            fontFamily="CourierNew"
            variant="p"
          >
            {item}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export default SquareList;
