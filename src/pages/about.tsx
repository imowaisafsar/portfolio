/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import developerImage from '../../public/images/profile/developer-pic-2.jpg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import AnimatedNumber from '../components/AnimatedNumber';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';

const about: React.FC = () => {
  return (
    <>
      <Head>
        <title>About | Owais Afsar</title>
        <meta name="description" content="About | Owais Afsar" />
      </Head>
      <main className={`flex flex-col items-center w-full justify-center text-dark dark:text-light`}>
        <Layout className={`pt-16`}>
          <AnimatedText text='Passion Fuels Purpose!' className='mb-16' />
          <div className="grid w-full grid-cols-8 gap-16">

            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
              <p className="font-medium">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                new and innovative ways to bring my clients' visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look pretty – it's about solving problems and
                creating intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, mobile app, or
                other digital product, I bring my commitment to design excellence and user-centered thinking to
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8">
              <div className="absolute top-2 -right-3 -z-10 w-[101%] h-[101%] rounded-2xl bg-dark dark:bg-light" />
              <Image src={developerImage} alt='Owais Afsar' className='w-full h-auto rounded-2xl' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumber value={50} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>satisfied clients</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumber value={40} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumber value={4} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>years of experience</h2>
              </div>

            </div>

          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about