import * as React from 'react';
import '../styles/connexionView.css';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import logotxt from '../assets/logo_txt_gris.png'

export default function connexionView() {
    return (
        <div className='connexionView'>
            <img src={logotxt} alt="Musicboxd" className="logo" />
            test
            <Button variant="contained" startIcon={<HomeIcon />} sx={{ backgroundColor: '#f44336', color: '#fff' }} className='ajt'>
            Ajouter
            </Button>
        </div>
    
    );
  }
  