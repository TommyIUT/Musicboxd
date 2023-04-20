import React, {useEffect, useState} from 'react'


import '../styles/homeView.css'

export default function HomeView() {

    async function gettruc() {
        const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/';

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'or8aUaTTxjHilylxjyGABvG_b7FSlypKE01KUgoh56W8bILDuNihl1BfdNm9cF2J',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
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