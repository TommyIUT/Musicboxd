import * as React from 'react';
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AlbumIcon from '@mui/icons-material/Album';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import gotham from '../font/GothamBold.ttf'
import logotxt from '../assets/logo_txt.png'

import '../styles/sidebar.css';



export default function Sidebar({user, setUser, isConnected, setIsConnected}) {

  const setAuth = boolean => {
    setIsConnected(boolean)
}

  function logout() {
    setAuth(false)
    localStorage.removeItem("token")
    setUser({})
    toast.success("Déconnexion réussie");
  }

    return (
      
      <div className='bar' >
        <ToastContainer />
        <Stack spacing={1} direction="column">

        <Link to="/"><img src={logotxt} alt="Musicboxd" className="logo-sidebar" /></Link>

        <Link to="/">
        <Button href="/" variant="contained" startIcon={<HomeIcon />} sx={{
          '&:hover': {
            color: 'white',
            backgroundColor: '#1a1a1a',
          }, width: '100%', zIndex: '3', color: '#1ED75A', backgroundColor: 'black', fontFamily: gotham}}>
          Accueil
        </Button></Link>

        <Link to="/search">
        <Button href="/search" variant="contained" startIcon={<SearchIcon />} sx={{ '&:hover': {
            color: 'white',
            backgroundColor: '#1a1a1a',
          }, width: '100%', zIndex: '3', color: '#1ED75A', backgroundColor: 'black', fontFamily: gotham}}>
          Chercher
        </Button></Link>

        <Link to="/">
        <Button href="/" variant="contained" startIcon={<AlbumIcon />} sx={{ '&:hover': {
            color: 'white',
            backgroundColor: '#1a1a1a',
          }, width: '100%',color: '#1ED75A', backgroundColor: 'black', fontFamily: gotham}} className='test'>
          Bibliothèque
        </Button></Link>

        <Link to="/">
        <Button href="/" variant="contained" startIcon={<WatchLaterIcon />} sx={{ '&:hover': {
            color: 'white',
            backgroundColor: '#1a1a1a',
          }, width: '100%', color: '#1ED75A', backgroundColor: 'black', fontFamily: gotham}}>
          ListenList
        </Button></Link>

        </Stack>

        <div className='enbasla'>
        {isConnected ? (<Button  variant="contained" startIcon={<AccountCircleSharpIcon />} onClick={logout} sx={{ '&:hover': {
          color: 'white',
          backgroundColor: '#1a1a1a',
        }, width: '100%',color: 'black', backgroundColor: '#1ED75A', fontFamily: gotham}}>
          Se déconnecter
        </Button>) :(
        <Link to="/login">
        <Button href="/login" variant="contained" startIcon={<AccountCircleSharpIcon />} sx={{ '&:hover': {
            color: 'white',
            backgroundColor: '#1a1a1a',
          }, width: '100%',color: 'black', backgroundColor: '#1ED75A', fontFamily: gotham}}>
          Se connecter
        </Button></Link>)
        }
        </div>
       
        

      </div>
      
    );
}