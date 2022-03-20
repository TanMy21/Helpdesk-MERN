import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import "./dashboard.css";
import { GoDashboard } from "react-icons/go";
import { RiTicket2Line } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo2 from "../../assets/img/Logo2.svg";
import { Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sidebarWidth, setSidebarWidth] = useState(0);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => {
      // dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  const changeWidth = () => {
    if (sidebarWidth === 0) {
      setSidebarWidth(1);
    } else {
      setSidebarWidth(0);
    }
    console.log(sidebarWidth);
  };

  // const onLogout = () => {
  //   dispatch(logout());
  //   dispatch(reset());
  //   navigate("/");
  // };

  return (
    <>
      <div className="wrapper">
        <div className={sidebarWidth ? "sidebar" : "sidebar-small"}>
          <div className="logo-area">
            <button className="hb-btn" onClick={changeWidth}>
              <GiHamburgerMenu id={sidebarWidth ? "hb-icon" : "hb-icon-small"} />
            </button>
            <div className={sidebarWidth ? "sidebar-logo" :"sidebar-logo-small"}></div>
          </div>
          <div className={sidebarWidth ? "sidebar-navigation" : "sidebar-navigation-small"}>
            <ul className="sidebar-nav-links">
              <li className={sidebarWidth ? "sidebar-nav-link" : "sidebar-nav-link-small"}>
                <Link to="/" className="text-decoration-none">
                  <div className={sidebarWidth ? "navlink-container" : "navlink-container-small"}>
                    <GoDashboard id={sidebarWidth ? "nav-icon" : "nav-icon-small"} />
                    <span id={sidebarWidth ? "nav-text" : "nav-text-small"}>Dashboard</span>
                  </div>
                </Link>
              </li>
              <li className={sidebarWidth ? "sidebar-nav-link" : "sidebar-nav-link-small"}>
                <Link to="/" className="text-decoration-none">
                  <div className={sidebarWidth ? "navlink-container" : "navlink-container-small"}>
                    <IoCreateOutline id={sidebarWidth ? "nav-icon" : "nav-icon-small"} />
                    <span id={sidebarWidth ? "nav-text" : "nav-text-small"}>New Ticket</span>
                  </div>
                </Link>
              </li>
              <li className={sidebarWidth ? "sidebar-nav-link" : "sidebar-nav-link-small"}>
                <Link to="/" className="text-decoration-none">
                  <div className={sidebarWidth ? "navlink-container" : "navlink-container-small"}>
                    <RiTicket2Line id={sidebarWidth ? "nav-icon" : "nav-icon-small"} />
                    <span id={sidebarWidth ? "nav-text" : "nav-text-small"}>All Tickets</span>
                  </div>
                </Link>
              </li>
              <li className={sidebarWidth ? "sidebar-nav-link" : "sidebar-nav-link-small"}>
                <Link to="/" className="text-decoration-none">
                  <div className={sidebarWidth ? "navlink-container" : "navlink-container-small"}>
                    <IoSettingsOutline id={sidebarWidth ? "nav-icon" : "nav-icon-small"} />
                    <span id={sidebarWidth ? "nav-text" : "nav-text-small"}>Settings</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-container">
          <nav className="page-navbar">
            <div className="navbar-content">
              <div className="navabr-page-title">TITLE</div>
            </div>
          </nav>
          <div className="main-content"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
