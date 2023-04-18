import React, {useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';

import Card from '../../components/card/card.js'  //pour importer un component

import './homeView.css'

export default function HomeView() {
    useEffect(() => {
        console.log("debut");
    }, [])

    return(
        <div className='homeView'>
            <Helmet>
                <link rel="icon" type="image/x-icon" href="../logo.ico" />
            </Helmet>
            <h1>Voici la page homeView</h1>
            {/*<Card/></Card>*/} 
        </div>
    );
}