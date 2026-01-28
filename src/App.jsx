import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import UserSetup from "./components/user/UserSetup";
// Fixed import path: assuming src/task/TasksPage.jsx
import TasksPage from "./components/task/TaskPage";
import NotesPage from "./components/notes/NotesPage";
function App() {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName")
  );

  const [currentPage, setCurrentPage] = useState("dashboard");

  // If name not set, show setup screen
  if (!userName) {
    return <UserSetup onSave={setUserName} />;
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        userName={userName}
      />
      
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        
        <main
          style={{
            flex: 1,
            background: "#f9fafb", // Added missing #
            overflowY: "auto",
          }}
        >
          {/* Conditional Rendering Logic */}
          {currentPage === "dashboard" && <Dashboard userName={userName} />}
          {currentPage === "tasks" && <TasksPage />}
          {currentPage === "notes" && <NotesPage/>}
          </main>
      </div>
    </div>
  );
}

export default App;