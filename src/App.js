
import './App.css';
import Navbar from './Navbar';
import ToDoInput from './ToDoInput';
import { useState } from 'react';

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