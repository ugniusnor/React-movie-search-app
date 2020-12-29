import React, {useContext, useEffect, useState}from "react"
import {auth} from '.../firebase'
const AuthContext = React.createContext();


export function useAuth(){
    return useContext(AuthContext);
}
const AuthContext = React.createContext();

export default function AuthProvider({children}) {
    const [currentUser,setCurrentUser]=useState()

    function signup(email,password) {
       return auth.createUserWithEmailAndPassword(email,passwrod)
    }
    useEffect(()=>{
const unsubscribe =  auth.onAuthStateChange(user=>{
        setCurrentUser(user);
    })
    return unsubscribe
    },[])
   

    const value = {
        currentUser,
        signUp
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
            </AuthContext.Provider>
        
    )
}