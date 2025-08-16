import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context'
import { useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([])

  const addTodo = (task) => {
    setTasks((prev) => [{id: Date.now(), ...task}, ...prev])

  }
  const updateTodo = (id, task) => {
    setTasks((prev) => prev.map((x) => (x.id === id ? task : x)))

  }

  const deleteTodo = (id) => {
    setTasks((prev) => prev.filter((x) => x.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks((prev) => prev.map((x) => x.id === id ? {...x, completed : !x.completed} : x ))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

  }, [])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks))
  }, [tasks])


  return (
    <TodoProvider value={{tasks, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
