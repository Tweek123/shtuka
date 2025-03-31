'use client';
import React, { useState } from 'react';
import Typography from './Typography';
import Image from 'next/image';
import { Menu } from 'react-feather';

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex flex-row items-center justify-between gap-8 bg-white px-12 py-4 md:justify-normal md:px-16 md:py-1">
      <div className="relative flex aspect-[167/34] w-28 cursor-pointer md:w-16">
        <Image src="/images/logo.png" alt="logo" layout="fill" />
      </div>
      <nav className="ml-a hidden md:flex md:flex-row">
        <ul className="gap-8 md:flex">
          <li className="h-fit cursor-pointer hover:opacity-50">
            <Typography
              fontFamily="helveticaNeue"
              className="!text-3xl text-black md:!text-xs"
              variant="p"
            >
              главная
            </Typography>
          </li>
          <li className="h-fit cursor-pointer text-lg font-normal hover:opacity-50">
            <Typography
              fontFamily="helveticaNeue"
              className="!text-3xl text-black md:!text-xs"
              variant="p"
            >
              услуги
            </Typography>
          </li>
          <li className="h-fit cursor-pointer text-lg font-normal hover:opacity-50">
            <Typography
              fontFamily="helveticaNeue"
              className="!text-3xl text-black md:!text-xs"
              variant="p"
            >
              портфолио
            </Typography>
          </li>
        </ul>
      </nav>
      <Menu
        className="flex size-8 cursor-pointer flex-col text-black md:hidden md:size-12"
        onClick={() => setIsShowMenu((show) => !show)}
      />
      {isShowMenu && (
        <div className="fixed block w-full overflow-hidden before:fixed before:inset-0 before:z-50 before:bg-black before:opacity-50 md:!block">
          <button
            onClick={() => setIsShowMenu(false)}
            id="toggleClose"
            className="fixed right-4 top-2 z-[100] flex h-9 w-9 items-center justify-center rounded-full border bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 fill-slate-900"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="fixed left-0 top-0 z-50 h-full w-1/2 min-w-[300px] space-y-3 overflow-auto bg-white p-6 shadow-md md:ml-14 md:flex md:gap-x-5">
            <li className="mb-6 block px-3">
              <div className="relative flex aspect-[167/34] w-32 flex-row">
                <Image src="/images/logo.png" alt="logo" layout="fill" />
              </div>
            </li>
            <li className="border-b px-3 py-3">
              <li className="cursor-pointer hover:opacity-50">
                <Typography className="!text-3xl text-black" variant="p">
                  главная
                </Typography>
              </li>
            </li>
            <li className="border-b px-3 py-3">
              <li className="cursor-pointer hover:opacity-50">
                <Typography className="!text-3xl text-black" variant="p">
                  услуги
                </Typography>
              </li>
            </li>
            <li className="border-b px-3 py-3">
              <li className="cursor-pointer hover:opacity-50">
                <Typography className="!text-3xl text-black" variant="p">
                  портфолио
                </Typography>
              </li>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
