import "./navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import Dropdown from "../Dropdown/Dropdown";
import NewDropdown from "../NewDropdown/NewDropdown";
import Notification from "../NotificationDropdown/NotificationDropdown";
import { Link } from "react-router-dom";

const Navbar = ({ title, subTitle, titleLink }) => {
  console.log(titleLink);

  return (
    <nav className="navbar page-navbar">
      <div className="navbar-content">
        <div className="navbar-page-title">
          {title}
          {subTitle}
        </div>
        <div className="navbar-icons">
          <ul className="navbar-icons-list">
            <li>
              <NewDropdown />
            </li>
            <li>
              <BiSearchAlt2 />
            </li>
            <li>
              <Notification />
            </li>
            <li className="dropdown">
              <Dropdown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
