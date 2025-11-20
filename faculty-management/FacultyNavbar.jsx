import React from "react";

const FacultyNavbar = ({ setView }) => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <nav
      style={{
        display: "flex",
        gap: "15px",
        marginBottom: "25px",
        padding: "12px 20px",
        background: "#0275d8",
        borderRadius: "8px",
      }}
    >
      <span
        style={linkStyle}
        onClick={() => setView("list")}
        onMouseOver={(e) => (e.target.style.background = "#025aa5")}
        onMouseOut={(e) => (e.target.style.background = "transparent")}
      >
        Faculty List
      </span>

      <span
        style={linkStyle}
        onClick={() => setView("register")}
        onMouseOver={(e) => (e.target.style.background = "#025aa5")}
        onMouseOut={(e) => (e.target.style.background = "transparent")}
      >
        Register Faculty
      </span>
    </nav>
  );
};

export default FacultyNavbar;
