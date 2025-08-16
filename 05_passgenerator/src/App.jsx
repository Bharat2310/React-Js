import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [Password, setPassword] = useState("")
  const [Slider, setSlider] = useState(8)
  const [Numbers, setNumbers] = useState(false)
  const [Characters, setCharacters] = useState(false)
  const [Copy, setCopy] = useState("COPY")

  const passRef = useRef(null)

  const passGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(Numbers) str += "1234567890"
    if(Characters) str += "!@#$%^&*()_+-={}[]|?/~`><.,"
      for (let i = 0; i < Slider; i++) {
        const char = Math.floor(Math.random()*str.length +1)
        pass+=str[char]
      }
      setPassword(pass)

  }, [Slider, Numbers, Characters, setPassword])
  useEffect(()=>{passGenerator()}, [Slider, Numbers, Characters, passGenerator])

  const copyPass= useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(Password)
    setCopy("COPIED!")
    setTimeout(() => setCopyText('COPY'), 1000);

  }, [Password ,Copy] )



  return (
    <>
    <div className='bg-gray-500 text-center mt-24  rounded-2xl max-w-max shadow-gray-800 shadow-lg p-3 justify-items-center align-middle' >
      <h1 className=" text-red-200 text-center font-extrabold text-5xl mb-10" > RANDOM PASSWORD GENERATOR</h1>
      <div className='flex flex-row'>
        <input type="text" className='bg-white w-3xl   rounded-2xl p-3' placeholder='PASSWORD' value={Password} readOnly ref={passRef}/>
        <button className='bg-blue-600 ml-10 mr-15 p-4 rounded-2xl font-bold text-white text-2xl transition-all hover:bg-blue-700 duration-100 delay-100 cursor-pointer shadow-blue-950 shadow-lg hover:scale-110' onClick={copyPass} id='COPY'>{Copy}</button>
      </div>
      <div >
        <input type="range" min={6} max={50} className='mt-7 cursor-pointer' id='slider' value={Slider} onChange={e => setSlider(Number(e.target.value))} />
        <label htmlFor="slider" className='bg-gray-800 text-amber-50 p-2.5 ml-3 rounded-3xl font-medium drop-shadow-gray-950 '>LENGTH:{Slider}</label>
      </div>
      <div className='mt-5 text-2xl font-medium w-fit p-2'>
        <input type="checkbox" name="Number" id="Number" defaultChecked={Numbers} onChange={() => {setNumbers((prev) => !prev)}} />
        <label htmlFor="Number"> Numbers</label>
      </div>
      <div className='mb-3 text-2xl font-medium w-fit p-2 decoration-1'>
        <input type="checkbox" name="Characters" id="Characters" defaultChecked={Characters} onChange={() => {setCharacters((prev) => !prev)}} />
        <label htmlFor="Characters"> Special Characters</label>
      </div>

      


    </div>
      
    </>
  )
}

export default App
