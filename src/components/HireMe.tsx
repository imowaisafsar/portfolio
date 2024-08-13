import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe: React.FC = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto sm:right-0'>
            <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
                <CircularText className={`fill-dark dark:fill-light animate-spin-slow`} />
                <Link href={'mailto:owais.afsar@outlook.com'} className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark dark:border-light w-24 h-24 rounded-full font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light md:w-12 md:h-12 md:text-[10px]'>Hire Me</Link>
            </div>
        </div>
    )
}

export default HireMe