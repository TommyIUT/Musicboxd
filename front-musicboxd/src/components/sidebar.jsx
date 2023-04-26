import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AlbumIcon from '@mui/icons-material/Album';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Stack from '@mui/material/Stack';
import '../styles/sidebar.css';
import gotham from '../font/GothamBold.ttf'
import logotxt from '../assets/logo_txt.png'

export default function sidebar() {
    return (
      
      <div className='bar' >

        <Stack spacing={1} direction="column">

        <a href="/"><img src={logotxt} alt="Musicboxd" className="logo-sidebar" /></a>

        <Button href="/" variant="contained" startIcon={<HomeIcon />} >
          Accueil
        </Button>

        <Button href="/" variant="contained" startIcon={<SearchIcon />} sx={{ zIndex: '0', color: '#1ED75A', backgroundColor: 'black', fontFamily: gotham}}>
          Chercher
        </Button>


        <Button href="/" variant="contained" startIcon={<AlbumIcon />} sx={{ color: '#1ED75A', backgroundColor: 'black', fontFamily: gotham}} className='test'>
          Bibliothèque
        </Button>

        <Button href="/" variant="contained" startIcon={<WatchLaterIcon />} sx={{ color: '#1ED75A', backgroundColor: 'black', fontFamily: gotham}}>
          ListenList
        </Button>

        </Stack>

        <div className='enbasla'>
        <Button href="/connect" variant="contained" startIcon={<AccountCircleSharpIcon />} style={{ color: 'black', backgroundColor: '#1ED75A', fontFamily: gotham}}>
            Se connecter
        </Button>
        </div>
       
        

      </div>
      
    );
}