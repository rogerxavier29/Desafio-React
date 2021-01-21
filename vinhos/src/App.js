import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cliente from './Cliente';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Compra from './Compra';
import Valor from './Valor';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="valor" element={<Valor />} />
        <Route path="compra" element={<Compra />} />
        <Route path="cliente" element={<Cliente />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
