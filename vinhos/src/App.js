import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Valor from './Valor';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="valor" element={<Valor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
