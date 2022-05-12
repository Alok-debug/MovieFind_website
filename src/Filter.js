import React from 'react'
import './Filter.css';
import { useState } from 'react';

export default function Filter() {
    
        const [toggle, setToggle] = useState(false);
        const toggleButton = () => setToggle(!toggle);
        

    return (
        <div className='filter__container'>
            
            <button
            style={{backgroundColor: toggle ? 'white' : 'grey'}} onClick={toggleButton}> <small>Most Popular</small>  </button>
            <button> <small>24h Trending</small>  </button>
            <button> <small>Latest Shows</small>  </button>
            <button> <small>In Genesis</small>    </button>
            <button> <small>In Temple</small>     </button>
            <button> <small>In Void</small>       </button>
            <button> <small>#BAYC</small>         </button>
            
            
        </div>)
}
