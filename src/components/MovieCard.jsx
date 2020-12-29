import React from 'react'
import {Link} from 'react-router-dom';
export default function MovieCard({data}) {
 
return (
    <div className="card-list">
             {data.filter(movie=>movie.poster_path).map(movie => 
              (<Link to={`/movie/${movie.id}`}> <div  className="card" key={movie.id}>
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
               </div> </Link>)
              )}
          
           </div> 
           
)
}
//https://api.themoviedb.org/3/movie/${id}?api_key=e995f6acc03e4701e807ecc5e262c657