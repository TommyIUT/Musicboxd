import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import CircleIcon from '@mui/icons-material/Circle';
import { ReactComponent as DeezerIcon } from '../assets/deezer.svg'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

import '../styles/albumview.css'

export default function AlbumView({ user, setUser, isConnected, setIsConnected}) {

    const [albumData, setAlbumData] = useState(null);
    const [listenList, setListenList] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (user === ''){
          navigate('/login')
        } else {
          fetchAlbum(id);
          fetchListenList(id);
        }
      }, [user, navigate]);
    
    async function fetchAlbum(id) {
    try{
        const url = `https://api.deezer.com/album/${id}`;
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        const res  = JSON.parse(data.contents.replace(/[\u0000-\u001F\u007F-\u009F]/g, ''));
        // console.log(res.artist.id)
        setAlbumData(res)
    } catch {
        navigate('/login')
    }
    }

    async function fetchListenList(id) {
      try{
          const response = await fetch(`http://localhost:5000/abonne/${user}/${id}`, {
            method: "GET",
            headers: {"Content-Type" : "application/json"},
        });
        const data = await response.json();
        
        if (data.length > 0) {
          setListenList(true);
        } else {
          setListenList(false);
        }
      } catch {
          navigate('/login')
      }
      }

      async function addToListenList() {
        try {
            const id_user = user;
            const id_album = albumData.id
            const nom_album = albumData.title
            const photo = albumData.cover_medium
            const body = { id_user, id_album, nom_album, photo }
            const response = await fetch(`http://localhost:5000/listenlist/`, {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response)
        
            if (response.ok) {
                setListenList(true);
                // activité
                const id_user = user;
                const date = new Date();
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                const seconds = String(date.getSeconds()).padStart(2, '0');
                const activite_date = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                const contenu = 'Vous avez ajouté' + albumData.title + ' à votre listenlist'
                const body = {id_user, activite_date, contenu}
                const responseact = await fetch(`http://localhost:5000/activite/`, {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify(body)
                })
              } else {
                console.log("Erreur lors de l'ajout.");
              }
        } catch (error) {
            console.error(error);
            // navigate('/login');
        }
        }

    const handleGoBack = () => {
        navigate(-1);
      };

      const handleGoEnAvant = () => {
        navigate(+1);
      };

    return(
        <div className="albumView">
            <Sidebar user={user} setUser={setUser} isConnected={isConnected} setIsConnected={setIsConnected}></Sidebar>
            <IconButton aria-label="delete" size="small" sx={{position:'fixed', margin:'15px', zIndex:'4'}} onClick={handleGoBack}>
            <ArrowBackIosIcon sx={{color:'white'}} fontSize="15px" />
            </IconButton>
            <IconButton aria-label="delete" size="small" sx={{position:'fixed',marginLeft:'40px', marginTop:'15px', zIndex:'4'}} onClick={handleGoEnAvant}>
            <ArrowForwardIosIcon sx={{color:'white'}} fontSize="15px" />
            </IconButton>
            {albumData ? (
            <div className='albumdata'>
            <Stack spacing={0} direction="column" sx={{marginLeft:'-30px'}}>
            <Stack spacing={3} direction="row" >
                <Link to={albumData.cover_medium} target="_blank"><img src={albumData.cover_medium} className='albumcover'></img></Link>
                <div className='txtcontaineralbum'>
                    <p className='albumd'>ALBUM</p>
                    <h1 className='titrealbum'>{albumData.title}</h1>
                    <p className='moredataalbum'>{albumData.release_date.substring(0, 4)} <CircleIcon/> {albumData.nb_tracks} titres <CircleIcon/> {(Math.floor(albumData.duration / 3600)) + 'h' + (Math.floor((albumData.duration % 3600) / 60)) + 'min'}</p>
                </div>
            </Stack>
            <Stack spacing={1} direction="row" >
                <p className='linktoartist'><Link to={'/artist/'+albumData.artist.id} className='linktoartist'>{albumData.artist.name}</Link></p>
                <p className='linktodeezeralbum'> <a href={albumData.link} target='_blank' className='linktodeezeralbum'>Écouter sur Deezer <DeezerIcon className='icon'/></a></p>
            </Stack>

            </Stack>

            </div>):(
                <CircularProgress sx={{marginLeft:'75px'}}/>
            )}
            <Stack spacing={0} direction="row" >
            <div className='listenlist'>
              {listenList && albumData ? (
                <div className='llistenlist'>
                <h1>Retirer de la Listenlist</h1>
                <IconButton aria-label="delete" sx={{width:'100px', height:'100px'}} onClick={handleGoEnAvant}>
                <WatchLaterIcon sx={{color:'#1ED75A', width:'100%', height:'100%'}} fontSize="100%" />
                </IconButton>
                </div>
              ):(
                <div className='llistenlist'>
                <h3>Ajouter à la Listenlist</h3>
                <IconButton aria-label="delete" sx={{width:'100px', height:'100px'}} onClick={addToListenList}>
                <WatchLaterOutlinedIcon sx={{color:'#1ED75A', width:'100%', height:'100%'}} fontSize="100%" />
                </IconButton>
                </div>
              )}
            </div>
            <div className='review'>

            </div>
            </Stack>
        </div>
    )

}