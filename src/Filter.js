import React from 'react'
import './Filter.css';
import { useEffect } from 'react';

export default function Filter( {setActiveGenre, activeGenre, setFiltered, movieData}) {

    useEffect(() => {
        
        if(activeGenre === 0){
            setFiltered(movieData);
            return;
        }
        const filtered = movieData.filter((movie) =>  movie.genre_ids.includes(activeGenre) ) ;
        setFiltered(filtered); 
        console.log(filtered);
    }, [activeGenre]);
        
        

    return (
        <div className='filter__container'>
            
        <button
            className={ activeGenre === 0 ? "active" : ''}
            onClick={() => setActiveGenre(0)}> <small>ALL Movies</small>  </button>
        <button
            className={ activeGenre === 35 ? "active" : ''}
            onClick={() => setActiveGenre(35)}> <small>Comedy</small>  </button>
        <button
            className={ activeGenre === 28 ? "active" : ''}
            onClick={() => setActiveGenre(28)}> <small>Action</small>  </button>
        <button
            className={ activeGenre === 80 ? "active" : ''}
            onClick={() => setActiveGenre(80)}> <small>Crime</small>   </button>
        <button
            className={ activeGenre === 18 ? "active" : ''}
            onClick={() => setActiveGenre(18)}> <small>Drama</small>   </button>
        <button
            className={ activeGenre === 36 ? "active" : ''}
            onClick={() => setActiveGenre(36)}> <small>Fantasy</small>  </button>
            <button
            className={ activeGenre === 27 ? "active" : ''}
            onClick={() => setActiveGenre(27)}> <small>Horror</small> </button>
            
            
        </div>)
}
