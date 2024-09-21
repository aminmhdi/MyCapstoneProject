import React from "react";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AppNavbar = ({ title }) => {
  let isUserLoggedIn = sessionStorage.getItem("user") != null;
  let navigate = useNavigate();

  let handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="md" className="px-4 mb-4">
      <Navbar.Brand className="pe-4">
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faFile} /> {title}
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
        {isUserLoggedIn && (
          <Link
            to={"javascript:void(0)"}
            className="nav-link"
            onClick={handleLogout}
          >
            <span className="me-1">
              <FontAwesomeIcon icon={faSignOut} />
            </span>
            Logout
          </Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
