import React, { useEffect } from "react";
import { createContext } from "react";


export  const TodoContext = createContext();



export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = React.useState('');
  const [todoList,setTodoList] = React.useState(()=>{
       let stor =  JSON.parse(localStorage.getItem('todoslist')) || []
       return stor
  })
  const addTodo = (newv) => {
        if(newv.trim())
        {  setTodoList((prev)=> [...prev,newv]);
         setTodo('');
        }
  }
useEffect(()=>{
  localStorage.setItem('todoslist',JSON.stringify(todoList))
},[todoList])
 const editTodo = (e,i)=>{

  setTodo(e)
  

 }  

    return  (
      <>
    <TodoContext.Provider value={{todo,setTodo,todoList,setTodoList,addTodo}}>
        {children}
    </TodoContext.Provider>
    </>
    )
  
}


