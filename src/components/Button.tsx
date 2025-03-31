import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ children, className = '', size = 'md' }: ButtonProps) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  return (
    <Link href="https://mrqz.me/616e6acc227a94003f408e60" className="mx-auto">
      <button
        className={`${sizeClasses[size]} mx-auto w-full max-w-64 text-nowrap rounded-full bg-[#eb2f5b] uppercase text-white transition-colors duration-300 hover:bg-[#d8275a] ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
