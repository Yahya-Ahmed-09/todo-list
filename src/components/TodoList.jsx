import React, { useEffect, useState } from 'react'



const TodoList = ({
    todos,
    delTodos,
    editTodos,
    setTodos
}) => {

    const [editedIndex, setEditedIndex] = useState(null);
    const [editedname, setEditedname] = useState("")
    const [showFinished, setShowFinished] = useState(false);

    const handleEdit = (index) => {
        setEditedIndex(index);
        setEditedname(todos[index].showTodo.input)

    }

    const handleSaveEdit = (index) => {
        editTodos(editedname, index);
        setEditedIndex(null);
        setEditedname("");
    };

    const handleCancelEdit = () => {
        setEditedIndex(null);
        setEditedname("");
    }

    const handleCheckboxChange = (e) => {
        let id = e.target.name;
        let index = todos.findIndex(item=>{
            return item.id === id
        })
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        console.log(newTodos)
        setTodos(newTodos);
      };

      const toggleFinished = (e)=>{
        setShowFinished(!showFinished);
      }
      


    return (
        <>
            <div className='todo-list-container'>
                <div className="todo-list">
                    <h1 className='text-3xl font-bold text-center py-5'>Task Todo</h1>
                    <div className="todo-inputs flex gap-4">
                    <input type="checkbox" name="" id="" checked={showFinished} onChange={toggleFinished}/> Show Finished
                    </div>
                    <div className="todo-task-container py-4">
                        <div className="todo-task">
                            {todos.map((item, index) => 

                            ( (showFinished  || !item.isCompleted) &&
                                <div key={item.id} className="todo-task p-5 bg-blue-300 flex my-4 rounded-xl justify-between items-center">
                                    <div className="todos flex gap-4">
                                    <input type="checkbox"  name={item.id} id="" onChange={handleCheckboxChange} checked={item.isCompleted}/>
                                    <p className={`text-black font-semibold text-xl ${item.isCompleted?"line-through opacity-65" : ""}`}>
                                    
                                        {editedIndex === index ? (
                                            <>
                                            
                                            <input className='p-3 rounded-lg w-96' type="text" value={editedname} onChange={(e) => { setEditedname(e.target.value) }} />
                                            </>
                                            ) : (
                                            item.showTodo.input
                                        )}
                                    </p>
                                    </div>
                                    <div className="btns space-x-4">
                                        {editedIndex === index ? (<>


                                            <button onClick={() => handleSaveEdit(index)} className='bg-blue-500 text-white py-3 px-6 rounded-lg'>Save</button>
                                            <button onClick={handleCancelEdit} className='bg-blue-500 text-white py-3 px-6 rounded-lg'>Cancel</button>
                                        </>) :
                                            (<>   <button onClick={() => delTodos(item.id)} className='bg-blue-500 text-white py-3 px-6 rounded-lg'>Del</button>
                                                <button onClick={() => handleEdit(index)} className='bg-blue-500 text-white py-3 px-6 rounded-lg'>Edit</button>

                                            </>)}

                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default TodoList