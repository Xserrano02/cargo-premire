import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTruck, FaCalculator, FaEnvelope } from "react-icons/fa";
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
          <Link
            to="/"
          >
            <img src={"https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/Logo_cargo-removebg.png?alt=media&token=8fc61d80-4c9b-4f81-a964-5a4a3c24b6f6"} alt="Logo" style={{ height: "60px" }} />
          </Link>
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
              <Link
                className="nav-link h1 mx-3 d-flex align-items-center"
                to="/detalles"
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
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link h1 mx-3 d-flex align-items-center"
                to="/contacto"
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
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
