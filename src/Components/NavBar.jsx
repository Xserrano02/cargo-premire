import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTruck, FaCalculator, FaEnvelope } from "react-icons/fa";
import logo from '../Resources/Logo_cargo-removebg.png';
import '../estilos/Navbar.css';

const NavBar = ({ backgroundColor = "white" }) => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: "bold",
        fontSize: "larger",
        backgroundColor,
        padding: "15px 20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container-fluid d-flex justify-content-between">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" style={{ height: "60px"}} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link h1 mx-3 d-flex align-items-center"
                to="/"
                style={{
                  color: "#52465e",
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: 1,
                  position: "relative"
                }}
              >
                <FaHome className="me-2" />
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link h1 mx-3 d-flex align-items-center"
                to="/rastreo"
                style={{
                  color: "#52465e",
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: 1,
                  position: "relative"
                }}
              >
                <FaTruck className="me-2" />
                RASTREO
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link h1 mx-3 d-flex align-items-center"
                href="/detalles"
                style={{
                  color: "#52465e",
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: 1,
                  position: "relative"
                }}
              >
                <FaCalculator className="me-2" />
                COTIZAR ENVÍO
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link h1 mx-3 d-flex align-items-center"
                href="/contacto"
                style={{
                  color: "#52465e",
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: 1,
                  position: "relative"
                }}
              >
                <FaEnvelope className="me-2" />
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
