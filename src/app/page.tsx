"use client";

import styles from './page.module.css'
import { Ubuntu } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Intro from '@/components/Intro/Intro';
import TopNavbar from '@/components/TopNavbar/TopNavbar';

// const ubuntu = Ubuntu({
//   weight: '300',
//   subsets: ['latin']
// });

export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      <main className={`w-screen min-h-screen`}>
        <TopNavbar />
        <Intro />
      </main>
    </ThemeProvider>
  )
}
