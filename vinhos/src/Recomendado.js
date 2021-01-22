import React, { useState } from 'react';

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
