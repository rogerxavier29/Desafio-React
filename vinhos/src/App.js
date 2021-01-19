import React from 'react';

const App = () => {
  const clientesValor = [
    {
      id: 8,
      nome: 'Jonathan',
      cpf: '000.000.000-08',
      valorTotal: 3190.7000000000003,
    },
    {
      id: 5,
      nome: 'Raquel',
      cpf: '000.000.000-05',
      valorTotal: 2299.6,
    },
    {
      id: 4,
      nome: 'Gustavo',
      cpf: '000.000.000-04',
      valorTotal: 2115.8,
    },
    {
      id: 3,
      nome: 'Joel',
      cpf: '000.000.000-03',
      valorTotal: 2090.3,
    },
    {
      id: 6,
      nome: 'Pamela',
      cpf: '000.000.000-06',
      valorTotal: 1910.6999999999998,
    },
    {
      id: 7,
      nome: 'Bruno',
      cpf: '000.000.000-07',
      valorTotal: 1833,
    },
    {
      id: 2,
      nome: 'Marcos',
      cpf: '000.000.000-02',
      valorTotal: 1308,
    },
    {
      id: 10,
      nome: 'Rafael',
      cpf: '000.000.000-10',
      valorTotal: 977.8,
    },
    {
      id: 9,
      nome: 'Matheus',
      cpf: '000.000.000-09',
      valorTotal: 879.6,
    },
    {
      id: 1,
      nome: 'Vinicius',
      cpf: '000.000.000-01',
      valorTotal: 729,
    },
  ];

  return (
    <ul>
      <h1>Lista Ordenada de Clientes pelo Maior Valor de Compras </h1>

      {clientesValor.map(({ id, nome, cpf, valorTotal }) => (
        <li key={id}>
          <p>{id}</p>
          <p>{nome}</p>
          <p>{cpf}</p>
          <h3>{valorTotal}</h3>
        </li>
      ))}
    </ul>
  );
};

export default App;
