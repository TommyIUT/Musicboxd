import {useState} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import gotham from '../font/GothamBold.ttf'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';


import '../styles/InscriptionView.css';




export default function InscriptionView({ user, setUser, isConnected, setIsConnected}) {
    const bcrypt = require('bcryptjs');
    const [isRegistered, setIsRegistered] = useState(true)

    const setAuth = boolean => {
      setIsConnected(boolean)
  }

    const handleButtonClick = async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const identifiant = document.getElementById("id").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;
        const hashedPassword = await bcrypt.hash(password, 10);
      
        if (password === password2) {
        
          // test id unique
        const url1 = `http://localhost:5000/userbox/id/${identifiant}`;
        const response1 = await fetch(url1, {
            method: "GET"
        });
        const data1 = await response1.json();
        if (data1.length > 0){
          toast.error('Cet identifiant existe déjà');
        }


        // test mail unique
        const url2 = `http://localhost:5000/userbox/mail/${email}`;
        const response2 = await fetch(url2, {
            method: "GET"
        });
        const data2 = await response2.json();

        if (data2.length>0){
         toast.error('Ce mail est déjà utilisé');
        }
          try {
            
              if (data1.length===0 && data2.length===0){
                const body = {email, hashedPassword, identifiant}
                const response = await fetch("http://localhost:5000/auth/register", {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify(body)
                })
                const parseRes = await response.json()
                console.log(parseRes)
                if (parseRes.invalid) {
                  toast.error('Erreur lors de la création du compte');
                }
                else {
                    localStorage.setItem("token",parseRes.token)
                    setAuth(true)
                    toast.success("Compte créé avec succès !");
                }


              }
             
          } catch (err) {
            toast.error("Erreur lors de la création du compte !");
            console.log(err)
          }
        } else {
          toast.error("Les mots de passe ne correspondent pas");
        }
      };
      
    
    return (
        <div className='InscriptionView'>
            <Stack spacing={1} direction="column">
            <p className='rejoindre'> Rejoindre <Link to ='/'><a href='/' className='lien'>Musicboxd</a></Link></p>

            <form >
                <div className="input-login">
                    <label for="email">E-mail :</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div className="input-login">
                    <label for="identifiant">Identifiant :</label>
                    <input type="id" id="id" name="id" required></input>
                </div>
                <div className="input-login">
                    <label for="password">Mot de passe :</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <div className="input-login">
                    <label for="password">Confirmez le mot de passe :</label>
                    <input type="password" id="password2" name="password" required></input>
                </div>
                <button type="submit" className='login-button' onClick={handleButtonClick}>S'INSCRIRE</button>
            </form>
            <ToastContainer />

            <div className="divider"></div>

            <p className='noaccount'> Vous avez déjà un compte ?</p>
            <Link to="/login">
            <Button href="/login" variant="contained" startIcon={<AccountCircleSharpIcon />} sx={{ '&:hover': {
                    color: 'white',
                    backgroundColor: '#1a1a1a',
                }, width: '100%', color: 'black', backgroundColor: '#1ED75A', fontFamily: gotham}}>se connecter </Button></Link>
            </Stack>
        </div>
    
    );
            }
  