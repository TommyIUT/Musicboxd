import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';

import '../styles/userview.css'


export default function UserView({ user, setUser, isConnected, setIsConnected}) {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  console.log(user)

  useEffect(() => {
    if (user === ''){
      navigate('/login')
    } else {
      fetchUser(user);
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

  return (
    <div className="userView">
      <Sidebar user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}/>
      {userData ? (
        <Avatar
          alt={user}
          src={userData[4]}
          sx={{ width: 300, height: 300, marginTop: '30px', marginLeft: '200px'}}
        />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}