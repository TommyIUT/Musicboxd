import React, {useEffect, useState} from 'react'

import Card from '../../components/card/card.js'  //pour importer un component

import './homeView.css'

export default function HomeView() {
    useEffect(() => {
        console.log("debut");
    }, [])

    return(
        <div className='homeView'>
            <h1>Voici la page homeView</h1>
            {/*<Card/></Card>*/} 
        </div>
    );
}