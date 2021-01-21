import React from 'react';

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
    <div>
      <h1>Clientes Master - Fiéis</h1>
      <ul>
        {clienteMaster &&
          clienteMaster.map(({ id, nome, cpf, totalCompras }) => (
            <li key={id}>
              <p>Nome: {nome}</p>
              <p>CPF: {cpf}</p>
              <p>Total de Compras: {totalCompras}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cliente;
