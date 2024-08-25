import React, { useState, useEffect } from 'react';

function ToDoInput() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newTasks = [...tasks, taskInput];
      setTasks(newTasks);
      setTaskInput('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="todoinputMainDiv">
      <h1 className="tasks-h1">Tasks</h1>
      <div className="todoInput">
        <input 
          type="text" 
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="addButton" onClick={addTask}>Add Task</button>
      </div>
      <ul className="todoList">
        {tasks.map((task, index) => (
          <li key={index} className="todoTaskAdded">
            <span>{task}</span>
            <button className="deleteButton" onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoInput;