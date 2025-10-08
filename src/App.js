// src/App.js
import React, { useState } from "react";
import Orchids from "./Orchids";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={
        darkMode
          ? "bg-dark text-light min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >
      <div className="container py-4">
        <Button variant={darkMode ? "light" : "dark"} onClick={toggleTheme}>
           {darkMode ? "Light" : "Dark"} Mode
        </Button>
        <h1 className="text-center my-4"> Orchid Collection </h1>
        <Orchids />
      </div>
    </div>
  );
}

export default App;
