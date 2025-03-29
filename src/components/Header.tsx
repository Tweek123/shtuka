'use client'
import React from 'react';
import Typography from './Typography';
import Image from 'next/image'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white px-4 md:px-8 lg:px:16 py-4 flex flex-row gap-8">
      <div className="flex flex-row w-32 aspect-auto relative">
        <Image src="/images/logo.png" alt='logo' layout='fill' />
      </div>
      <nav>
        <ul className='flex flex-row gap-8'>
          <li className='hover:opacity-50 cursor-pointer font-normal'><Typography variant='p'>главная</Typography></li>
          <li className='hover:opacity-50 cursor-pointer font-normal'><Typography variant='p'>услуги</Typography></li>
          <li className='hover:opacity-50 cursor-pointer font-normal'><Typography variant='p'>портфолио</Typography></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;