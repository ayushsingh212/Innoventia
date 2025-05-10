import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './My Components/Layout/Layout.jsx'
import Home from './My Components/Home/Home.jsx'
import Notes from './My Components/Notes/Notes.jsx'
import Ytcont from './My Components/Yt/Yt-cont.jsx'
import College from './My Components/College/College.jsx'
import { TodoProvider } from './Context/UseContext.jsx'
import TodoForm from './GetTodo/TodoForm.jsx'
import TodoList from './GetTodo/TodoList.jsx'
import Task from './My Components/Task/Task.jsx'


const router = createHashRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout />}   >
      <Route path='' element={<Home />} />
      <Route path = 'notes' element = {<Notes/>}/>
      <Route path = 'YT-Cont' element = {<Ytcont/>}/>
      <Route path = 'College' element = {<College/>}/>
      <Route path = 'task' element = {<Task/>}/>
    
    </Route>
  ),

)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TodoProvider>

    <RouterProvider router={router}   />

   </TodoProvider>


  </StrictMode>
)
