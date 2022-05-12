import React from 'react'
import './Home.css'
import Card from './Card';
import { useEffect, useState} from 'react';
import Header from './Header';
import LiveSpace from './LiveSpace';
import Filter from './Filter'



function Home() {
    const [movieData, setMovieData] = useState([]);
    const [search, setSearch]       = useState("Breaking");


    useEffect(() => {
        getMovies();
    },  [search]); 
    
    const getMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
        'X-RapidAPI-Key': '7b8dd37116mshd8cd9bb2520b8dcp130ab3jsn16cd887b08f9'
        }
    };
    const response = await fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${search}&r=json&page=1` ,options);
    const data = await response.json();
    setMovieData(data.Search);
    console.log(data.Search);
    }
    console.log(search);
    
return (<>
    <div className='home__container'>
    <Header 
        setSearch={setSearch}
        search   ={search}
    />
    <LiveSpace />
    <Filter />
    {!movieData ? (<p>Data not found</p>
    ) :<div className='result__container'>
        {movieData.map((item) => {
            return (<Card 
                key = {item.imdbID}
                movie ={item}
            />)
        })}
    </div>  }
    
    </div>

    </>
    )
}

export default Home;
