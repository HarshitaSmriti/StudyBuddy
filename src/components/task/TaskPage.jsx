// src/components/task/TaskPage.jsx
import React from 'react';
// Go up one level (..) to /components/, then into /dashboard/
import AddTask from "../dashboard/AddTask";
import TodayTasks from "../dashboard/TodayTasks";

export default function TasksPage() {
  return (
    <div style={{ padding: "24px" }}>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ margin: 0 }}>Task Management</h2>
        <p style={{ color: "#6b7280" }}>Add new tasks and manage your schedule</p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gap: "24px", 
        alignItems: "start" 
      }}>
        {/* LEFT: The User Input Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <AddTask />
        </div>

        {/* RIGHT: Live Preview of all tasks */}
        <div style={{ 
          background: "#fff", 
          padding: "24px", 
          borderRadius: "16px", 
          border: "1px solid #f3f4f6",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
        }}>
          <h3 style={{ marginTop: 0, marginBottom: "20px" }}>Active To-Do</h3>
          <TodayTasks />
        </div>
      </div>
    </div>
  );
}