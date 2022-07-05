import React from 'react'
import domaImg from '../assets/doma.jpg';
import toqrdnImg from '../assets/toqrdn.jpg';
import PfdmImg from '../assets/uppofdm.jpg';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Livros = () => {
  return (
    <div>
      <Navbar />
      <div className='livros-container'>
        <h1 className='titulo-l'>Livros da Autora</h1>
        <div className='livro'>
          <img src={domaImg} alt="Capa do Livro" className='capa-livro'/>
          <div className='descricao-livro'>
            <h2>Deixe o Mundo Assistir</h2>
            <p>Nascidos em famílias opostas e criados com um amor em comum, Aidan Biersack e Aurora Withlock aprenderam, desde pequenos, a enganar o espetáculo e sempre tiveram o mundo como palco, até que a vida os obrigou a assumir outros personagens dentro da própria trama. VER MAIS</p>
            <p><b>Gatilhos:</b> luto, homofobia e panfobia em menção, abandono e descaso parental de forma parcial, cobrança excessiva e ansiedade como consequência disso.</p>
            <p><b>Classificaçao indicativa:</b> +16 palavreado de baixo calão e cenas de sexo explícitas</p>
            <button className='btn'>Compre na Amazon</button>
          </div>
        </div>

        <div className='livro'>
          <img src={toqrdnImg} alt="Capa do Livro" className='capa-livro' />
          <div className='descricao-livro'>
            <h2>Tudo O Que Restou De Nós</h2>
            <p>Nascida na pequena Cherry Hill, Cherilyn Delacroix é uma celebridade local graças a sua família: a mãe que foi morta e o pai assassino, portanto, sua vida não poderia ter sido mais traumática. Seis anos após a prisão de seu pai, ela seguiu em frente, mas agora está cansada da monotonia. Darrien Atlas é conhecido LER MAIS</p>
            <p><b>Gatilhos:</b> gatilhos aqui gatilho gatilho gatilho </p>
            <p><b>Classificaçao indicativa:</b> +16 por motivos de motivo motivo motivo</p>
            <button className='btn'>Compre na Amazon</button>
          </div>
        </div>

         <div className='livro'>
          <img src={PfdmImg} alt="Capa do Livro" className='capa-livro' />
          <div className='descricao-livro'>
            <h2>Uma Playlist Para o Fim do Mundo</h2>
            <p>Nascidos em famílias opostas e criados com um amor em comum, Aidan Biersack e Aurora Withlock aprenderam, desde pequenos, a enganar o espetáculo e sempre tiveram o mundo como palco, até que a vida os obrigou a assumir outros personagens dentro da própria trama. VER MAIS</p>
            <p><b>Gatilhos:</b> luto, homofobia e panfobia em menção, abandono e descaso parental de forma parcial, cobrança excessiva e ansiedade como consequência disso.</p>
            <p><b>Classificaçao indicativa:</b> +16 palavreado de baixo calão e cenas de sexo explícitas</p>
            <button className='btn'>Compre na Amazon</button>
          </div>
        </div>
      </div>  
      <Footer />
    </div>
  )
}

export default Livros