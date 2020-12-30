import React, {useState} from 'react';
import "../styles/signup.css"
import axios from "axios";
import Login from "./login";
import {Link, Redirect} from 'react-router-dom';
const API_PATH="http://localhost/personal-react/backend/index.php";


class Signup extends React.Component {
    constructor(){
        super();
        this.state ={
            email:"",
            password:"",
            repeatPassword:"",
            isRegistred:false,
            errors:false
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }

        handleSubmit(e) {
        e.preventDefault();
        axios.post(API_PATH, this.state)
      .then(res => {
          if(res.data===1) {
              this.setState({isRegistred:true})
              
          } 
          else {
              this.setState({errors: res.data}) 

          }
        })
      
           
        
            }
    render () {
        if (this.state.isRegistred) {
            return <Redirect to="/login"/>
        }
        // if (!this.state.isRegistred) {
            return (
              
                <div className="signup-container">
                <h1>{this.state.errors && (<div className="error-message"> <div className="error-sign "> !</div> {this.state.errors}</div> )}</h1>             
                    
                <form className="signup-form">
                    <h1>Register</h1>
                     <label  htmlFor="email">Your email</label>
                     <input value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value}) }}id= "email" name="email" type="text"/>
                     <label htmlFor="passwrod">Your Password</label>
                     <input value={this.state.password} onChange={(e)=> { this.setState({password:e.target.value})} } type="password"/>
                     <label  htmlFor="email">Confirm Password</label>
                     <input value={this.state.repeatPassword} onChange={(e)=>{this.setState({repeatPassword:e.target.value})}}  type="password"/>
                     <button onClick={this.handleSubmit} className="signup-button" type="submit"> Sign up</button>
                    
                </form>
                  </div>
            )
        // }
    //  else {
    //             return (
    //                     <Login/>
    //             )
    //     }
    }
}
export default Signup;

