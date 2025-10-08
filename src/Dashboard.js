// src/Dashboard.js
import React from "react";
import { useAuth } from "./useAuth";

const Dashboard = () => {
  const { user, login, logout } = useAuth();

  const linkStyle = {
    color: "inherit",
    textDecoration: "underline",
    cursor: "pointer",
  };

  return (
    <div className="d-flex align-items-center">
      {user ? (
        <>
          <span className="me-2">Welcome, <strong>{user.name}</strong></span>
          <span style={linkStyle} onClick={logout}>
            Logout
          </span>
        </>
      ) : (
        <>
          <span className="me-2">Log in as Aaron</span>
          <span style={linkStyle} onClick={() => login("Aaron")}>
            Login
          </span>
        </>
      )}
    </div>
  );
};

export default Dashboard;
