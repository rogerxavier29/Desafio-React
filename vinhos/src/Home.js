import React, { Component } from 'react';
import Head from './Components/Head';
import styles from './Home.module.css';
import Imagem from './Imagem/vinho3.jpg';

const Home = () => {
  return (
    <div className={styles.estrutura1}>
      <img src={Imagem} />
      <Head title="Home" description="Home" />
    </div>
  );
};

export default Home;
