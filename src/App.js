import React from "react";
import  Nav from "./components/Nav";
import Home from "./Home"
import SearchComponent from "./components/SearchMovie";
import Login from "./Login";
import Register from "./Register"
import SingleMovie from "./components/SingleMovie"
import Signup from "./components/signUp"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Router> 
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/search" component={SearchComponent}/>``
      <Route path="/movie/:id" component={SingleMovie}/>
      <Route path="/signup" component={Signup}/> 
      </Switch>
     
  
 
    </Router>
    </>
  ) 
}
//https://api.themoviedb.org/3/movie/550?api_key=e995f6acc03e4701e807ecc5e262c657
export default App;
