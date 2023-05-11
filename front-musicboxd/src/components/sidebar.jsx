import * as React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AlbumIcon from '@mui/icons-material/Album';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Stack from '@mui/material/Stack';

import gotham from '../font/GothamBold.ttf'
import logotxt from '../assets/logo_txt.png'

import '../styles/sidebar.css';

export default function sidebar() {
    return (
      
      <div className='bar' >

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
        <Link to="/login">
        <Button href="/login" variant="contained" startIcon={<AccountCircleSharpIcon />} sx={{ '&:hover': {
            color: 'white',
            backgroundColor: '#1a1a1a',
          }, width: '100%',color: 'black', backgroundColor: '#1ED75A', fontFamily: gotham}}>
          Se connecter
        </Button></Link>
        </div>
       
        

      </div>
      
    );
}