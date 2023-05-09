import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import gotham from '../font/GothamBold.ttf'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import '../styles/InscriptionView.css';


export default function InscriptionView() {
    const bcrypt = require('bcryptjs');

    const handleButtonClick = async (e) => {
        e.preventDefault();
        console.log("oui");
        const email = document.getElementById("email").value;
        const identifiant = document.getElementById("id").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById('password2').value;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        if (password === password2){
            try {
                const response = await fetch('/api/user', {
                  method: 'POST',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({
                    email: email,
                    identifiant: identifiant,
                    password: hashedPassword
                  })
                });
                if (response.ok) {
                  // User created successfully, handle success scenario
                } else {
                  // There was an error, handle error scenario
                }
              } catch (err) {
                console.log(err);
                // Handle error scenario
              }
        } else{
            toast.error('Les deux mots de passe ne correspondent pas');
        }
        
    };
    
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
                    <input type="password" id="password2" name="password" required></input>
                </div>
                <button type="submit" className='login-button' onClick={handleButtonClick}>S'INSCRIRE</button>
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
  