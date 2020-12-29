
import React,{useEffect, useState} from "react";

export default function SingleMovie ( {match} ) {

    const [movie,setMovie]=useState([])
    const id=match.params.id;
    useEffect ( ()=>{
        const url=`https://api.themoviedb.org/3/movie/${id}?api_key=e995f6acc03e4701e807ecc5e262c657`;
        const getData = async () => {
            try {
            const res=await fetch (url);
            const movie=await res.json();
            setMovie(movie);
            }
              catch(err) {
                console.log("faield to fetch" + err);
              }
        }
       getData();
    },[])

    return (
        <div className="container">

        <div className="card" key={movie.id}>
                 <img className="card--image" 
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                 alt={movie.title + "poster"}/>
                 <div className="card--content">
                   <h3 className="card--title">
                     {movie.title}
                   </h3>
                   <p><small>RELEASE DATE: {movie.release_date}</small> </p>
                   <p><small>MOVIE RATING: {movie.vote_average}</small> </p>
                   <p className="card--desc"> {movie.overview}</p>
   
                 </div>
               </div> 
               </div>

     
    )
}
////https://api.themoviedb.org/3/movie/${id}?api_key=e995f6acc03e4701e807ecc5e262c657


