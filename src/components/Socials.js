import React from 'react';
import { FaInstagram, FaTwitter, FaAmazon, FaSpotify} from 'react-icons/fa';

const Socials = () => {
  return (
    <div className='socials'>
    <FaInstagram size={30} style={{color: '#fff', marginRight: '1rem' }} />
    <FaTwitter size={30} style={{color: '#fff', marginRight: '1rem' }}/>
    <FaSpotify size={30} style={{color: '#fff', marginRight: '1rem' }} />
    <FaAmazon size={30} style={{color: '#fff', marginRight: '1rem' }}/>
</div>
  )
}

export default Socials