import React from 'react';
import styles from './Cliente.module.css';

const Cliente = () => {
  const [clienteMaster, setClienteMaster] = React.useState([]);
  const URL_TO_FETCH = 'https://vendavinhos-backend.herokuapp.com/bestClients';

  React.useEffect(() => {
    fetch(URL_TO_FETCH, {
      method: 'get', // opcional
    })
      .then(function (response) {
        response.json().then(function (data) {
          setClienteMaster(data);
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  return (
    <div className={styles.estrutura}>
      <h1>Clientes Master - Fiéis</h1>
      <ul>
        {clienteMaster &&
          clienteMaster.map(({ id, nome, cpf, totalCompras }) => (
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
