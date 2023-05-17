import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, useNavigate, useParams  } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import CircleIcon from '@mui/icons-material/Circle';
import { ReactComponent as DeezerIcon } from '../assets/deezer.svg'

import '../styles/albumview.css'

export default function AlbumView({ user, setUser, isConnected, setIsConnected}) {

    const [albumData, setAlbumData] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (user === ''){
          navigate('/login')
        } else {
          fetchAlbum(id);
        }
      }, [user, navigate]);
    
    async function fetchAlbum(id) {
    try{
        const url = `https://api.deezer.com/album/${id}`;
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        const res  = JSON.parse(data.contents.replace(/[\u0000-\u001F\u007F-\u009F]/g, ''));
        // console.log(res.artist.id)
        setAlbumData(res)
    } catch {
        navigate('/login')
    }
    }

    return(
        <div className="albumView">
            <Sidebar user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}></Sidebar>
            {albumData ? (
            <div className='albumdata'>
            <Stack spacing={0} direction="column" sx={{marginLeft:'-30px'}}>
            <Stack spacing={3} direction="row" >
                <Link to={albumData.cover_medium} target="_blank"><img src={albumData.cover_medium} className='albumcover'></img></Link>
                <div className='txtcontaineralbum'>
                    <p className='albumd'>ALBUM</p>
                    <h1 className='titrealbum'>{albumData.title}</h1>
                    <p className='moredataalbum'>{albumData.release_date.substring(0, 4)} <CircleIcon/> {albumData.nb_tracks} titres <CircleIcon/> {(Math.floor(albumData.duration / 3600)) + 'h' + (Math.floor((albumData.duration % 3600) / 60)) + 'min'}</p>
                </div>
            </Stack>
            <Stack spacing={1} direction="row" >
                <p className='linktoartist'><Link to={'/artist/'+albumData.artist.id} className='linktoartist'>{albumData.artist.name}</Link></p>
                <p className='linktodeezeralbum'> <a href={albumData.link} target='_blank' className='linktodeezeralbum'>Écouter sur Deezer <DeezerIcon className='icon'/></a></p>
            </Stack>

            </Stack>

            </div>):(
                <CircularProgress />
            )}
            <div className='review'>
                
            </div>
        </div>
    )

}