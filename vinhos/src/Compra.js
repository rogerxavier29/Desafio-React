import React, { useState } from 'react';

const Compra = () => {
  const [clienteTop, setClienteTop] = useState({});
  const URL_TO_FETCH = 'https://vendavinhos-backend.herokuapp.com/bestClient';

  React.useEffect(() => {
    fetch(URL_TO_FETCH, {
      method: 'get', // opcional
    })
      .then(function (response) {
        response.json().then(function (data) {
          setClienteTop(data);
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <li>
        <p>Nome: {clienteTop && clienteTop.nome}</p>
        <p>Valor: {clienteTop && clienteTop.valorTotal}</p>
        <p>Data: {clienteTop && clienteTop.data}</p>
        <p>Codigo: {clienteTop && clienteTop.codigo}</p>
      </li>
      <ul>
        {clienteTop.itens
          ? clienteTop.itens.map((item, index) => (
              <li key={item.codigo + index}>
                <p>Produto: {item.produto} </p>
                <p>Variedade: {item.variedade} </p>
                <p>País: {item.pais} </p>
                <p>Variedade: {item.variedade} </p>
                <p>Categoria: {item.categoria} </p>
                <p>Safra: {item.safra} </p>
                <p>Preço: {item.preco} </p>
              </li>
            ))
          : ''}
      </ul>
    </div>
  );
};

export default Compra;
