import React from 'react';
import Typography from './Typography';

const Info = ({
  Icon,
  text,
  subtext,
  className,
}: {
  Icon: any;
  text: string | React.ReactElement;
  subtext: string | React.ReactElement;
  className?: string;
}) => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center px-4 py-24 text-center md:px-8 md:py-24 ${className} md:px-4`}
    >
      <Icon
        className="mb-8 flex size-16 flex-col text-[#ce528e] md:mb-8 md:size-12"
        stroke="#ce528e"
      />

      {typeof text === 'string' ? (
        <Typography
          className="mb-4 text-4xl font-normal text-[#111] transition duration-500 hover:text-[#ce528e] md:mb-4 md:text-2xl"
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
          className="text-base font-light text-black group-hover:text-[#ce528e] md:text-xs"
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

export default Info;
