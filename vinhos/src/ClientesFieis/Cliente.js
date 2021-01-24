import React from 'react';
import styles from './Cliente.module.css';
import Head from '../Components/Head';

const Cliente = () => {
  const [clientesFieis, setClientesFieis] = React.useState([]);
  const URL_TO_FETCH = 'https://vendavinhos-backend.herokuapp.com/bestClients';

  React.useEffect(() => {
    fetch(URL_TO_FETCH, {
      method: 'get', // opcional
    })
      .then(function (response) {
        response.json().then(function (data) {
          setClientesFieis(data);
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  return (
    <div className={styles.estrutura}>
      <Head title="Clientes Fiéis" description="Home" />
      <h1>Clientes Master - Fiéis</h1>
      <ul>
        {clientesFieis &&
          clientesFieis.map(({ id, nome, cpf, totalCompras }) => (
            <li key={id}>
              <div className={styles.estrutura2}>
                <p>Nome: {nome}</p>
                <p>CPF: {cpf}</p>
                <p>Total de Compras:{totalCompras}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cliente;
