import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header1">
      <h1>Curly Notes</h1>
      <div>
        <Link to="/login">
          <button className="secondary-button">Log in</button>
        </Link>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
