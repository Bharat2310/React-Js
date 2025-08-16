import { useContext, useState } from "react";
import React from "react";
import UserContext from "../context/userContext";
import UserContextProvider from "../context/UserContextProvider";

function Login (){

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({Username, Password})

    }


    return(
        <div>
            <h2>LOGIN</h2>
            <input type="text" placeholder="Enter Username" value={Username} onChange={(e)=>{setUsername(e.target.value)} } />
            {"      "}
            <input type="password" placeholder="Enter Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button type="submit" onClick={handleSubmit}>Submit</button>

        
        </div>
    )

}

export default Login