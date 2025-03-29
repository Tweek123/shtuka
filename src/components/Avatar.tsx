import Image from 'next/image';

type Size = 'sm' | 'md' | 'lg' | 'xl';

const sizeClasses = {
  sm: 'w-24',
  md: 'w-36',
  lg: 'w-48',
  xl: 'w-80',
};

const Avatar = ({
  className,
  src,
  hasBorder = true,
  size = 'md',
}: {
  className?: string;
  src: string;
  hasBorder?: boolean;
  size?: Size;
}) => {
  return (
    <div
      className={`${sizeClasses[size]} aspect-square relative rounded-full bg-gray-300 flex items-center justify-center overflow-hidden shadow-lg m-4 ${hasBorder ? 'border-4 border-[#FEFEFE]' : ''} ${className}`}
    >
      <Image src={src} alt="Avatar" fill className="object-cover" />
    </div>
  );
};

export default Avatar;
