import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import NavBarLink from './NavBarLink';
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

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
            <nav>

                {nabBarMenuItems.map((nabBarMenuItem) => (
                    <NavBarLink
                        key={nabBarMenuItem.key}
                        href={nabBarMenuItem.href}
                        title={nabBarMenuItem.title}
                        className={nabBarMenuItem.className}
                    />
                ))}

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
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar;