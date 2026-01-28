// src/components/dashboard/ProgressOverview.jsx
import React from 'react';

function ProgressOverview({ progress, tasks }) {
  // 1. Calculate High Priority Progress
  const highPriorityTasks = tasks.filter(t => t.priority === 'high');
  const highPriorityDone = highPriorityTasks.filter(t => t.completed).length;
  const highPriorityProgress = highPriorityTasks.length > 0 
    ? Math.round((highPriorityDone / highPriorityTasks.length) * 100) 
    : 0;

  // 2. Calculate Task Velocity (Tasks done vs Total)
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* SECTION 1: OVERALL COMPLETION */}
      <div>
        <div style={labelRowStyle}>
          <span>Overall Completion</span>
          <span style={{ color: '#3b82f6' }}>{progress}%</span>
        </div>
        <div style={barBackgroundStyle}>
          <div style={{ 
            ...barFillStyle, 
            width: `${progress}%`, 
            backgroundColor: '#3b82f6' 
          }} />
        </div>
      </div>

      {/* SECTION 2: GRID FOR SPECIFIC METRICS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        
        {/* High Priority Tracker */}
        <div style={miniBoxStyle}>
          <span style={miniLabelStyle}>High Priority</span>
          <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px 0' }}>
            {highPriorityProgress}%
          </div>
          <div style={{ ...barBackgroundStyle, height: '4px' }}>
            <div style={{ 
              ...barFillStyle, 
              width: `${highPriorityProgress}%`, 
              backgroundColor: '#ef4444' 
            }} />
          </div>
        </div>

        {/* Efficiency Tracker */}
        <div style={miniBoxStyle}>
          <span style={miniLabelStyle}>Task Ratio</span>
          <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px 0' }}>
            {completed}/{total}
          </div>
          <span style={{ fontSize: '10px', color: '#6b7280' }}>Tasks Finished</span>
        </div>

      </div>
    </div>
  );
}

// --- Internal Styles ---
const labelRowStyle = { display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: '600', marginBottom: '8px' };
const barBackgroundStyle = { width: '100%', height: '8px', backgroundColor: '#f3f4f6', borderRadius: '10px', overflow: 'hidden' };
const barFillStyle = { height: '100%', borderRadius: '10px', transition: 'width 0.8s ease-in-out' };
const miniBoxStyle = { background: '#f9fafb', padding: '12px', borderRadius: '12px', border: '1px solid #f3f4f6' };
const miniLabelStyle = { fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' };

export default ProgressOverview;