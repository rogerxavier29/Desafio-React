import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cliente from './Cliente';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Compra from './Compra';
import Valor from './Valor';
import Recomendado from './Recomendado';
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
