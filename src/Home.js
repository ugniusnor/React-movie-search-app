import React from 'react';
import "./styles/home.css"
export default function Home () {
return (
    <div className="homePage"> 
    <div className="overlay"></div>
    <div className="home-container">
        <h1> Ready for you next movie? </h1>
        <h2>Join and create custom watchlist</h2>
        <p>Find information about your favorite movies and dive deep into the world of cinema</p>
        <div className="button-register">
        Register for free NOW!
        </div>
    </div>
    </div>
)
}