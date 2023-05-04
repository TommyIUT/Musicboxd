import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import gotham from '../font/GothamBold.ttf'

import '../styles/InscriptionView.css';


export default function InscriptionView() {
    return (
        <div className='InscriptionView'>
            <Stack spacing={1} direction="column">
            <p className='rejoindre'> Rejoindre <a href='/' className='lien'>Musicboxd</a></p>

            <form >
                <div class="input-login">
                    <label for="email">E-mail :</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div class="input-login">
                    <label for="identifiant">Identifiant :</label>
                    <input type="id" id="id" name="id" required></input>
                </div>
                <div class="input-login">
                    <label for="password">Mot de passe :</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <div class="input-login">
                    <label for="password">Confirmez le mot de passe :</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <button type="submit" className='login-button'>S'INSCRIRE</button>
            </form>

            <div class="divider"></div>

            <p className='noaccount'> Vous avez déjà un compte ?</p>
            <Button href="/login" variant="contained" startIcon={<AccountCircleSharpIcon />} sx={{ '&:hover': {
                    color: 'white',
                    backgroundColor: '#1a1a1a',
                }, color: 'black', backgroundColor: '#1ED75A', fontFamily: gotham}}>se connecter </Button>
            </Stack>
        </div>
    
    );
  }
  