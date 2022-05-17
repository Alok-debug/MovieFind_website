import React from 'react'
import './Home.css'
import Card from './Card';
import { useEffect, useState} from 'react';
import Header from './Header';
import LiveSpace from './LiveSpace';
import Filter from './Filter'

function Home() {
    const [movieData, setMovieData]       = useState([]);
    const [search, setSearch]             = useState(null);
    const [filtered, setFiltered]         = useState([]);
    const [activeGenre, setActiveGenre]   = useState(0);
    
    const API_KEY  = 'api_key=c755df67b87dd32ae6acd3bfa9d66bcb';
        const BASE_URL = 'https://api.themoviedb.org/3';
        const API_URL  = BASE_URL + '/discover/movie?sort_by=popularity.disc&'+API_KEY ;
        const searchURL = BASE_URL + '/search/movie?'+API_KEY;

    useEffect(() => {
            const getMovies = async (url) => {
            const response  = await fetch(url);
            const data      = await response.json();
            setMovieData(data.results);
            setFiltered(data.results);
            }
        if(search === null){
        getMovies(API_URL);}
        else {
        getMovies(searchURL+ '&query='+ search);
        }
    },  [search]); 
    
    
    
    
return (<>
    <div className='home__container'>
    <Header 
        setSearch={setSearch}
        search   ={search}
    />
    <LiveSpace />
    <Filter 
        movieData      ={movieData}
        setFiltered    ={setFiltered}
        activeGenre    ={activeGenre}
        setActiveGenre ={setActiveGenre}
    />
    {/* using ternary operator, so that following component will render 
    only when data is found. */}
    {!filtered ? (<p>Data not found</p>
    ) :<div className='result__container'>
        {filtered.map((item) => {
            return (
                <Card 
                key = {item.id}
                movie ={item}
            />)
        })}
    </div>  }
</div>
</>)
}

export default Home;
