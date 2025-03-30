import React from 'react';
import Typography from './Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

const Card = ({
  icon,
  text,
  subtext,
  background,
  className,
}: {
  icon: IconDefinition;
  text: string | React.ReactElement;
  subtext: string | React.ReactElement;
  background?: string;
  className?: string;
}) => {
  return (
    <div
      className={`group flex w-full flex-col items-center whitespace-pre-line px-4 py-24 text-center transition duration-500 hover:bg-black sm:py-12 md:px-8 md:py-24 lg:py-12 ${background} ${className}`}
    >
      <FontAwesomeIcon
        height={64}
        width={64}
        className="mb-8 size-16 text-[#eb2f5b] md:mb-8 md:size-12 lg:mb-8"
        icon={icon}
      />
      {typeof text === 'string' ? (
        <Typography
          className="mb-4 text-[#111] transition duration-500 group-hover:text-white md:text-3xl lg:mb-4 lg:text-3xl"
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
