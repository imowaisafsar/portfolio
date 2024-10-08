import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark dark:border-light text-dark dark:text-light font-medium text-lg sm:text-base'>
            <Layout className={`py-8 flex items-center justify-between lg:flex-col lg:py-6 xl:py-6`}>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center lg:py-2">
                    Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                    by &nbsp; <Link href={'/about'} className='underline underline-offset-2'>Owais Afsar</Link>
                </div>
                <Link href={'/about'} target={'_self'} className='underline underline-offset-2'>Say Hello</Link>
            </Layout>
        </footer >
    )
}

export default Footer