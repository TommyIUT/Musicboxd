import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import '../styles/homeView.css';

export default function HomeView() {
  return (
    <div className="homeView">
      <Sidebar></Sidebar>
      <div className="home">
        
        accueil

      </div>
      <div className="footer">
        <p className='footer-txt'>
          Musicboxd. Cette application a été créée par un <a href='https://www.linkedin.com/in/tom-philippe-214a9a224/' target="_blank" className='footer-txt'>étudiant en informatique</a> en 2023. Données : <a href='http://deezer.com' target="_blank" className='footer-txt'>Deezer</a>.
        </p>
      </div>
    </div>
  );
}
