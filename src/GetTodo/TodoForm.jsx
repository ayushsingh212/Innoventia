import React, { useEffect, useContext } from 'react'
import { TodoContext } from '../Context/UseContext'

const TodoForm = () => {
  const { todo, setTodo, todoList, addTodo } = useContext(TodoContext)

  useEffect(() => {
    localStorage.setItem('todoslist', JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Add a Task</h2>
      
      <div className="mb-4">
        <label htmlFor="todoname" className="block text-gray-700 font-medium mb-2">
          Enter your Task
        </label>
        <input
          id="todoname"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
          placeholder="like Workout 10 AM"
        />
      </div>

      <button
        onClick={() => addTodo(todo)}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Add Task
      </button>
    </div>
  )
}

export default TodoForm
