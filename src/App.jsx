import React, { useRef, useState } from 'react'
import TodoForm from './components/TodoForm'
import { v4 as uuidv4 } from 'uuid';
import '../src/App.css' 

function App() {
  const [todos, setTodos] = useState([]);

  const delTodos =(index) => {
    const deletedTodos = [...todos];
    deletedTodos.splice(index, 1)
    setTodos(deletedTodos);
  }

  const editTodos = (editedInput, index) =>{
    const updateTodos = [...todos];
    updateTodos[index] ={
      ...updateTodos[index], // Keep the existing properties
    showTodo: { input:editedInput },
    }
    setTodos(updateTodos);
  }



  const addTodos = (showTodo) => {
    setTodos([...todos, { showTodo, isCompleted: false, id: uuidv4() }])
  }

  return (
    <>
      <div className="container bg-blue-600 w-full min-h-dvh flex justify-center items-center flex-col">
        <h1 className='text-6xl font-bold text-center py-5 text-white'>Todo List</h1>

        <TodoForm addTodos={addTodos} todos={todos} delTodos={delTodos} editTodos={editTodos} setTodos={setTodos} />

      </div>
    </>
  )
}

export default App
