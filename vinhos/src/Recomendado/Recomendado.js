import React, { useState } from 'react';
import Head from '../Components/Head';
import styles from './Recomendado.module.css';

const Recomendado = () => {
  const [pegarCliente, setPegarCliente] = useState([]);
  const [clienteCpf, setClienteCpf] = useState({});
  const URL_TO_FETCH = 'https://vendavinhos-backend.herokuapp.com/clients';

  const [pegarVinho, setPegarVinho] = useState({});

  React.useEffect(() => {
    fetch(URL_TO_FETCH, {
      method: 'get', // opcional
    })
      .then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          setPegarCliente(data);
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  const getRecomendacao = (cpf) => {
    fetch(
      `https://vendavinhos-backend.herokuapp.com/recommendWine/${cpf.replace(
        /[^\d]+/g,
        '',
      )}`,
      {
        method: 'get', // opcional
      },
    )
      .then(function (response) {
        response.json().then(function (data) {
          setPegarVinho(data);
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  return (
    <div className={styles.estrutura}>
      <Head
        title="Vinho Recomendado"
        description="Vinhos Recomendados com base no CPF"
      />
      <h1 className={styles.h1title}>Recomendação</h1>
      <form className={styles.form}>
        <select
          value={clienteCpf}
          onChange={({ target }) => {
            setClienteCpf(target.value);
            getRecomendacao(target.value);
          }}
        >
          {pegarCliente
            ? pegarCliente.map(({ cpf, nome }) => (
                <option id={cpf} value={cpf} key={cpf}>
                  {nome}
                </option>
              ))
            : ''}
        </select>
        <h3 className={styles.h3vinhos}>Vinho Recomendado :</h3>
        <ul className={styles.vinhos}>
          <li>Produto: {pegarVinho && pegarVinho.produto}</li>
          <li>Variedade: {pegarVinho && pegarVinho.variedade}</li>
          <li>País: {pegarVinho && pegarVinho.pais}</li>
          <li>Categoria: {pegarVinho && pegarVinho.categoria}</li>
          <li>Safra: {pegarVinho && pegarVinho.safra}</li>
          <li>Preço: {pegarVinho && pegarVinho.preco}</li>
          <li>Total: {pegarVinho && pegarVinho.total}</li>
        </ul>
      </form>
    </div>
  );
};

export default Recomendado;
