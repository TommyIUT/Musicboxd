import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import '../styles/homeView.css';

export default function HomeView() {
  return (
    <div className="homeView">
      <h1>Voici la page homeView</h1>
      <div className="buttons">
        <Sidebar />
      </div>
    </div>
  );
}
