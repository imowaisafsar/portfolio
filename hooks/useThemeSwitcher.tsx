import React, { useEffect, useState } from 'react'

const useThemeSwitcher: () => [string, React.Dispatch<React.SetStateAction<string>>] = () => {


    const preferDarkQuery = `(prefer-color-scheme: dark)`;
    const [mode, setMode] = useState('');

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem('theme');

        const handleThemeChange = () => {
            if (userPref) {
                let check = userPref == DARK_THEME_CLASS ? DARK_THEME_CLASS : LIGHT_THEME_CLASS;
                setMode(check);

                if (check == DARK_THEME_CLASS) {
                    document.documentElement.classList.add(DARK_THEME_CLASS);
                } else {
                    document.documentElement.classList.remove(DARK_THEME_CLASS);
                }
            } else {
                let check = mediaQuery.matches ? DARK_THEME_CLASS : LIGHT_THEME_CLASS;
                setMode(check);

                // window.localStorage.setItem('theme', check);

                if (check == DARK_THEME_CLASS) {
                    document.documentElement.classList.add(DARK_THEME_CLASS);
                } else {
                    document.documentElement.classList.remove(DARK_THEME_CLASS);
                }
            }
        }
        handleThemeChange();

        mediaQuery.addEventListener('change', handleThemeChange);
        return () => mediaQuery.removeEventListener('change', handleThemeChange);
    }, []);

    useEffect(() => {
        if (mode == DARK_THEME_CLASS) {
            window.localStorage.setItem('theme', DARK_THEME_CLASS);
            document.documentElement.classList.add(DARK_THEME_CLASS);
        }
        if (mode == LIGHT_THEME_CLASS) {
            window.localStorage.setItem('theme', LIGHT_THEME_CLASS);
            document.documentElement.classList.remove(DARK_THEME_CLASS);
        }
    }, [mode]);

    return [mode, setMode];
}

export const DARK_THEME_CLASS = 'dark';
export const LIGHT_THEME_CLASS = 'light';
export default useThemeSwitcher