import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoDashboard } from "react-icons/go";
import { RiTicket2Line } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import "./sidebar.css";

const SidebarSmall = ({ changeWidth }) => {
  return (
    <div className="sidebar-container-small">
      <div className="col mt-2">
        <div className="row d-flex justify-content-center">
          <button className="btn-hb" onClick={changeWidth}>
            <GiHamburgerMenu className="small-hb-icon" />
          </button>
        </div>
        <div className="row nav-links">
          <ul>
            <li className="nav-links-icon">
              <Link to="/dashboard" id="nav-link">
                <div className="row d-flex justify-content-center">
                  <GoDashboard id="nav-icon" />
                </div>
                <div
                  className="row d-flex justify-content-center"
                  id="nav-text"
                >
                  Dashboard
                </div>
              </Link>
            </li>
            <li className="nav-links-icon">
              <Link to="/new-ticket" id="nav-link">
                <div className="row d-flex justify-content-center">
                  <IoCreateOutline id="nav-icon" />
                </div>
                <div
                  className="row d-flex justify-content-center"
                  id="nav-text"
                >
                  New Ticket
                </div>
              </Link>
            </li>
            <li className="nav-links-icon">
              <Link to="/all-tickets" id="nav-link">
                <div className="row d-flex justify-content-center">
                  <RiTicket2Line id="nav-icon" />
                </div>
                <div
                  className="row d-flex justify-content-center"
                  id="nav-text"
                >
                  All Tickets
                </div>
              </Link>
            </li>
            <li className="nav-links-icon">
              <Link to="/settings" id="nav-link">
                <div className="row d-flex justify-content-center">
                  <IoSettingsOutline id="nav-icon" />
                </div>
                <div
                  className="row d-flex justify-content-center"
                  id="nav-text"
                >
                  Settings
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarSmall;
