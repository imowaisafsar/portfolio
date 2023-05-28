import React, { FC } from 'react';
import styles from './AboutComponent.module.css';

interface AboutComponentProps { }

const AboutComponent: FC<AboutComponentProps> = () => (
  <div className={`w-screen h-[calc(100vh_-_54px)] bg-gray-200 dark:bg-black/50 ${styles.AboutComponent}`}>
    AboutComponent Component
  </div>
);

export default AboutComponent;
