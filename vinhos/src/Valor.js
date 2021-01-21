import React from 'react';
import { useState } from 'react/cjs/react.development';

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
    <div>
      <h1>Lista Ordenada de Clientes pelo Maior Valor de Compras </h1>
      <ul>
        {valorMaior.map(({ id, nome, cpf, valorTotal }) => (
          <li key={id}>
            <p>Id: {id}</p>
            <p>Nome: {nome}</p>
            <p>CPF: {cpf}</p>
            <h3>Valor Total: {valorTotal}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Valor;
