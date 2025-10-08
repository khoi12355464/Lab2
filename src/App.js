// src/App.js
import React, { useState } from "react";
import Orchids from "./Orchids";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./AuthProvider";
import Dashboard from "./Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <AuthProvider>
      <div className={darkMode ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
        <div className="container py-3">
          {/* Header: left = dark mode + login, center = title, right = placeholder */}
          <div className="d-flex align-items-center justify-content-between">
            {/* Left group: Dark mode button + Login/Welcome */}
            <div className="d-flex align-items-center gap-2">
              <Button variant={darkMode ? "light" : "dark"} onClick={toggleTheme} size="sm">
                {darkMode ? "Light" : "Dark"} Mode
              </Button>

              {/* Dashboard (login/logout) nằm ngay bên cạnh nút Dark/Light */}
              <Dashboard />
            </div>

            {/* Center title */}
            <h1 className="mx-auto text-center mb-0">Orchid Collection</h1>

            {/* Right: giữ khoảng trống để title căn giữa đẹp hơn */}
            <div style={{ width: 170 }} /> {/* điều chỉnh nếu cần */}
          </div>

          {/* Nội dung chính */}
          <div className="mt-4">
            <Orchids />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
