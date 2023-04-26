import * as React from 'react';
import '../styles/connexionView.css';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import logotxtgris from '../assets/logo_txt_gris.png'

export default function connexionView() {
    return (
        <div className='connexionView'>
            <a href='/' className='logo-login'><img src={logotxtgris} alt="Musicboxd" className="logo-login" /></a>
            
        </div>
    
    );
  }
  