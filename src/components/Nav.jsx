import React from "react";
import "../styles/nav.css";
import {Link} from 'react-router-dom';
export default function Nav () {
    return (
        <div className="nav">
          <div className="navContainer">
              <div className="logo">
                  <h3>LOGO</h3>
              </div>
              <div className="navElements">
        <ul>
            <Link to='/'> 
            <li> Home</li>
            </Link> 
            <Link to='/login'>
            <li> Login</li>
            </Link>
            <Link to="/register">
            <li> Register</li>
            </Link>
            <Link to='/search'>
            <li> Search Movie</li>
            </Link>
        </ul>
              </div>
          </div>
        </div>
    )
}