
import './App.css';
import Navbar from './Navbar';
import ToDoInput from './ToDoInput';
import { useState } from 'react';

// todos > 0 ? <TodosListCard /> : null
// reminders > 0 ? <ReminderListCard /> : null

function App() {

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className='inputs'>
        <ToDoInput />
      </div>
    </div>
  );
}

export default App;