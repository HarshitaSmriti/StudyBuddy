// src/components/dashboard/StatCard.jsx
function StatCard({ title, value, color = "#3b82f6" }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: `1px solid #f3f4f6`,
        boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
      }}
    >
      <div>
        <p style={{ color: "#6b7280", marginBottom: "6px", fontSize: "14px" }}>
          {title}
        </p>
        <h2 style={{ margin: 0, color: "#111827" }}>{value}</h2>
      </div>

      {/* This box now changes color based on the prop */}
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          background: color, // Dynamic color
          opacity: 0.2,      // Makes it a soft light version of the color
        }}
      />
    </div>
  );
}

export default StatCard;