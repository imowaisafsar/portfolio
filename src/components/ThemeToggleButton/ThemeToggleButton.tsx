"use client"

import React, { FC } from 'react';
import styles from './ThemeToggleButton.module.css';
import { useTheme } from "next-themes";
import { MdLightMode, MdNightlight } from 'react-icons/md';

interface ThemeToggleButtonProps { }

const ThemeToggleButton: FC<ThemeToggleButtonProps> = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
      className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2'>
      {theme === 'light' ? <MdNightlight /> : <MdLightMode />}
    </button>
  )
};

export default ThemeToggleButton;
