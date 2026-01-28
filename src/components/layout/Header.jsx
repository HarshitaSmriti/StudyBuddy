import useDateTime from "../../hooks/useDateTime";

function Header({ currentPage, setCurrentPage, userName }) {
  const { dateLabel } = useDateTime(); // Get the short date (Jan 27)

  return (
    <header
      style={{
        height: "64px",
        background: "#0c0c0b",
        color: "#ce9c37",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        borderBottom: "1px solid #222"
      }}
    >
      <h3 style={{ margin: 0 }}>StudyPlanner</h3>

      <div style={{ display: "flex", gap: "16px" }}>
        <button
          onClick={() => setCurrentPage("dashboard")}
          style={{
            background: "none",
            border: "none",
            color: currentPage === "dashboard" ? "#ce9c37" : "beige",
            cursor: "pointer",
            fontWeight: currentPage === "dashboard" ? "bold" : "normal"
          }}
        >
          Dashboard
        </button>
      </div>

      {/* This container stacks harshita and the date perfectly */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "flex-end" 
      }}>
        <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{userName}</span>
        <div style={{
          background: "#1e1e1e", // Darker badge to fit the theme
          color: "white",
          padding: "2px 8px",
          borderRadius: "4px",
          fontSize: "11px",
          marginTop: "2px",
          border: "1px solid #333"
        }}>
          Today: {dateLabel}
        </div>
      </div>
    </header>
  );
}

export default Header;