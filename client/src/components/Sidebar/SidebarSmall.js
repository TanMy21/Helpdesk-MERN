import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoDashboard } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import { RiTicket2Line } from "react-icons/ri";
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
            <li>
              <Link to="/dashboard" className="text-decoration-none">
                <div className="nav-link">
                  <div className="row d-flex justify-content-center">
                    <GoDashboard id="nav-icon" />
                  </div>
                  <div
                    className="row d-flex justify-content-center"
                    id="nav-text"
                  >
                    Dashboard
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-decoration-none">
                <div className="nav-link">
                  <div className="row d-flex justify-content-center">
                    <IoCreateOutline id="nav-icon" />
                  </div>
                  <div
                    className="row d-flex justify-content-center"
                    id="nav-text"
                  >
                    NewTicket
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-decoration-none">
                <div className="nav-link">
                  <div className="row d-flex justify-content-center">
                    <RiTicket2Line id="nav-icon" />
                  </div>
                  <div
                    className="row d-flex justify-content-center"
                    id="nav-text"
                  >
                    AllTickets
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-decoration-none">
                <div className="nav-link">
                  <div className="row d-flex justify-content-center">
                    <IoSettingsOutline id="nav-icon" />
                  </div>
                  <div
                    className="row d-flex justify-content-center"
                    id="nav-text"
                  >
                    Settings
                  </div>
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
