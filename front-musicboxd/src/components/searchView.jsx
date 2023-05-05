import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Stack from '@mui/material/Stack';


import '../styles/searchView.css';

export default function SearchView() {
  return (
    <div className="searchView">
      <Sidebar></Sidebar>
      <Stack spacing={0} direction="column">
        <div className='recherche'></div>

        <div className='resultat'></div>
        
      </Stack>
    </div>
  );
}
