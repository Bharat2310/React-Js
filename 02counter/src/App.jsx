import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 15

function App() {
let [counter, setCounter]= useState(14

)

  const incCount=()=>{
    if (counter < 20 && counter > 0 || counter ==0) {
      console.log("counter added, new counter =", counter+1);
      counter ++
      setCounter(counter)
    }
    
  }

  const decCount=()=>{
    if (counter < 20 && counter > 0 || counter == 20 ) {
      console.log("counter added, new counter =", counter-1);
      counter --
      setCounter(counter)
    }
  }
  

  return (
    <>
      <h1>hellp world || hooks here</h1>
      <h3>Counter's Counter : {counter}</h3>

      <button onClick={incCount}>INCREASE COUNT</button>
      <br />
      <button onClick={decCount}>DECREASE COUNT</button>

    </>
  )
}

export default App
