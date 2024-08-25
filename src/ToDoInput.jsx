import { useState } from 'react';

export default function ToDoInput(){
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmition = (e) => {
    e.preventDefault();
  
    setTodos((currentToDos) => {
      return [...currentToDos, { id: crypto.randomUUID(), title: input }];
    });

    setInput("");
  }

  const handleDelete = (id) => {
    setTodos((currentToDos) => {
      return currentToDos.filter(todo => todo.id !== id);
    });
  }

    return (
      <div className='todoinputMainDiv'>
          <form onSubmit={handleSubmition} className='todoAdd'>
            <h1>Add a task to the To Do List</h1>
            <div className='todoInput'>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Add a task" />
              <button className='addButton'>+</button>
            </div>
          </form>
          <div className='todoslist'>
            <h1 className='tasks-h1'>Tasks</h1>
            <ul className='todoList'>
              {todos.map((todo) => (
                <li key={todo.id} className='todoTaskAdded'>
                  <label>{todo.title}</label>
                  <button 
                    className='deleteButton' 
                    onClick={() => handleDelete(todo.id)}
                  >X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
    );
}