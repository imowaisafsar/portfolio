import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import React from 'react';

const Document: React.FC = () => {
  return (
    <Html lang="en">
      <Head />
      <Script id='theme-switch' strategy='beforeInteractive'>
        {`
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        `}
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
export default Document;
