import { useState } from "react"


function App() {
  const [colour, setColour ]=useState("#1a1a1a")

  return (
    <>
      <div className="w-screen h-screen duration-200 " style={{backgroundColor: colour}} >
    <h1 className="font-extrabold text-center text-5xl text-amber-200 pt-3.5 pb-3"> BACKGROUND COLOUR CHANGER</h1>
    <h3 className="font-medium text-center text-2xl text-amber-200">Click on the colour to change BG</h3>

        <div className="w-fit fixed flex flex-row justify-center align-middle bottom-9 inset-x-0 px-2 py-2 bg-white rounded-4xl ml-auto mr-auto text-amber-50">  
        <button className="bg-red-500 rounded-2xl text-white font-bold w-20 p-2 m-2 transition-all duration:200 delay-50 ease-in-out hover:bg-red-600 hover:scale-110 hover:translate-y--1" onClick={()=>setColour("red")}> Red</button>
        <button className="bg-blue-600 rounded-2xl text-white font-bold w-20 p-2 m-2 transition-all duration:200 delay-50 ease-in-out hover:bg-blue-700 hover:scale-110 hover:translate-y--1" onClick={()=>setColour("blue")}> Blue</button>
        <button className="bg-green-600 rounded-2xl text-white font-bold w-20 p-2 m-2 transition-all duration:200 delay-50 ease-in-out hover:bg-green-700 hover:scale-110 hover:translate-y--1" onClick={()=>setColour("green")}> Green</button>
        <button className="bg-yellow-400 rounded-2xl text-white font-bold w-20 p-2 m-2 transition-all duration:200 delay-50 ease-in-out hover:bg-yellow-500 hover:scale-110 hover:translate-y--1" onClick={()=>setColour("yellow")}> Yellow</button>
        <button className="bg-black rounded-2xl text-white font-bold w-20 p-2 m-2 transition-all duration:200 delay-50 ease-in-out hover:scale-110 hover:translate-y--1" onClick={()=>setColour("black")}> Black</button>
        <button className="bg-purple-600 rounded-2xl text-white font-bold w-20 p-2 m-2 transition-all duration:200 delay-50 ease-in-out hover:bg-purple-700 hover:scale-110 hover:translate-y--1" onClick={()=>setColour("purple")}> Purple</button>
        <button className="bg-pink-400 rounded-2xl text-white font-bold w-20 p-2 m-2 transition-all duration:200 delay-50 ease-in-out hover:bg-pink-500 hover:scale-110 hover:translate-y--1" onClick={()=>setColour("pink")}> Pink</button>
        <button className="bg-lime-400 rounded-2xl text-white font-bold w-20 p-2 m-2 transition-all duration:200 delay-50 ease-in-out hover:bg-lime-500 hover:scale-110 hover:translate-y--1" onClick={()=>setColour("lime")}> Lime</button>
        <button className="bg-orange-400 rounded-2xl text-white font-bold w-20 p-2 m-2 transition-all duration:200 delay-50 ease-in-out hover:bg-orange-500 hover:scale-110 hover:translate-y--1" onClick={()=>setColour("orange")}> Orange</button>
        <button className="bg-white rounded-2xl text-black font-bold w-20 p-2 m-2 outline-2 transition-all duration:200 delay-50 ease-in-out hover:bg-gray-100 hover:scale-110 hover:translate-y--1" onClick={()=>setColour("white")}> White</button>
        <button className="bg-gray-500 rounded-2xl text-white font-bold w-20 p-2 m-2 transition-all duration:200 delay-50 ease-in-out hover:bg-gray-600 hover:scale-110 hover:translate-y--1" onClick={()=>setColour("gray")}> Gray</button>
        </div>
      </div>
    </>
  )
}

export default App
