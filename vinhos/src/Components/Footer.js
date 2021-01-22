import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.pfooter}>
        Vinhos Velazques. Alguns direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
