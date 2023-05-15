import React, { useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


import '../styles/editview.css'


export default function EditView({ user, setUser, isConnected, setIsConnected}) {
    const [userData, setUserData] = useState(null);
    const [pseudo, setPseudo] = useState('');
    const [localisation, setLocalisation] = useState('');
    const navigate = useNavigate(); 

    const handlePseudoChange = (e) => {
        setPseudo(e.target.value);
      };
    
      const handleLocalisationChange = (e) => {
        setLocalisation(e.target.value);
      };
    

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
        setPseudo(data[0].pseudo)
        setLocalisation(data[0].localisation)
        setUserData(res)
        } catch {
        navigate('/login')
        }
    }

    return (
        <div className="editView">
          {userData ? (
            <Stack spacing={1} direction="row" sx={{ marginTop: '100px', marginLeft: '250px', marginRight: '250px' }}>
              <Stack spacing={3} direction="column">
                <form className="login-form">
                  <div className="input-login">
                    <label htmlFor="pseudo">Pseudo</label>
                    <input type="modif" id="pseudo" name="pseudo" value={pseudo} onChange={handlePseudoChange} />
                  </div>
                  <div className="input-login">
                    <label htmlFor="localisation">Localisation</label>
                    <input type="modif" id="localisation" name="localisation" value={localisation} onChange={handleLocalisationChange} />
                  </div>
                </form>
              </Stack>
              <Stack spacing={3} direction="column"></Stack>
            </Stack>
          ) : (
            <CircularProgress />
          )}
        </div>
      );
    }