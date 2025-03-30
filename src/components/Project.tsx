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
      className={`group relative flex aspect-[2/1] flex-1 flex-col overflow-hidden ${className}`}
    >
      <Image
        className="absolute"
        src={src}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute flex h-full w-full flex-col bg-black bg-opacity-0 transition duration-500 group-hover:bg-opacity-50"></div>
      <div className="absolute -bottom-full left-0 m-4 mr-auto flex max-w-60 flex-col border-4 border-[#EB2F5B] p-4 transition-all duration-500 group-hover:bottom-0 group-hover:flex sm:max-w-[400px] md:mx-2">
        <Typography
          className="lg:text-sn mb-4 text-sm sm:text-lg md:text-xs"
          fontFamily="VarelaRound"
          variant="p"
          color="text-[#fed841]"
        >
          {text}
        </Typography>
        <Typography
          className="text-base font-light sm:text-lg md:text-xl"
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
