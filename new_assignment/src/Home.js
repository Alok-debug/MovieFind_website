import React from 'react'
import './Home.css'
import Card from './Card';
import { useEffect, useState} from 'react';



function Home() {
    const [movieData, setMovieData] = useState([]);
   

    useEffect(() => {
        getMovies();
    },  []); 
    
    const getMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
        'X-RapidAPI-Key': '7b8dd37116mshd8cd9bb2520b8dcp130ab3jsn16cd887b08f9'
        }
    };
    const response = await fetch('https://movie-database-alternative.p.rapidapi.com/?s=marvel&r=json&page=1',options);
    const data = await response.json();
    setMovieData(data.Search);
    console.log(data.Search);
    }

return (<>
    <div className='home__container'>
        
        {movieData.map((item) => {
            return (<Card 
                key = {item.imdbID}
                movie ={item}
            />)
        })}
        
        
    
        
    
    </div>
    </>
    )
}

export default Home;
