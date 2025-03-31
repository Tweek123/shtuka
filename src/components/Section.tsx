import React from 'react';
import cn from 'classnames';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
  padding?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  background,
  padding = 'px-4 md:px-16',
}) => {
  return (
    <section
      className={cn(
        'flex w-full items-center justify-center',
        padding,
        className,
        background
      )}
    >
      {children}
    </section>
  );
};

export default Section;
