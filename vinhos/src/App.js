import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cliente from './Cliente';
import Compra from './Compra';
import Valor from './Valor';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="valor" element={<Valor />} />
        <Route path="compra" element={<Compra />} />
        <Route path="cliente" element={<Cliente />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
