
import './App.css';
import Navbar from './Navbar';
import ReminderInput from './ReminderInput';
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
      <body>
        <div className='inputs'>
          <ToDoInput />
          <ReminderInput />
        </div>
      </body>
    </div>
  );
}

export default App;
