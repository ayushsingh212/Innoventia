import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './My Components/Layout/Layout.jsx'
import Home from './My Components/Home/Home.jsx'
import Notes from './My Components/Notes/Notes.jsx'


const router = createHashRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout />}   >
      <Route path='' element={<Home />} />
      <Route path = 'notes' element = {<Notes/>}/>
      <Route path = 'YT-Cont' element = {<Notes/>}/>
      <Route path = 'College' element = {<Notes/>}/>
      <Route path = 'task' element = {<Notes/>}/>
    </Route>
  ),

)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}  />

  </StrictMode>
)
