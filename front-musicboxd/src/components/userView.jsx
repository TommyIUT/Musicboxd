import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';

export default function userView({user, setUser, isConnected, setIsConnected}) {
  return (
    <div className="userView">
      <h1>Voici la page user</h1>
      <div className="buttons">
        <Sidebar />
      </div>
    </div>
  );
}
