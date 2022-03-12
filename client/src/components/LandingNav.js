import Logo from "../assets/img/Logo.svg";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg  text-uppercase fixed-top border"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <img src={Logo} className="nav-logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                to="/"
                className="nav-link py-3 px-0 px-lg-3 rounded font-weight-bold"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                to="/"
                className="nav-link py-3 px-0 px-lg-3 rounded font-weight-bold"
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                to="/login"
                className="nav-link py-3 px-0 px-lg-3 rounded font-weight-bold"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
