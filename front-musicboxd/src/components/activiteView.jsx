import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import gotham from '../font/GothamBold.ttf';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import AlbumIcon from '@mui/icons-material/Album';

import '../styles/activiteview.css'

export default function ArtistsView({ user, setUser, isConnected, setIsConnected}){
    const [userData, setUserData] = useState(null);
    const [activites, setActivites] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        if (user === ''){
          navigate('/login')
        } else {
          fetchUser(user);
          fetchActivites(user);
        }
      }, [user, navigate]);

    async function fetchUser(id) {
    try{
        const url = `http://localhost:5000/userbox/id/${id}`;
        const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        });
        const data = await response.json()
        const res = [data[0].pseudo, data[0].bio, data[0].pronoms, data[0].localisation, data[0].photo]
        setUserData(res)
    } catch {
        navigate('/login')
    }
    }

    async function fetchActivites(id) {
        try{
            const url = `http://localhost:5000/activite/${id}`;
            const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            });
            const data = await response.json()
            console.log(data)
            setActivites(data)
        } catch {
            navigate('/login')
        }
        }


        return(
            <div className='activiteview'>
            <Sidebar user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}></Sidebar>
            {userData ? (
            <div className='useravatar'>
                <Stack spacing={0} direction="column" sx={{marginLeft:'-50px'}}>
                <Stack spacing={0} direction="row">
                <Link to='/user'>
                    <Avatar
                    alt={user}
                    src={userData[4]}
                    sx={{ width: 200, height: 200, marginTop: '30px', marginLeft: '200px'}}
                    /></Link>
                <h1 className='pseudo'>{userData[0]}</h1>
                </Stack>
                <Button variant="contained" startIcon={<AccountCircleSharpIcon />} sx={{ '&:hover': {
                    color: 'white',
                    backgroundColor: '#1ED75A',
                }, width: '40vw', marginLeft:'390px', marginTop:'10px',color: 'white', backgroundColor: '#1ED75A', fontFamily: gotham, fontSize:'25px', zIndex: '4'}}>
                Activité
                </Button>
                </Stack>
            </div>
        ):(
            <CircularProgress />
        )}
        <Stack spacing={0} direction="column" sx={{marginLeft:'-50px'}}>
        {activites ? (
            <div className='activites'>
                {activites.map((artist) => (
                <div className="activite" >
                    <Link to={`/artist/${artist.id_artist}`}>
                    <img src={artist.photo_artiste} alt={artist.nom_artiste} />
                    </Link>
                    <h2>{artist.nom_artiste}</h2>
                </div>
                ))}
            </div>
        ):(
            <CircularProgress />
        )}
        </Stack>





            </div>
        
        
        );


}

