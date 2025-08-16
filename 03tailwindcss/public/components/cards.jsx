import React from "react"

function Card({subName= "chemistry"}){
    return (
        <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 via-50% to-pink-500 rounded-3xl mb-4 mt-6">
          <div className=" bg-black sm:p-10 p-6 rounded-3xl">
            <div className="">
              <h5 className="text-xl font-bold text-gray-50 ">Science of {subName}</h5>
    
              <p className="mt-2 text-sm text-gray-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
              </p>
            </div>
          </div>
        </div>
    )
}
export default Card