import React, { useState } from 'react';
import { useTasks } from '../../context/TaskContext';

export default function AddTask() {
  const { addTask } = useTasks();
  
  // State for all three pieces of information
  const [title, setTitle] = useState('');
  const [due, setDue] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!title) return alert("Please enter a task name!");
    if (!due) return alert("Please choose a due time!");

    // Sending all 3 pieces to your Context
    addTask({ title, due, priority });

    // Resetting the form
    setTitle('');
    setDue('');
    setPriority('medium');
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ marginTop: 0, marginBottom: '20px', color: '#111827' }}>✨ Create New Task</h3>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column", gap: '20px' }}>
        
        {/* 1. TASK TITLE SECTION */}
        <div>
          <label style={labelStyle}>What is the task?</label>
          <input 
            type="text" 
            placeholder="e.g., Complete Assignment" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          {/* 2. DUE TIME SECTION */}
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>When is it due?</label>
            <input 
              type="time" 
              value={due}
              onChange={(e) => setDue(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* 3. PRIORITY SECTION */}
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Set Priority</label>
            <select 
              value={priority} 
              onChange={(e) => setPriority(e.target.value)}
              style={inputStyle}
            >
              <option value="high">🔴 High Priority</option>
              <option value="medium">🟡 Medium</option>
              <option value="low">🟢 Low</option>
            </select>
          </div>
        </div>

        <button type="submit" style={buttonStyle}>
          Add to Schedule
        </button>
      </form>
    </div>
  );
}

// --- STYLING ---
const containerStyle = {
  background: '#ffffff',
  padding: '24px',
  borderRadius: '16px',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  border: '1px solid #f3f4f6'
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: '600',
  color: '#4b5563',
  marginBottom: '6px'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  fontSize: '14px',
  boxSizing: 'border-box', // Crucial to keep inputs inside the box
  outline: 'none'
};

const buttonStyle = {
  width: '100%',
  padding: '14px',
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '10px'
};