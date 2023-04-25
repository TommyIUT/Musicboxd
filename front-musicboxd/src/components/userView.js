import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
//import '../styles/homeView.css';

export default function userView() {
  return (
    <div className="userView">
      <h1>Voici la page user</h1>
      <div className="buttons">
        <Sidebar />
      </div>
    </div>
  );
}
