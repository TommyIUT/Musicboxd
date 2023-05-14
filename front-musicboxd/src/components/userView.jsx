import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';



function getUserFromToken(token) {
  try {
    const decodedToken = jwt.verify(token, process.env.jwtSecret);
    const userId = decodedToken.polyuser;
    return userId;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default function userView({path, user, setUser, isConnected, setIsConnected}) {
  const token = localStorage.getItem("token");
  const userId = getUserFromToken(token);
  
  return (
    <div className="userView">
      <Sidebar user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}/>

    </div>
  );
}
