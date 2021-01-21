import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.ordem} to="valor">
          Ordem de Consumo
        </Link>
        <Link className={styles.fieis} to="compra">
          Clientes fieis.
        </Link>
        <Link className={styles.master} to="cliente">
          Cliente Master.
        </Link>
      </nav>
    </header>
  );
};

export default Header;
