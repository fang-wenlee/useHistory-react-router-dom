import React from "react";
import "./../styles.css";
import { Link } from "react-router-dom";
const linkStyle = {
  color: "white",
  textDecoration: "none"
};

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/controltask" style={linkStyle}>
          {" "}
          <li>Control Center</li>
        </Link>
        <Link to="/patch" style={linkStyle}>
          {" "}
          <li>PATCH</li>
        </Link>
        <Link to="/posttask" style={linkStyle}>
          {" "}
          <li>POSTTAKS</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
