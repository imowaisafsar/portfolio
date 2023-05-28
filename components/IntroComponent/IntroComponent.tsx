"use client";

import React, { FC } from 'react';
import styles from './IntroComponent.module.css';
import { TypeAnimation } from 'react-type-animation';
import { Shantell_Sans } from 'next/font/google';

import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const shantellSans = Shantell_Sans({
    weight: '400',
    subsets: ['latin'],
});

interface IntroComponentProps { }

const IntroComponent: FC<IntroComponentProps> = () => {

    const socialAccounts = [
        {
            site: 'LinkedIn',
            title: 'Muhammad Owais',
            link: 'https://www.linkedin.com/in/owais-dev/',
            icon: <FaLinkedinIn />
        },
        {
            site: 'Facebook',
            title: 'Muhammad Owais',
            link: 'https://www.facebook.com/be.owais/',
            icon: <FaFacebookF />
        },
        {
            site: 'Twitter',
            title: 'Muhammad Owais',
            link: 'https://twitter.com/owais_afsar',
            icon: <FaTwitter />
        },
        {
            site: 'Instagram',
            title: 'Muhammad Owais',
            link: 'https://www.instagram.com/owais_dev/',
            icon: <FaInstagram />
        }
    ];

    return (
        <div className='flex flex-col justify-center items-center w-screen h-[calc(100vh_-_54px)] bg-gray-200 dark:bg-black/80'>
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
                    <span className='block'>with 3+ years experience</span>
                    <span className='block'>based in Karachi</span>
                </p>
            </span>
            <h1 className={`text-blue-700 font-bold xl:text-[180px] leading-none m-0 p-0 drop-shadow-10x10dark dark:drop-shadow-10x10light ${shantellSans.className}`}>Owais</h1>
            <div className='w-96 overflow-hidden mt-5 p-0 h-[1px] bg-black dark:bg-white opacity-75'></div>
            <div className='flex m-0 mt-6'>

                {socialAccounts.map(socialMediaAccount => (
                    <span className='mx-2' key={socialMediaAccount.link}>
                        <a href={socialMediaAccount.link} title={`${socialMediaAccount.title} | ${socialMediaAccount.site}`} target='_blank' className='text-black dark:text-white p-2.5 text-center text-3xl inline-block'>
                            {socialMediaAccount.icon}
                        </a>
                    </span>
                ))}

            </div>
        </div>
    )
};

export default IntroComponent;
