import React, { useState } from 'react'
import TodoList from './TodoList'



const TodoForm = ({
    addTodos,
     todos,
     delTodos,
     editTodos,
     setTodos
    }) => {


    const [input, setInput ] = useState("")

    const handleGetInput =(e) =>{
        setInput (e.target.value);

    }
    const handleAddTodo =(e) =>{
        e.preventDefault();
        addTodos({input})
        setInput ("");
      }

  return (
    <>
    <div className="todo-wrapper bg-white w-2/4 p-8 rounded-2xl ">
    
        <div className="input-box flex justify-center gap-8">
            <input onChange={handleGetInput} value={input} className='border-blue-500 border-2 w-full rounded-xl px-3' type="text" placeholder='Enter your Today Task'/>
            <button onClick={handleAddTodo}  className='addbtn bg-blue-500 l p-3 px-5 rounded-xl text-white w-1/5'>Add</button>
        </div>
        <TodoList todos={todos} delTodos={delTodos} editTodos={editTodos} input={input} setInput={setInput} setTodos={setTodos} />
    </div>
    </>
  )
}

export default TodoForm