import * as React from 'react';
import Stack from '@mui/material/Stack';
import logotxtgris from '../assets/logo_txt_gris.png'


import '../styles/InscriptionView.css';


export default function InscriptionView() {
    return (
        <div className='InscriptionView'>
            <Stack spacing={1} direction="column">
            <p className='rejoindre'> Rejoindre <a href='/' ><img src={logotxtgris} alt="Musicboxd" className='logo-login'/></a></p>
            </Stack>
        </div>
    
    );
  }
  