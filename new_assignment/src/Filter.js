import React from 'react'
import './Filter.css'

function Filter() {
    return (
        <div className='filter__container'>
            
            <button> <small>Most Popular</small> </button>
            <button><small>24h Trending</small></button>
            <button><small>Latest Shows</small></button>
            <button><small>In Genesis</small></button>
            <button><small>In Temple</small></button>
            <button><small>In Void</small></button>
            <button><small>#BAYC</small></button>
            
        </div>)
}

export default Filter;