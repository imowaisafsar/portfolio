"use client";

import styles from './about.module.css'
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
    weight: '300',
    subsets: ['latin']
});

export default function About() {
    return (
        <div className={ubuntu.className}>
            <h1>About</h1>
        </div>
    )
}