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

          <a href="/"><img src={logotxt} alt="Musicboxd" className="logo" /></a>

          <Button href="/" variant="contained" startIcon={<HomeIcon />} style={{ color: '#1ED75A', backgroundColor: 'black',fontFamily: gotham}}>
            Accueil
          </Button>

          <Button href="/" variant="contained" startIcon={<SearchIcon />} style={{ color: '#1ED75A', backgroundColor: 'black', fontFamily: gotham}}>
            Chercher
          </Button>


          <Button href="/" variant="contained" startIcon={<AlbumIcon />} style={{ color: '#1ED75A', backgroundColor: 'black', fontFamily: gotham}}>
            Bibliothèque
          </Button>

          <Button href="/" variant="contained" startIcon={<WatchLaterIcon />} style={{ color: '#1ED75A', backgroundColor: 'black', fontFamily: gotham}}>
            ListenList
          </Button>

        </Stack>

        <div className='enbasla'>
          <Button href="/" variant="contained" startIcon={<AccountCircleSharpIcon />} style={{ color: 'black', backgroundColor: '#1ED75A', fontFamily: gotham}}>
              Se connecter
          </Button>
        </div>
       
        

      </div>
      
    );
}