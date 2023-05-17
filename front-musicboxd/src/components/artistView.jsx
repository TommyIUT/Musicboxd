import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import gotham from '../font/GothamBold.ttf';
import { ReactComponent as DeezerIcon } from '../assets/deezer.svg'
import AlbumIcon from '@mui/icons-material/Album';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import '../styles/artistview.css'

export default function ArtistView({ user, setUser, isConnected, setIsConnected}) {

    const [artistData, setArtistData] = useState(null);
    const [artistAlbums, setArtistAlbums] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (user === ''){
          navigate('/login')
        } else {
            fetchArtist(id);
            fetchArtistAlbums(id);
        }
      }, [user, navigate]);
    
    async function fetchArtist(id) {
    try{
        const url = `https://api.deezer.com/artist/${id}`;
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        const res  = JSON.parse(data.contents.replace(/[\u0000-\u001F\u007F-\u009F]/g, ''));
        setArtistData(res)
    } catch {
        navigate('/login')
    }
    }

    const handleGoBack = () => {
        navigate(-1);
      };


    async function fetchArtistAlbums(id) {
        try{
            const url = `https://api.deezer.com/artist/${id}/albums`;
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
            const data = await response.json();
            const res  = JSON.parse(data.contents.replace(/[\u0000-\u001F\u007F-\u009F]/g, ''));
            setArtistAlbums(res.data)
        } catch {
           // navigate('/login')
        }
        }
    

    return(
        <div className="artistView">
            <div className='bandegrise'></div>
            <Sidebar user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}></Sidebar>
            <IconButton aria-label="delete" size="small" sx={{position:'fixed', margin:'15px'}} onClick={handleGoBack}>
            <ArrowBackIosIcon sx={{color:'white'}} fontSize="inherit" />
            </IconButton>
            {artistData ? (
            <div className='artistdata'>
            <Stack spacing={2} direction="row" sx={{marginTop:'15px', marginLeft:'40px'}}>
            <Stack spacing={2} direction="column" >
                <Link to={artistData.picture_medium} target='_blank'>
                <Avatar
                alt={artistData.title}
                src={artistData.picture_medium}
                sx={{ width: 300, height: 300}}
                /></Link>
                <Button variant="contained" sx={{ '&:hover': {
                    color: 'white',
                    backgroundColor: '#1a1a1a',
                }, width: '100%',color: 'white', backgroundColor: '#1ED75A', fontFamily: gotham}} className='test'>
                S'abonner
                </Button>
            </Stack>
            <Stack spacing={0} direction="column" sx={{width:'100%'}}>
                <div className='artistdatacontainer'></div>
                <p className='artistd'>ARTISTE</p>
                <h1 className='nomartiste'>{artistData.name}</h1>
                <p className='linktodeezerartist'> <a href={artistData.link} target='_blank' className='linktodeezerartist'>Écouter Écouter sur Deezer <DeezerIcon className='icon'/></a></p>
            </Stack>
            </Stack>
            </div>):(
                <CircularProgress />
            )}

            {artistAlbums && artistData ? (
            <div className='artistalbums'>
                <Stack spacing={0} direction="column" sx={{width:'100%'}}>
                <Button variant="contained" startIcon={<AlbumIcon />} sx={{ '&:hover': {
                    color: 'white',
                    backgroundColor: '#1ED75A',
                }, width: '40vw', marginLeft:'23vw', marginTop:'10px',color: 'white', backgroundColor: '#1ED75A', fontFamily: gotham, fontSize:'25px'}}>
                Albums ( {artistData.nb_album} )
                </Button>
                <div className='resalbums'> 
                {artistAlbums.map((album) => (
                    <div className="album">
                        <Link to={`/album/${album.id}`}>
                        <img src={album.cover_medium} alt={album.title} />
                        </Link>
                    </div>
                    ))}
                </div>
                </Stack>
            </div>
            ):(
                <CircularProgress sx={{marginTop:'55vh'}}/>
            )}

           
        </div>
    )

}