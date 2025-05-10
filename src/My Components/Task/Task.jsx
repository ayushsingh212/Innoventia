import React from 'react'
import TodoForm from '../../GetTodo/TodoForm'
import TodoList from '../../GetTodo/TodoList'

const Task = () => {
  return (
    <div className='w-screen h-screen bg-stone-600 flex content-center items-center flex-wrap'>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default Task
