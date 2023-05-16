import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, useNavigate, useParams  } from 'react-router-dom';
import Stack from '@mui/material/Stack';

import '../styles/albumview.css'

export default function AlbumView({ user, setUser, isConnected, setIsConnected}) {
    console.log(user)

    const [albumData, setAlbumData] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    
    

    return(
        <div className="albumView">
            <Sidebar user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}></Sidebar>
            blabla
        </div>
    )

}