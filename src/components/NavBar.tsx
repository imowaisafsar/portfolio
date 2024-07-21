import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import NavBarLink, { NavBarMobileLink } from './NavBarLink';
import { INavBarLinkModel } from '../../core/interfaces/INavBarLinkModel';
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher, { DARK_THEME_CLASS, LIGHT_THEME_CLASS } from '../../hooks/useThemeSwitcher';

const nabBarMenuItems: INavBarLinkModel[] = [
    { key: 1, href: '/', title: 'Home', className: 'mr-4' },
    { key: 2, href: '/about', title: 'About', className: 'mx-4' },
    { key: 3, href: '/projects', title: 'Projects', className: 'mx-4' },
    { key: 4, href: '/articles', title: 'Articles', className: 'ml-4' }
];

const NavBar: React.FC = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

            <button type='button' title='Menu' className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className={`w-full flex justify-between items-center lg:hidden`}>
                <nav>
                    {
                        nabBarMenuItems.map((nabBarMenuItem) => (
                            <NavBarLink
                                key={nabBarMenuItem.key}
                                href={nabBarMenuItem.href}
                                title={nabBarMenuItem.title}
                                className={nabBarMenuItem.className}
                            />
                        ))
                    }
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href='https://twitter.com' target={'_blank'} title='Twitter' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3'>
                        <TwitterIcon />
                    </motion.a>
                    <motion.a href='https://github.com' target={'_blank'} title='GitHub' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'>
                        <GithubIcon />
                    </motion.a>
                    <motion.a href='https://linkedin.com' target={'_blank'} title='LinkedIn' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3'>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href='https://pinterest.com' target={'_blank'} title='Pinterest' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3'>
                        <PinterestIcon />
                    </motion.a>

                    <button onClick={() => setMode(mode === LIGHT_THEME_CLASS ? DARK_THEME_CLASS : LIGHT_THEME_CLASS)}
                        type='button' className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === DARK_THEME_CLASS ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
                        {
                            mode === DARK_THEME_CLASS ?
                                <SunIcon className={`fill-dark`} /> :
                                <MoonIcon className={`fill-dark`} />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div className={`min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-sm py-32`}
                        initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                        animate={{ scale: 1, opacity: 1 }}>
                        <nav className={`flex flex-col justify-center items-center`}>
                            {
                                nabBarMenuItems.map((nabBarMenuItem) => (
                                    <NavBarMobileLink
                                        key={nabBarMenuItem.key}
                                        href={nabBarMenuItem.href}
                                        title={nabBarMenuItem.title}
                                        className={``}
                                        toggle={handleClick}
                                    />
                                ))
                            }
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap'>
                            <motion.a href='https://twitter.com' target={'_blank'} title='Twitter' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3 sm:mx-1'>
                                <TwitterIcon />
                            </motion.a>
                            <motion.a href='https://github.com' target={'_blank'} title='GitHub' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 bg-light text-dark rounded-full dark:bg-dark dark:text-light sm:mx-1'>
                                <GithubIcon />
                            </motion.a>
                            <motion.a href='https://linkedin.com' target={'_blank'} title='LinkedIn' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 sm:mx-1'>
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a href='https://pinterest.com' target={'_blank'} title='Pinterest' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3 sm:mx-1'>
                                <PinterestIcon />
                            </motion.a>

                            <button onClick={() => setMode(mode === LIGHT_THEME_CLASS ? DARK_THEME_CLASS : LIGHT_THEME_CLASS)}
                                type='button' className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1 ${mode === DARK_THEME_CLASS ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
                                {
                                    mode === DARK_THEME_CLASS ?
                                        <SunIcon className={`fill-dark`} /> :
                                        <MoonIcon className={`fill-dark`} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                    : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar;