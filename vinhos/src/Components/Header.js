import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="valor">Ordem de Consumo</Link>
        <Link to="compra">Clientes fieis.</Link>
        <Link to="cliente">Cliente Master.</Link>
      </nav>
    </header>
  );
};

export default Header;
