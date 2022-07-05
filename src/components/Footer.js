import React from 'react';
import './FooterStyles.css';
import InstaImg from './InstaImg';
import Socials from './Socials';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <h2 className='footer-t'>Se Inscreva</h2>
                <div className='contact-form'>
                <form action="https://formsubmit.co/brenda190601@hotmail.com" method="POST">
                  <input type="hidden" name="_next" value="https://brendadeoliveira.com/thankyou" />
                  <input type="text" name="nome" placeholder="Nome" required className='info' />
                  <input type="email" name="email" placeholder="Email" required className='info' />
                  <textarea placeholder="Escreva aqui sua mensagem" name="message" rows="10" required className='mensagem' ></textarea>
                  <div><button type="submit" className='btn-light'>Enviar</button></div>
              </form>
                </div>
                <Socials />
            </div>
            <div className='right'>
                <p>Me siga no Instagram para mais fofocas de escrita</p>
                <InstaImg />
            </div>
            <p className='direitos'>© Copyright 2022 | Leticia Chokr | Todos os Direiros Reservados</p>
        </div>
    </div>
  )
}

export default Footer