import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function GitHub(){

    const Data = useLoaderData()
    // const [Data, setData] = useState ([])
    // useEffect(() => {
    //     fetch( `https://api.github.com/users/Bharat2310`)
    //     .then(res => res.json())
    //     .then(Data => {
    //         console.log(Data);
    //         setData(Data)})

    
    return(
        <>
        <div className="bg-gray-700 text-center text-3xl text-white p-5">GitHub followers: {Data.followers} </div>
        <div className="bg-gray-700 text-center text-3xl text-white p-5">GitHub Repos: {Data.public_repos} </div>
        <img src={Data.avatar_url} alt="GitHub Avatar" className="mx-auto" width={300} />
        </>
    )
}

export const GitInfoLoader = async () => {
    const res = await fetch(`https://api.github.com/users/Bharat2310`)
    return res.json()
}


export default GitHub
