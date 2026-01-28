function Sidebar({currentPage, setCurrentPage}) {
    const itemStyle = (page) => ({
        marginBottom: "12px",
        cursor: "pointer",
        // page must be lowercase to match setCurrentPage calls
        color: currentPage === page ? "#60a5fa" : "white",
        fontWeight: currentPage === page ? "bold" : "normal",
        transition: "color 0.2s ease",
    });

    return (
        <div
            style={{
                width: "240px",
                background: "#111827",
                color: "white",
                padding: "20px",
                height: "100vh" // Ensures sidebar stretches to bottom
            }}
        >
            <h2 style={{ marginBottom: "24px" }}>StudyTrack</h2>
            
            {/* Changed "Tasks" to "tasks" below to match your App.jsx state */}
            <div style={itemStyle("dashboard")} onClick={() => setCurrentPage("dashboard")}>
                Dashboard
            </div>
            <div style={itemStyle("tasks")} onClick={() => setCurrentPage("tasks")}>
                Tasks
            </div>
            <div style={itemStyle("notes")} onClick={() => setCurrentPage("notes")}>
                Notes
            </div>
            <div style={itemStyle("diary")} onClick={() => setCurrentPage("diary")}>
                Diary
            </div>
            <div style={itemStyle("calendar")} onClick={() => setCurrentPage("calendar")}>
                Calendar
            </div>
            <div style={itemStyle("schedule")} onClick={() => setCurrentPage("schedule")}>
                Schedule
            </div>
        </div>
    );
}

export default Sidebar;