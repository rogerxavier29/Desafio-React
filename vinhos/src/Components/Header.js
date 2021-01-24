import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h2 className={styles.tprincipal}>Velasquez</h2>
        <Link className={styles.ordem} to="valor">
          Ordem de Consumo
        </Link>
        <Link className={styles.fieis} to="compra">
          Cliente Master
        </Link>
        <Link className={styles.master} to="cliente">
          Cliente Fiéis
        </Link>
        <Link className={styles.recomendado} to="recomendado">
          Vinho Recomendado
        </Link>
      </nav>
    </header>
  );
};

export default Header;
