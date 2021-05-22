import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        Cool Product
      </Link>
      <ul className="nav-items">
        <Link className="nav-item" to="/pricing">
          Pricing
        </Link>
        <Link className="nav-item">Docs</Link>
        <Link className="nav-item link-button">Log in</Link>
        <Link className="nav-item link-button link-button-primary">
          Get Started For Free
        </Link>
      </ul>
    </nav>
  );
}
