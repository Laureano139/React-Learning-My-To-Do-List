import { useState } from 'react';

export default function ReminderInput(){
    const [reminder, setReminder] = useState("");
    const [reminders, setReminders] = useState([]);
    return (
      <div className='todoAdd'>
        <h1>Add a reminder to the list</h1>
        <div className='todoInput'>
        <input 
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          type="text" 
          placeholder="Add a reminder" />
          <button className='addButton'>+</button>
        </div>
      </div>
    );
}