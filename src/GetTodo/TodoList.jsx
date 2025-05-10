import React, { useContext, useState } from 'react';
import { TodoContext } from '../Context/UseContext';

const TodoList = () => {
  const { todoList, setTodoList } = useContext(TodoContext);
  const [editi, setediti] = useState(null);

  const editable = (i) => {
    editi === i ? setediti(null) : setediti(i);
  };

  const dele = (deli) => {
    const updatedList = todoList.filter((_, i) => i !== deli);
    setTodoList(updatedList);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4 space-y-4">
      {todoList.length === 0 ? (
        <p className="text-center text-gray-500">No todos available</p>
      ) : (
        todoList.map((e, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <input
              type="text"
              value={e}
              onChange={(ev) => {
                const updatedList = [...todoList];
                updatedList[i] = ev.target.value;
                setTodoList(updatedList);
              }}
              readOnly={editi !== i}
              className={`flex-1 mr-2 px-3 py-2 border rounded-md focus:outline-none ${
                editi === i
                  ? 'border-blue-500 focus:ring-2 focus:ring-blue-300'
                  : 'border-gray-300 bg-gray-100 cursor-not-allowed'
              }`}
            />
            <div className="space-x-2">
              <button
                onClick={() => editable(i)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-3 py-1 rounded-md"
              >
                {editi !== i ? 'Edit' : 'Save'}
              </button>
              <button
                onClick={() => dele(i)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
