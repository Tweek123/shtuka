import React from 'react';
import Typography from '@/components/Typography';

const Card = ({
  text,
  subtext,
  background,
  className,
}: {
  text: string | React.ReactElement;
  subtext: string | React.ReactElement;
  background?: string;
  className?: string;
}) => {
  return (
    <div
      className={`md:py- group flex w-full flex-col px-4 py-12 md:px-8 ${background} ${className}`}
    >
      {typeof text === 'string' ? (
        <Typography
          className="mb-4 font-normal uppercase text-[#111] md:text-3xl lg:mb-2 lg:text-xl"
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
  );
};

export default Card;
