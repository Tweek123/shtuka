import React from 'react';
import Typography from './Typography';
import { Icon } from 'react-feather';

const Card = ({
  Icon,
  text,
  subtext,
  background,
  className,
}: {
  Icon: any;
  text: string | React.ReactElement;
  subtext: string | React.ReactElement;
  background?: string;
  className?: string;
}) => {
  return (
    <div
      className={`group flex w-full flex-col items-center whitespace-pre-line px-4 py-12 text-center transition duration-500 hover:bg-black md:px-8 md:py-12 ${background} ${className}`}
    >
      <Icon
        className="mb-8 flex size-16 flex-col text-[#eb2f5b] md:mb-8 md:size-12"
        stroke="#eb2f5b"
      />
      {typeof text === 'string' ? (
        <Typography
          className="mb-4 text-[#111] transition duration-500 group-hover:text-white md:mb-4 md:text-3xl"
          fontFamily="helveticaNeue"
          variant="h1"
        >
          {text}
        </Typography>
      ) : (
        text
      )}
      {typeof subtext === 'string' ? (
        <Typography
          className="text-base text-[#555] transition duration-500 group-hover:text-white md:text-xl lg:text-xs"
          fontFamily="helveticaNeue"
          variant="p"
        >
          {subtext}
        </Typography>
      ) : (
        subtext
      )}
    </div>
  );
};

export default Card;
