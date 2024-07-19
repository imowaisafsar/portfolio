import Head from 'next/head'
import React, { useRef } from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import articleImg1 from '../../public/images/articles/pagination component in reactjs.jpg';
import articleImg2 from '../../public/images/articles/What is Redux with easy explanation.png';
import articleImg3 from '../../public/images/articles/What is higher order component in React.jpg';
import { motion, useMotionValue } from 'framer-motion'

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    const handleMouseMove = event => {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    const handleMouseLeave = event => {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (<Link href={link} title={title} target='_blank' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <h2 className={`capitalize text-xl font-semibold hover:underline`}>{title}</h2>
        <FramerImage ref={imgRef} src={img} alt={title} className={`z-10 w-96 h-auto hidden absolute rounded-lg`}
            style={{ x: x, y: y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.2 } }} />
    </Link>);
}

const Article = ({ img, title, date, link }) => {
    return (<motion.li className={`relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light border border-solid border-dark dark:border-light border-r-4 border-b-4 first:mt-0`}
        initial={{ y: 200 }}
        whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        viewport={{ once: true }}>
        <MovingImage title={title} img={img} link={link} />
        <span className={`text-primary dark:text-primaryDark font-semibold pl-4`}>{date}</span>
    </motion.li>);
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (<li className={`relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl`}>
        <div className="absolute top-2 -right-3 -z-10 w-[100%] h-[101%] rounded-3xl bg-dark dark:bg-light" />
        <Link href={link} target='_blank' className={`w-full inline-block cursor-pointer overflow-hidden rounded-lg`}>
            <FramerImage src={img} alt={title} className={`w-full h-auto`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
        </Link>
        <Link href={link} target='_blank'>
            <h2 className={`capitalize text-2xl font-bold my-2 mt-4 hover:underline text-dark dark:text-light`}>{title}</h2>
        </Link>
        <p className={`text-sm mb-2 text-dark dark:text-light`}>{summary}</p>
        <span className={`text-primary dark:text-primaryDark font-semibold`}>{time}</span>
    </li>);
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Article | Owais Afsar</title>
                <meta name="description" content="Article | Owais Afsar" />
            </Head>
            <main className={`flex flex-col items-center w-full justify-center`}>
                <Layout className={`pt-16`}>
                    <AnimatedText text='Words Can Change The World!' className='mb-16' />
                    <ul className={`grid grid-cols-2 gap-16`}>
                        <FeaturedArticle
                            title={`Build A Custom Pagination Component In Reactjs From Scratch`}
                            summary={`Learn how to build a custom pagination component in ReactJS from scratch. 
                            Follow this step-by-step guide to integrate Pagination component in your ReactJS project.`}
                            time={`9 min read`}
                            link={`/`}
                            img={articleImg1}
                        />
                        <FeaturedArticle
                            title={`Build A Custom Pagination Component In Reactjs From Scratch`}
                            summary={`Learn how to build a custom pagination component in ReactJS from scratch. 
                            Follow this step-by-step guide to integrate Pagination component in your ReactJS project.`}
                            time={`9 min read`}
                            link={`/`}
                            img={articleImg2}
                        />
                    </ul>

                    <h2 className={`font-bold text-4xl w-full text-center my-16 mt-32 text-dark dark:text-light`}>All Articles</h2>
                    <Article
                        title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
                        date={`December 30, 2023`}
                        link={`/`}
                        img={articleImg3}
                    />
                    <Article
                        title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
                        date={`December 30, 2023`}
                        link={`/`}
                        img={articleImg3}
                    />
                    <Article
                        title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
                        date={`December 30, 2023`}
                        link={`/`}
                        img={articleImg3}
                    />
                    <Article
                        title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
                        date={`December 30, 2023`}
                        link={`/`}
                        img={articleImg3}
                    />
                    <Article
                        title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
                        date={`December 30, 2023`}
                        link={`/`}
                        img={articleImg3}
                    />
                </Layout>
            </main>
        </>
    );
}

export default articles