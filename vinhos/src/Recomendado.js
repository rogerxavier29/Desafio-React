import React, { useState } from 'react';

const Recomendado = () => {
  const [pegarCliente, setPegarCliente] = useState([]);
  const URL_TO_FETCH = 'https://vendavinhos-backend.herokuapp.com/clients';

  React.useEffect(() => {
    fetch(URL_TO_FETCH, {
      method: 'get', // opcional
    })
      .then(function (response) {
        response.json().then(function (data) {
          setPegarCliente(data);
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {pegarCliente.map((id, cpf, nome) => (
        <select value={cpf} name="" id="" key={cpf}>
          <option value={pegarCliente.id}>{pegarCliente.id}</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      ))}
    </div>
  );
};

export default Recomendado;
