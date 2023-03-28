"use client";

import React, { FC } from 'react';
import styles from './IntroComponent.module.css';
import { TypeAnimation } from 'react-type-animation';
import { Shantell_Sans } from 'next/font/google';

const shantellSans = Shantell_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

interface IntroComponentProps { }

const IntroComponent: FC<IntroComponentProps> = () => (
  <div className='flex flex-col justify-center items-center w-screen h-full min-h-screen bg-gray-200 dark:bg-black/50'>
    <h1 className={`text-gray-800 dark:text-gray-200 xl:text-[180px] leading-none m-0 p-0 drop-shadow-10x10dark dark:drop-shadow-10x10light ${shantellSans.className}`}>Hello<span className='text-blue-700'>.</span></h1>
    <span className='flex items-center'>
      <h1 className={`text-gray-800 dark:text-gray-200 xl:text-[180px] leading-none m-0 p-0 drop-shadow-10x10dark dark:drop-shadow-10x10light ${shantellSans.className}`}>I am</h1>
      <p className='ml-8 mt-0 mb-0 font-bold text-xl text-gray-800 dark:text-gray-200'>
        <span className='block'>
          <TypeAnimation
            sequence={[
              'Full Stack',
              1000,
              'Front-end',
              1000,
              'Back-end',
              1000,
              'Metaverse',
              1000,
            ]}
            repeat={Infinity}
          />
          {' '}<span>Developer</span>
        </span>
        <span className='block'>with 3 years experience</span>
        <span className='block'>based in Karachi</span>
      </p>
    </span>
    <h1 className={`text-blue-700 font-bold xl:text-[180px] leading-none m-0 p-0 drop-shadow-10x10dark dark:drop-shadow-10x10light ${shantellSans.className}`}>Owais</h1>
  </div>
);

export default IntroComponent;
