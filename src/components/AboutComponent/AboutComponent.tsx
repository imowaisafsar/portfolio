import React, { FC } from 'react';
import styles from './AboutComponent.module.css';

interface AboutComponentProps {}

const AboutComponent: FC<AboutComponentProps> = () => (
  <div className={styles.AboutComponent}>
    AboutComponent Component
  </div>
);

export default AboutComponent;
