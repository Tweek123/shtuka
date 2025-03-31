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
      className={`group relative flex flex-col overflow-hidden ${className}`}
    >
      <Image
        className="absolute"
        src={src}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute flex h-full w-full flex-col bg-black bg-opacity-50 transition duration-500 md:bg-opacity-0 md:group-hover:bg-opacity-50"></div>
      <div className="absolute bottom-0 left-0 mx-4 mb-4 flex w-4/6 flex-col border-4 border-[#EB2F5B] p-12 transition-all duration-500 group-hover:bottom-0 group-hover:flex md:-bottom-full md:mx-2 md:mr-auto md:w-5/6 md:p-4">
        <Typography
          className="mb-4 text-xl md:text-xs"
          fontFamily="VarelaRound"
          variant="p"
          color="text-[#fed841]"
        >
          {text}
        </Typography>
        <Typography
          className="text-2xl font-light md:text-xl"
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
