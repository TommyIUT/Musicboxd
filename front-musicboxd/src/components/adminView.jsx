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
            const url = `http://localhost:5000/userbox/`;
            const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            });
            const data = await response.json()
            setUsersData(data)
        } catch {
           // navigate('/login')
        }
        }

        return(
            <div className="artistView">
                {usersData ? (
                    <Stack spacing={0} direction="column" sx={{width:'85%'}}>


                    </Stack>
                ):(
                    <CircularProgress/>
                )}
            <Sidebar isAdmin={isAdmin} setIsAdmin={setIsAdmin} user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}></Sidebar>
            <h1 className='txtgestion'>Gestion des utilisateurs</h1>
            


            </div>
        )
}