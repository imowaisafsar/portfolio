import React, { FC } from 'react';
import styles from './SocialMediaIconsComponent.module.css';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

interface SocialMediaIconsComponentProps { };

const socialAccounts = [
  {
    site: 'LinkedIn',
    title: 'Muhammad Owais',
    link: 'https://www.linkedin.com/in/owais-dev/',
    icon: <FaLinkedinIn />
  },
  {
    site: 'Facebook',
    title: 'Muhammad Owais',
    link: 'https://www.facebook.com/be.owais/',
    icon: <FaFacebookF />
  },
  {
    site: 'Twitter',
    title: 'Muhammad Owais',
    link: 'https://twitter.com/owais_afsar',
    icon: <FaTwitter />
  },
  {
    site: 'Instagram',
    title: 'Muhammad Owais',
    link: 'https://www.instagram.com/owais_dev/',
    icon: <FaInstagram />
  }
];

const SocialMediaIconsComponent: FC<SocialMediaIconsComponentProps> = () => (
  <div className={styles.SocialMediaIconsComponent}>
    SocialMediaIconsComponent Component
  </div>
);

export default SocialMediaIconsComponent;
