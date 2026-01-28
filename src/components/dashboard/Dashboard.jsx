// src/components/dashboard/Dashboard.jsx
import StatCard from "./StatCard";
import TodayTasks from "./TodayTasks";
import ProgressOverview from "./ProgressOverview";
import useDateTime from "../../hooks/useDateTime";
import { useTasks } from "../../context/TaskContext";

function Dashboard({ userName }) {
  const { greeting, fullDate } = useDateTime();
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div style={{ padding: "24px" }}>
      {/* HEADER SECTION */}
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ margin: 0 }}>{greeting}, {userName}!</h2>
        <p style={{ color: "#6b7280", marginTop: "4px" }}>{fullDate}</p>
      </div>

      {/* STATS ROW */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>
  <StatCard title="Total Tasks" value={total} color="#3b82f6" />      {/* Blue */}
  <StatCard title="Completed" value={completed} color="#10b981" />    {/* Green */}
  <StatCard title="Pending" value={pending} color="#f59e0b" />      {/* Orange */}
  <StatCard title="Progress" value={`${progress}%`} color="#8b5cf6" /> {/* Purple */}
</div>

      {/* MAIN CONTENT GRID */}
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "24px", alignItems: "start" }}>
        
        {/* LEFT COLUMN: Only Today's Tasks */}
        <div style={cardContainerStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ margin: 0 }}>Today's To-Do</h3>
            <span style={{ color: "#3b82f6", fontSize: "14px", cursor: "pointer" }}>View All</span>
          </div>
          <TodayTasks />
        </div>

        {/* RIGHT COLUMN: Progress Overview */}
        <div style={cardContainerStyle}>
          <h3 style={{ margin: "0 0 20px 0" }}>Progress Overview</h3>
          <ProgressOverview progress={progress} tasks={tasks} />
          <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
             <div style={miniStatsStyle}>
                <small style={{ color: '#6b7280' }}>Completed</small>
                <strong style={{ fontSize: '1.2rem' }}>{completed}</strong>
             </div>
             <div style={miniStatsStyle}>
                <small style={{ color: '#6b7280' }}>Remaining</small>
                <strong style={{ fontSize: '1.2rem' }}>{pending}</strong>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardContainerStyle = {
  background: "#fff",
  borderRadius: "16px",
  padding: "24px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  border: "1px solid #f3f4f6"
};

const miniStatsStyle = {
  flex: 1,
  background: "#f9fafb",
  padding: "15px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "5px"
};

export default Dashboard;