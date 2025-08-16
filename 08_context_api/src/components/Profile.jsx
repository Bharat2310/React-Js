import React from "react";
import UserContext from "../context/userContext";
import { useContext } from "react";
import UserContextProvider from "../context/UserContextProvider";


function Profile(){
    const {User} = useContext(UserContext)
    
    if(!User) return (<div>Please LogIn</div>)
    return( <div>Welcome: {User.Username}</div>)

}
export default Profile