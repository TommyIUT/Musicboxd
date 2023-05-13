import * as React from 'react';
import '../styles/connexionView.css';
import logotxtgris from '../assets/logo_txt_gris.png'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import gotham from '../font/GothamBold.ttf'
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



export default function connexionView({user, setUser, isConnected, setIsConnected}) {

    const handleButtonClick = async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

    }



    return (
        <div className='connexionView'>
            <Stack spacing={1} direction="column">
            <Link to="/"><a href='/' ><img src={logotxtgris} alt="Musicboxd" className='logo-login'/></a></Link>
            <form className='login-form'>
                <div class="input-login">
                    <label for="email">E-mail :</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div class="input-login">
                    <label for="password">Mot de passe :</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <button type="submit" className='login-button' onClick={handleButtonClick}>SE CONNECTER</button>
            </form>
                <ToastContainer />

                <div class="divider"></div>
                <p className='noaccount'> Vous n'avez pas de compte ?</p>
                <Link to="/register">
                <Button href="/register" variant="contained" startIcon={<AccountCircleSharpIcon />} sx={{ '&:hover': {
                    color: 'white',
                    backgroundColor: '#1a1a1a',
                }, color: 'black', width:'100%', backgroundColor: '#1ED75A', fontFamily: gotham}}>
                S'INSCRIRE
                </Button></Link>

            </Stack>

            
        </div>
    
    );
  }
  