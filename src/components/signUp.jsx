import React, {useState} from 'react';
import "../styles/signup.css"
import {useAuth} from '../cotext/AuthContext'
export default function Signup() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [repeatPassword,setRepeatPassword]=useState("");
    const {signup} = useAuth()
   function handleSubmit(e){
    e.preventDefault();
    signup(email, password)
    }
    
    return (
        <div className="signup-container">
       <form className="signup-form" action="">
            <label  htmlFor="email">Your email</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} id= "email" name="email" type="text"/>
            <label htmlFor="passwrod">Your Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
            <label onChange={(e)=>{setRepeatPassword(e.target.value)}} htmlFor="email">Confirm Password</label>
            <input type="password"/>
            <button onClick={handleSubmit} class="signup-button" type="submit"> Sign up</button>
       </form>
         </div>
    )
}