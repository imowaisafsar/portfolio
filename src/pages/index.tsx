import Head from 'next/head'
import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-1.png';
import Link from 'next/link';
import { LinkArrow } from '../components/Icons';
import HireMe from '../components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import AnimatedText from '../components/AnimatedText';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Owais Afsar | Full stack Developer</title>
        <meta name="description" content="Full stack Developer" />
      </Head>
      <main className={`flex items-center text-dark w-full min-h-screen dark:text-light`}>
        <Layout className={`pt-0`}>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt='Owais Afsar' className='w-full h-auto' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text='Turning Vision Into Reality With Code And Design.' className='!text-6xl !text-left' />
              <p className='my-4 text-base font-medium'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
              <div className="flex items-center self-start mt-2">
                <Link href={'/dummy.pdf'} target={'_blank'} className='flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light' download={true}>
                  Resume <LinkArrow className={`w-6 ml-1`} />
                </Link>
                <Link href={'mailto:owais.afsar@outlook.com'} target={'_blank'} className={`ml-5 text-lg font-medium capitalize text-dark dark:text-light underline`}>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt='Owais Afsar' className='w-full h-auto' />
        </div>

      </main>
    </>
  )
}
export default Home;