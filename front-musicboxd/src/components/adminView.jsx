import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import gotham from '../font/GothamBold.ttf';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

import '../styles/adminview.css'

export default function AdminView({ isAdmin, setIsAdmin,user, setUser, isConnected, setIsConnected}) {
    const navigate = useNavigate();
    const [usersData, setUsersData] = useState(null);

    useEffect(() => {
        if (user === '' || !isAdmin){
          navigate('/login')
        } else {
            fetchUsers();
        }
      }, [user ,navigate]);

      async function fetchUsers() {
        try{
            const response = await fetch(`https://api.allorigins.win/get?`);
            const data = await response.json();
            const res  = JSON.parse(data.contents.replace(/[\u0000-\u001F\u007F-\u009F]/g, ''));
            setUsersData(res.data)
        } catch {
           // navigate('/login')
        }
        }

        return(
            <div className="artistView">
            <Sidebar isAdmin={isAdmin} setIsAdmin={setIsAdmin} user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}></Sidebar>


            </div>
        )
}