import React from 'react'
import SecondP from './SecondP'
import ThirdP from '../ThirdP'
import axios from 'axios'

import { useState, useEffect } from 'react'


export default function Firstp() {
    const [query, setQuery] = useState(' ')
    const [movie, setMovie] = useState(0)

   

useEffect(() =>{
    
       
        const movieURL = (`https://omdbapi.com/?t=${query}&apikey=98e3fb1f`);
        
        
        const getMovie = async() =>{  
        const res =  await axios.get(movieURL)
        setMovie(res.data)
        console.log(res.data)
    }
    getMovie()
},[query])


    return (
        <div className='FirstP'>
            <SecondP query={query} setQuery={setQuery}/>
            { movie ? (
                <div>
            
           <h1> {movie.Title}</h1>
           <img src={movie.Poster} alt={movie.Title} />
           <p><strong>Plot:</strong> {movie.Plot}</p>
           <p><strong>Director:</strong> {movie.Director}</p>
           <p><strong>Starring:</strong> {movie.Actors}</p>
           <p><strong>Gross:</strong> {movie.BoxOffice}</p>
           <h2>Year: {movie.Year}</h2>
           

        </div>
                // some jsx if true
            ):(
                <p>Loading...</p>
                //some jsx if false
            )
            }
            
        </div>
    )
}
