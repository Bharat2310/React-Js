import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../public/components/cards'

function App() {
  const [count, setCount] = useState(0)
  let myArr=["chemistry", 'maths', 'physics', "computer science"]

  return (
    <>

      <h1 className='bg-red-900 text-amber-400 font-extrabold rounded-4xl font-stretch-200% mb-2'>TAILWIND TEXT</h1>
        {myArr.map((item, i) => (
        <Card key={i} subName={item} />
      ))}
      
      
      
    </> 


  )
}

export default App
