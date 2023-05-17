import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, useNavigate, useParams  } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

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


    async function fetchArtistAlbums(id) {
        try{
            const url = `https://api.deezer.com/artist/${id}/albums`;
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
            const data = await response.json();
            const res  = JSON.parse(data.contents.replace(/[\u0000-\u001F\u007F-\u009F]/g, ''));
            setArtistAlbums(res)
        } catch {
            navigate('/login')
        }
        }
    

    return(
        <div className="artistView">
            <Sidebar user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}></Sidebar>
            {artistData ? (
            <div className='artistdata'>

            </div>):(
                <CircularProgress />
            )}
            <div className='artistalbums'>
                
            </div>
        </div>
    )

}