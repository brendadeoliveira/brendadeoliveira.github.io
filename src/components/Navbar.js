import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './NavbarStyles.css';

function Navbar() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className='header'>
        <Link to='/'><h1>LC</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
            <li>
                <Link to='/'>Inicio</Link>
            </li>
            <li>
                <Link to='/sobre'>Sobre A Autora</Link>
            </li>
            <li>
                <Link to='/livros'>Livros</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>

            {click ? (<FaTimes size={25} style={{color: '#fff'}}/>) : (<FaBars size={25} style={{color: '#fff'}} />)}
            
        </div>
    </div>
  )
}

export default Navbar