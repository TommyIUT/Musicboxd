import React, {useEffect, useState} from 'react'


import '../styles/homeView.css'

export default function HomeView() {

    async function gettruc() {
        const url = 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv';

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '1ca5a7b086824dddb44aaf5d41f70858',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          }
        };
        
        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
    }

    useEffect(() => {
        gettruc()
    }, [])

    return(
        <div className='homeView'>
            <h1>Voici la page homeView</h1>
            {/*<Card/></Card>*/} 
        </div>
    );
}