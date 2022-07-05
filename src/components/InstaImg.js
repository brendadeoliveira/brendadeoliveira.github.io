import React from 'react';
import './InstaImgStyles.css';
import insta00 from '../assets/insta00.jpg';
import insta01 from '../assets/insta01.jpg';
import insta02 from '../assets/insta02.jpg';
import insta03 from '../assets/insta03.jpg';
import insta04 from '../assets/insta04.jpg';
import insta05 from '../assets/insta05.jpg';

const InstaImg = () => {
  return (
    <div>
      <div className='insta-grid'>
        <img src={insta01} alt="link to Instagram post" />
        <img src={insta00} alt="link to Instagram post" />
        <img src={insta02} alt="link to Instagram post" />
        <img src={insta04} alt="link to Instagram post" />
        <img src={insta03} alt="link to Instagram post" />
        <img src={insta05} alt="link to Instagram post" />
      </div>
      
    </div>
  )
}

export default InstaImg