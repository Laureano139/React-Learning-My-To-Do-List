import { useState } from 'react';

export default function ToDoInput(){
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    return (
      <div className='todoAdd'>
        <h1>Add a task to the To Do List</h1>
        <div className='todoInput'>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text" 
          placeholder="Add a task" />
          <button className='addButton'>+</button>
        </div>
      </div>
    );
}