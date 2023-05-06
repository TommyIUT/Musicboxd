import React, {  useState, useRef } from 'react';
import Sidebar from './sidebar';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';

import '../styles/searchView.css';

// barre de recherche
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  color: '#FFFFFF',
  marginRight: theme.spacing(2),
  marginTop: 15 ,
  marginLeft:  30,
  width: '22%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '125%%',
  },
}));





export default function SearchView() {

  const handleSearch = async () => {
    const url = `https://api.deezer.com/search/${selectedButton}?q=${searchValue}`;
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    console.log(data.contents);
  };

  const [searchValue,setSearchValue] = useState('');
  const inputRef = useRef(null);

  const handleClearSearch = () => {
    // Code pour effacer le contenu de la recherche
    setSearchValue('');
    inputRef.current.focus();
  };

  const [selectedButton, setSelectedButton] = useState('artist');

  const handleButtonClick = (value) => {
    setSelectedButton(value);
  };

  const SearchButtons = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 30,
  }));
  
  const SearchButton = styled(Button)(({ theme, variant }) => ({
    marginLeft: 10,
    marginTop: 15,
    color: 'white',
    borderColor: '#1ED75A', 
    backgroundColor: variant === 'contained' ? '#1ED75A' : 'transparent',
    '&:hover': {
      borderColor: '#1ED75A', backgroundColor: '#1ED75A',
    },
  }));

  return (
    <div className="searchView">
      <Sidebar></Sidebar>
      <Stack spacing={0} direction="column">
        <div className='recherche'>
        <Stack spacing={5} direction="row">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Chercher…"
              inputRef={inputRef}
              inputProps={{ 'aria-label': 'search' }}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.target.value !== '') {
                  handleSearch();
                }
              }}
            />
             <IconButton onClick={handleClearSearch} sx={{ color:"#FFFFFF"}}>
              <ClearIcon />
            </IconButton>
          </Search>

          <SearchButtons>
          <SearchButton variant={selectedButton === 'album' ?  'outlined' : 'contained'} onClick={() => handleButtonClick('album')}>album</SearchButton>
          <SearchButton variant={selectedButton === 'artist' ? 'outlined' : 'contained' } onClick={() => handleButtonClick('artist')}>artiste </SearchButton>
          </SearchButtons>
          </Stack>
        </div>

        <div className='resultat'>

        </div>
        
      </Stack>
    </div>
  );
}
