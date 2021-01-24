import React, { useState } from 'react';
import Head from '../Components/Head';

const Recomendado = () => {
  const [select, setSelect] = useState([]);
  const URL_TO_FETCH = 'https://vendavinhos-backend.herokuapp.com/clients';

  React.useEffect(() => {
    fetch(URL_TO_FETCH, {
      method: 'get', // opcional
    })
      .then(function (response) {
        response.json().then(function (data) {
          setSelect(data);
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Head
        title="Vinho Recomendado"
        description="Vinhos Recomendados com base no CPF"
      />
      <select
        value={select.cpf}
        onChange={(cpf) => setSelect(select.target.value)}
      >
        {select.map((cpf, nome) => (
          <option key={cpf} value={nome}>
            {select.nome}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Recomendado;
