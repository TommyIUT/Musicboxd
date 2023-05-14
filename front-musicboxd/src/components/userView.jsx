import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, useNavigate } from 'react-router-dom';





export default function UserView({ user, setUser, isConnected, setIsConnected}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user === ''){
      navigate('/login')
    }
  }, [user, navigate]);

  
  return (
    <div className="userView">
      <Sidebar user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}/>

    </div>
  );
}
