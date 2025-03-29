import Image from 'next/image';
import Typography from './Typography';

const Project = ({
  className,
  src,
  text,
  subtext,
}: {
  className?: string;
  src: string;
  text: string;
  subtext: string;
}) => {
  return (
    <div
      className={`flex flex-col aspect-[2/1] flex-1 relative group ${className}`}
    >
      <Image
        className="absolute"
        src={src}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex flex-col absolute bottom-0 left-0 border-4 border-[#EB2F5B] p-4 m-4 mr-auto max-w-60 group-hover:flex sm:max-w-[400px] md:mx-2">
        <Typography
          className="mb-4 text-sm sm:text-lg md:text-xl"
          fontFamily="VarelaRound"
          variant="p"
          color="text-[#fed841]"
        >
          {text}
        </Typography>
        <Typography
          className="text-base sm:text-lg md:text-xl"
          variant="h1"
          fontFamily="womby"
          color="text-white"
        >
          {subtext}
        </Typography>
      </div>
    </div>
  );
};

export default Project;
