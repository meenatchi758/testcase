import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/register" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>Register</Link>
      <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
    </nav>
  );
}
