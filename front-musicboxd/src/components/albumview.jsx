import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import {Link, useNavigate, useParams  } from 'react-router-dom';
import Stack from '@mui/material/Stack';

export default function UserView({ user, setUser, isConnected, setIsConnected}) {

    const { id } = useParams();
    console.log(id);

    return(
        <div className="albumView">


        </div>
    )

}