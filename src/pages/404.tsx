import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

const NotFound: React.FC = () => {
    return (
        <Layout className={`text-center justify-center items-center min-h-[calc(100vh_-_186px)]`}>
            <div className="not-found">
                <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Ooooops...</h1>
                <p className="my-10 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">That page cannot be found.</p>
                <Link href={'/'} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Go back to Home
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>
        </Layout>
    )
}

export default NotFound