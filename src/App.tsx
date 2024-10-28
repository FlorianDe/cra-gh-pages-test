import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Outlet />
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/test">Go to test</Link>
      </header>
    </div>
  );
}

export default App;
