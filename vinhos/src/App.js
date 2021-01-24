import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cliente from './ClientesFieis/Cliente';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Compra from './ClienteMaster/Compra';
import Valor from './OrdemConsumo/Valor';
import Recomendado from './Recomendado/Recomendado';
import Home from './Home';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="valor" element={<Valor />} />
            <Route path="compra" element={<Compra />} />
            <Route path="cliente" element={<Cliente />} />
            <Route path="recomendado" element={<Recomendado />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
