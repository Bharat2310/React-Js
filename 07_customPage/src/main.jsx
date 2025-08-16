import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './components/layout.jsx'
import Home from './components/home.jsx'
import About from './components/About.jsx'
import Contact from './components/contact.jsx'
import User from './components/User.jsx'
import GitHub, { GitInfoLoader } from './components/GitHub.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      }, {
        path:"About",
        element:<About/>
      },{
        path:"Contact",
        element:<Contact/>
      },{
        path:"User/:userid",
        element:<User/>
      },{
        loader:GitInfoLoader,
        path:"GitHub",
        element:<GitHub/>
      }

    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element= {<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='About' element={<About/>}/>
//       <Route path='Contact' element={<Contact/>}/>

//     </Route>
//   )
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
