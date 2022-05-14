import React from 'react'
import './Card.css'

function Card({movie}) {
    return (
    <div className='card__container'>
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt='poster'></img>
        <h3>{movie.title}</h3>
        <div className='card__bottom'>
        <div className='card__tinyBox'>
            <p> Release Date: {movie.release_date}</p>
            <small> Original Lang: {movie.original_language}</small>
        </div>
        <div className='card__voting'>
            <span>{movie.vote_average}</span>
        </div>
        </div>
    </div>
    )
}

export default Card;