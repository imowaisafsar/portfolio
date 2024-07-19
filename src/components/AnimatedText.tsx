import React from 'react';
import { motion } from 'framer-motion';
import { IAnimatedTextModel } from '../../core/interfaces/IAnimatedTextModel';

const headingMotionOption = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const letterMotionOption = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
}

interface AnimatedTextProps extends IAnimatedTextModel { }

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
    return (
        <div className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden`}>

            <motion.h1 className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
                variants={headingMotionOption} initial='initial' animate='animate'>
                {
                    text.split(" ").map((word, index) =>
                        <motion.span key={word + '-' + index} className='inline-block' variants={letterMotionOption}>
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>

        </div>
    )
}

export default AnimatedText