import React, { useState } from 'react';
import "./navbar.css";
import { MdNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {

  const [dropdown, setDropdown] = useState(false);


  return (
    <nav className="navbar page-navbar">
      <div className="navbar-content">
        <div className="navbar-page-title">{title}</div>
        <div className="navbar-icons">
          <ul>
            <li>
              <MdNotifications />
            </li>
            <li className="dropdown">
              <button className="user-icon-btn" onClick={() => setDropdown(!dropdown)}>
                <FaUserCircle />
              </button>
        {dropdown &&  (<div className="dropdown-menu">
                <Link to="/logout" className="text-decoration-none dropdown-link">
                  Logout
                  <span><MdLogout id="logout-icon"/></span>
                </Link>
              </div>)}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
