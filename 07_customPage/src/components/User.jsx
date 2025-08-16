import React from "react";
import { useParams } from "react-router";

function User (){
    const {userid} = useParams()
    return (
        <>

        <div className="bg-gray-700 text-center text-3xl text-white p-5" > USER : {userid}</div>
        </>
    )

}
export default User