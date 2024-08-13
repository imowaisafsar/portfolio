import '../styles/globals.css'
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
});

const App: React.FC<any> = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </div>
    </>
  )
}

export default App;
