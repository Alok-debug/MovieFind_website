import React from 'react'
import './Card.css'

function Card({movie}) {
    return (
    <div className='card__container'>
        <img src={movie.Poster} alt='poster'></img>
        <h3>{movie.Title}</h3>
        <div className='card__tinyBox'>
            <p>{movie.Year}</p>
            <small>{movie.Type}</small>
        </div>
    </div>
    )
}

export default Card;