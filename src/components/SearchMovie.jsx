import React, {useState} from "react";
import MovieCard from "./MovieCard"
import "../styles/form.css"
import "../styles/movieCard.css"
function SearchMovie() {

  //state-input querry,movies
  const [query,setQuery]=useState('');
  //state for movies
  const [movies, setMovies]=useState([]);

  const searchMovies = async (e) =>{

    e.preventDefault();
    const url =  `https://api.themoviedb.org/3/search/movie?api_key=e995f6acc03e4701e807ecc5e262c657&language=en-US&query=${query}&page=1&include_adult=false`;
   if(query.length > 1) {
    try {
    const res=await fetch (url);
    const data=await res.json();
    setMovies(data.results);
    }
      catch(err) {
        console.log(err);
      }
  }
}

  return (
    <div className="container">
    <h1 className="title">React movie search</h1>
    <div className="search">
        <form className="searchForm" onSubmit={searchMovies}>
      
            <input className="input" type="text" name="query" 
            placeholder="Search for the movie"
            onChange={(e)=>{setQuery(e.target.value)}}
            value={query}
            />
            
            <button className="buttonSearch"
             type="submit">
             Search
             </button>
        </form>
        <MovieCard data={movies}/>
    </div>
    </div>
  ) 
}
export default SearchMovie;
