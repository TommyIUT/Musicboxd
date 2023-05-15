import React, { useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';

import '../styles/editview.css'


export default function EditView({ user, setUser, isConnected, setIsConnected}) {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate(); 

    

    useEffect(() => {
        if (user === ''){
        navigate('/login')
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

    console.log(userData)

  return (
    <div className="editView">
      
    </div>
  );
}