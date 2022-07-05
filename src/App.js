import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Livros from './routes/Livros';
import Sobre from './routes/Sobre';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='livros' element={<Livros />} />
      </Routes>
    </>
  );
}

export default App;
