import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import autora from '../assets/autora.jpg';

const Sobre = () => {
  return (
    <div>
        <Navbar />
        <div className='sobre-container'>
          <h1 className='titulo-s'> Sobre A Autora</h1>
          <img src={autora} alt="Foto de Leticia Chokr" className='autora-s'/>
          <h2>Leticia Chokr</h2>
          <p>Natural do Paraná, Letícia começou escrevendo histórias no Facebook e nunca mais parou. Hoje estudante de Letras, já publicou três livros na Amazon e está trabalhando em outros. </p>
          <p>Mais informacoes, Letícia começou escrevendo histórias no Facebook e nunca mais parou. Hoje estudante de Letras, já publicou três livros na Amazon e está trabalhando em outros. </p>
          <p>Natural do Paraná, Letícia começou escrevendo histórias no Facebook e nunca mais parou. Hoje estudante de Letras, já publicou três livros na Amazon e está trabalhando em outros. </p>
          <button className='btn'>Conheça os Livros</button>
        </div>
        <Footer />
    </div>
  )
}

export default Sobre