import React from 'react';
import Navbar from '../components/Navbar';
import autora from '../assets/autora.jpg';
import { FaInstagram, FaTwitter, FaAmazon, FaSpotify} from 'react-icons/fa';
import domaImg from '../assets/doma.jpg';
import toqrdnImg from '../assets/toqrdn.jpg';
import fimDMImg from '../assets/uppofdm.jpg';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='autora-container'>
         <img src={autora} alt="Foto de Leticia Chokr" className='autora'/>
         <div className='autora-info'>
            <h1 className='titulo'>Leticia Chokr</h1>
          <p className='apresentacao'>Natural do Paraná, Letícia começou escrevendo histórias no Facebook e nunca mais parou. Hoje estudante de Letras, já publicou três livros na Amazon e está trabalhando em outros. </p>
          <button className='btn'>Saiba Mais</button>
          <div className='socials'>
            <FaInstagram size={40} style={{color: '#000', padding: '5px' }} />
            <FaTwitter size={40} style={{color: '#000', padding: '5px' }}/>
            <FaSpotify size={40} style={{color: '#000', padding: '5px' }} />
            <FaAmazon size={40} style={{color: '#000', padding: '5px' }}/>
         </div>
         
        </div>
      </div>
      <div className='lancamentos'>
        <h2 >Meus Lançamentos</h2>
        <div className='livros'>
          <div>
            <img src={domaImg} alt="Capa do livro Deixe o Mundo Assistir" className='book-img'/>
            <aside>Já disponível</aside>
          </div>
          <div>
            <img src={toqrdnImg} alt="Capa do livro Tudo o Que Restou de Nos" className='book-img' />
            <aside>Já disponível</aside>
          </div>
          <div>
            <img src={fimDMImg} alt="Capa do livro Uma Playlist Para o Fim do Mundo" className='book-img' />
            <aside>Já disponível</aside>
          </div>
          <div>
            <img src={fimDMImg} alt="Capa do livro Vem Ai" className='book-img' />
            <aside>Em Breve</aside>
          </div>
        </div>
      </div>
      <Footer />
        
    </div>
  )
}

export default Home;