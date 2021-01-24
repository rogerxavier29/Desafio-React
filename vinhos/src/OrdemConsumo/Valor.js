import React from 'react';
import styles from './Valor.module.css';
import { useState } from 'react/cjs/react.development';
import Head from '../Components/Head';

const Valor = () => {
  const [valorMaior, setValorMaior] = useState([]);
  const URL_TO_FETCH =
    'https://vendavinhos-backend.herokuapp.com/clientsOrderedByPurchase';

  React.useEffect(() => {
    fetch(URL_TO_FETCH, {
      method: 'get', // opcional
    })
      .then(function (response) {
        response.json().then(function (data) {
          setValorMaior(data);
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  return (
    <div className={styles.estrutura}>
      <Head title="Ordem de Consumo" description="Home" />
      <h1 className={styles.titulo}>
        Lista Ordenada de Clientes pelo Maior Valor de Compras{' '}
      </h1>
      <ul className={styles.ul}>
        {valorMaior.map(({ id, nome, cpf, valorTotal }) => (
          <div className={styles.estrutura2}>
            <li className={styles.li} key={id}>
              <p>Id: {id}</p>
              <p>Nome: {nome}</p>
              <p>CPF: {cpf}</p>
              <p>Valor Total: {valorTotal}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Valor;
