import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import Typography from '@/components/Typography';

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
      className={`md:py- group flex w-full flex-row gap-8 px-4 py-12 md:px-8 ${background} ${className}`}
    >
      <div className="flex flex-grow flex-col">
        <FontAwesomeIcon
          className="mb-8 size-16 text-[#eb2f5b] md:mb-8 lg:mb-4 lg:size-12"
          icon={icon}
        />
      </div>
      <div className="flex flex-col">
        {typeof text === 'string' ? (
          <Typography
            className="mb-4 font-normal text-[#111] md:text-3xl lg:mb-2 lg:text-xl"
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
            className="text-base font-light text-[#555] md:text-xl lg:text-base"
            fontFamily="womby"
            variant="p"
          >
            {subtext}
          </Typography>
        ) : (
          subtext
        )}
      </div>
    </div>
  );
};

export default Card;
