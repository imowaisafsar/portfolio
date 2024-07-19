import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../components/Icons'
import proj1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
    return (
        <article className='w-full flex justify-center items-center rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl relative'>
            <div className="absolute top-2 -right-3 -z-10 w-[100%] h-[101%] rounded-3xl bg-dark dark:bg-light" />
            <Link href={link} title={title} target='_blank' className={`w-1/2 cursor-pointer overflow-hidden rounded-3xl rounded-tr-none rounded-br-none`}>
                <FramerImage src={image} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className={`w-1/2 flex flex-col items-start justify-between px-7 py-6`}>
                <span className={`text-primary dark:text-primaryDark font-medium text-xl`}>{type}</span>
                <Link href={link} title={title} target='_blank' className={`hover:underline underline-offset-2`}>
                    <h2 className={`my-2 w-full text-left text-4xl font-bold overflow-ellipsis line-clamp-1 text-dark dark:text-light`}>{title}</h2>
                </Link>
                <p className={`my-4 font-medium text-dark dark:text-light overflow-ellipsis line-clamp-2`}>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} title={title} target='_blank' className={`w-10`}><GithubIcon className={'text-dark dark:text-light'} /></Link>
                    <Link href={link} title={title} target='_blank' className={`ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark py-2 px-6 text-lg font-semibold`}>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, image, link, github }) => {
    return (
        <article className='w-full flex flex-col justify-center items-center rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl relative'>
            <div className="absolute top-2 -right-3 -z-10 w-[100%] h-[101%] rounded-3xl bg-dark dark:bg-light" />
            <Link href={link} title={title} target='_blank' className={`w-full cursor-pointer overflow-hidden rounded-3xl rounded-bl-none rounded-br-none`}>
                <FramerImage src={image} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className={`w-full flex flex-col items-start justify-between px-7 py-6`}>
                <span className={`text-primary dark:text-primaryDark font-medium text-xl`}>{type}</span>
                <Link href={link} title={title} target='_blank' className={`hover:underline underline-offset-2`}>
                    <h2 className={`my-2 w-full text-left text-3xl font-bold overflow-ellipsis line-clamp-1 text-dark dark:text-light`}>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} title={title} target='_blank' className={`text-dark dark:text-light text-lg font-semibold underline`}>Visit</Link>
                    <Link href={github} title={title} target='_blank' className={`w-8`}><GithubIcon className={'text-dark dark:text-light'} /></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Projects | Owais Afsar</title>
                <meta name="description" content="Projects | Owais Afsar" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className='pt-16'>
                    <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16' />

                    <div className="grid grid-cols-12 gap-24">

                        <div className="col-span-12">
                            <FeaturedProject
                                type='Featured Project'
                                title='Crypto Screener Application'
                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'
                                image={proj1}
                                link='/'
                                github='/'
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type='Project'
                                title='Crypto Screener Application'
                                image={proj1}
                                link='/'
                                github='/'
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type='Project'
                                title='Crypto Screener Application'
                                image={proj1}
                                link='/'
                                github='/'
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                type='Featured Project'
                                title='Crypto Screener Application'
                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'
                                image={proj1}
                                link='/'
                                github='/'
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type='Project'
                                title='Crypto Screener Application'
                                image={proj1}
                                link='/'
                                github='/'
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                type='Project'
                                title='Crypto Screener Application'
                                image={proj1}
                                link='/'
                                github='/'
                            />
                        </div>

                    </div>

                </Layout>
            </main>
        </>
    )
}

export default projects