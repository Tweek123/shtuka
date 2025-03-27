import React from 'react';
import Typography from './Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

const Info = ({
  icon,
  text,
  subtext,
  className,
}: {
  icon: IconDefinition;
  text: string | React.ReactElement;
  subtext: string | React.ReactElement;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col w-full text-center justify-center items-center py-24 px-4 sm:py-12 md:py-24 md:px-8 ${className} lg:px-4`}
    >
      <FontAwesomeIcon
        height={64}
        width={64}
        className="mb-16 text-[#ce528e] sm:mb-4 md:mb-8 md:size-20 lg:size-12"
        icon={icon}
      />
      {typeof text === 'string' ? (
        <Typography
          className="text-[#111] text-2xl mb-9 hover:text-[#ce528e] font-normal md:text-3xl lg:text-xl lg:mb-4"
          fontFamily="womby"
          variant="h1"
        >
          {text}
        </Typography>
      ) : (
        text
      )}
      {typeof subtext === 'string' ? (
        <Typography
          className="text-black text-lg hover:text-[#ce528e] font-light md:text-2xl lg:text-base"
          fontFamily="womby"
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

export default Info;
