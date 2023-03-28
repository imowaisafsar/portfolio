"use client";

import styles from './about.module.css'
import { Ubuntu } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import TopNavbarComponent from '@/components/TopNavbarComponent/TopNavbarComponent';
import AboutComponent from '@/components/AboutComponent/AboutComponent';

const ubuntu = Ubuntu({
    weight: '300',
    subsets: ['latin']
});

export default function About() {
    return (
        <ThemeProvider attribute='class'>
            <main className={`w-screen ${ubuntu.className}`}>
                <TopNavbarComponent />
                <AboutComponent />
            </main>
        </ThemeProvider>
    )
}