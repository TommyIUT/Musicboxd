import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import '../styles/sidebar.css';

export default function sidebar() {
    return (
      <div className='bar' >
        <Stack spacing={1} direction="column">
          <Button href="/" variant="text" startIcon={<HomeIcon />} style={{ color: 'white'}}>
            Accueil
          </Button>
          <Button href="/user" variant="text" startIcon={<SendIcon />} className='button'>
            Send
          </Button>
          <Button >Page 3</Button>
        </Stack>
      </div>
    );
  }