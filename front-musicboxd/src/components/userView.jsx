import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';

export default function userView({user, setUser, isConnected, setIsConnected}) {
  return (
    <div className="userView">
      <Sidebar user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}/>
    </div>
  );
}
