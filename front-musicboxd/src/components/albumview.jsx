import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, useNavigate, useParams  } from 'react-router-dom';
import Stack from '@mui/material/Stack';

export default function UserView({ user, setUser, isConnected, setIsConnected}) {
    console.log(user)

    const [albumData, setAlbumData] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    
    async function fetchAlbum(id) {
    try{
        const url = `https://api.allorigins.win/get?url=https://api.deezer.com/album/${id}`;
        const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        });
        const data = await response.json()
        console.log(data)
    } catch {
        navigate('/login')
    }
    }

    return(
        <div className="albumView">
            <Sidebar></Sidebar>
        </div>
    )

}