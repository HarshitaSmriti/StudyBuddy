import { useTasks } from "../../context/TaskContext";

function TaskItem({ task }) {
  const { toggleTask } = useTasks();

  const deadline = new Date(task.deadline);
  const now = new Date();
  const diffMs = deadline - now;

  let timeLeft = "Overdue";

  if (diffMs > 0) {
    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      timeLeft = `Due: ${days} day(s) left`;
    } else if (hours > 0) {
      timeLeft = `Due: ${hours} hour(s) left`;
    } else {
      timeLeft = `Due: ${minutes} minute(s) left`;
    }
  }

  // Matching the specific colors from your reference screenshot
  const priorityStyles = {
    high: { bg: "#fee2e2", text: "#ef4444" },
    medium: { bg: "#fef3c7", text: "#f59e0b" },
    low: { bg: "#dcfce7", text: "#10b981" },
  };

  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between",
      background: "#fff", 
      padding: "12px 16px", 
      borderRadius: "12px",
      marginBottom: "8px",
      border: "1px solid #f3f4f6"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          style={{ width: "18px", height: "18px", cursor: "pointer" }}
        />
        
        <div>
          <div style={{ 
            fontWeight: "500", 
            fontSize: "14px",
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "#9ca3af" : "#1f2937"
          }}>
            {task.title}
          </div>
          <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "2px" }}>
             {timeLeft}
          </div>
        </div>
      </div>

      <span style={{ 
        background: priorityStyles[task.priority].bg, 
        color: priorityStyles[task.priority].text,
        padding: "4px 10px", 
        borderRadius: "6px",
        fontSize: "11px",
        fontWeight: "600",
        textTransform: "lowercase"
      }}>
        {task.priority}
      </span>
    </div>
  );
}

export default TaskItem;