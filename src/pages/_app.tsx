import '../styles/globals.css'
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
});

const App: React.FC<any> = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default App;
