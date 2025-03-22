import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/mission">Mission Information</a></li>
          <li className="nav-item"><a href="/simulation">Simulation</a></li>
        </ul>
      </nav>
    </header>
  );
}