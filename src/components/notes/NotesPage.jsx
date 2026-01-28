// src/components/notes/NotesPage.jsx
import React, { useState } from 'react';

export default function NotesPage() {
  const [activeTab, setActiveTab] = useState('learning');

  return (
    <div style={pageWrapper}>
      {/* LEFT COLUMN: Editor & Title */}
      <div style={leftCol}>
        <div style={sectionCard}>
          <label style={labelStyle}>Note Title</label>
          <input type="text" placeholder="Untitled Note" style={titleInput} />
          
          <div style={buttonRow}>
            <button style={outlineBtn}>✨ AI Suggestions</button>
            <button style={outlineBtn}>🔗 Share</button>
            <button style={outlineBtn}>📥 Export</button>
          </div>
          
          <div style={buttonRow}>
            <button style={saveBtn}>💾 Save</button>
            <button style={outlineBtn}>⛶ Fullscreen</button>
          </div>

          <div style={editorContainer}>
            <h3 style={{ margin: '0 0 10px 0' }}>Note Editor</h3>
            <p style={subText}>Edit your AI-generated notes with rich text formatting</p>
            
            {/* Mock Toolbar */}
            <div style={toolbar}>
              <button style={toolBtn}><b>B</b></button>
              <button style={toolBtn}><i>I</i></button>
              <button style={toolBtn}><u>U</u></button>
              <button style={toolBtn}>H1</button>
              <button style={toolBtn}>H2</button>
              <button style={toolBtn}>List</button>
            </div>

            <textarea 
              placeholder="Your notes will appear here..." 
              style={mainTextArea}
            />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: AI Transcription & Insights */}
      <div style={rightCol}>
        {/* Recording Section */}
        <div style={sectionCard}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4>Recording & Transcription</h4>
            <span>↗</span>
          </div>
          <div style={recordBox}>
            <button style={recordBtn}>🎙 Start Recording</button>
          </div>
          <p style={subText}>Live Transcription</p>
          <div style={emptyState}>...</div>
        </div>

        {/* AI Tabs Section */}
        <div style={{ ...sectionCard, marginTop: '20px' }}>
          <div style={tabContainer}>
            {['Chat', 'Keywords', 'Learning Path', 'Materials'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                style={activeTab === tab.toLowerCase() ? activeTabBtn : tabBtn}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              📈 Recommended Learning Path
            </h4>
            <p style={subText}>AI-generated path based on your notes and keywords</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- CSS-in-JS STYLES ---
const pageWrapper = { display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px', padding: '24px', background: '#f9fafb', minHeight: '100vh' };
const leftCol = { display: 'flex', flexDirection: 'column', gap: '20px' };
const rightCol = { display: 'flex', flexDirection: 'column' };
const sectionCard = { background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb' };
const labelStyle = { fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', display: 'block' };
const titleInput = { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', background: '#f3f4f6', marginBottom: '16px' };
const buttonRow = { display: 'flex', gap: '10px', marginBottom: '16px' };
const saveBtn = { background: '#000', color: '#fff', padding: '8px 16px', borderRadius: '8px', border: 'none', fontWeight: 'bold' };
const outlineBtn = { background: '#fff', border: '1px solid #e5e7eb', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' };
const editorContainer = { marginTop: '20px', borderTop: '1px solid #f3f4f6', paddingTop: '20px' };
const subText = { color: '#6b7280', fontSize: '14px', margin: '4px 0' };
const toolbar = { display: 'flex', gap: '8px', background: '#f9fafb', padding: '10px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '12px' };
const toolBtn = { background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px' };
const mainTextArea = { width: '100%', minHeight: '300px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px', outline: 'none' };
const recordBox = { height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #f3f4f6', marginBottom: '10px' };
const recordBtn = { background: '#111827', color: 'white', padding: '12px 24px', borderRadius: '12px', border: 'none', display: 'flex', alignItems: 'center', gap: '8px' };
const emptyState = { height: '60px', background: '#f9fafb', borderRadius: '8px' };
const tabContainer = { display: 'flex', background: '#f3f4f6', padding: '4px', borderRadius: '12px', gap: '4px' };
const tabBtn = { flex: 1, padding: '8px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '13px', borderRadius: '8px' };
const activeTabBtn = { ...tabBtn, background: '#fff', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' };