import React, { Component } from 'react';
import styles from './Home.module.css';
import Imagem from './Imagem/vinho3.jpg';

const Home = () => {
  return (
    <div className={styles.estrutura1}>
      <img src={Imagem} />
    </div>
  );
};

export default Home;
