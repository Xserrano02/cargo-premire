import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({ backgroundColor = "white" }) => {

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-primary"
      style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: "bold",
        fontSize: "larger",
        backgroundColor,
      }}
    >
      <div className="container-fluid mx-auto mt-4 mb-4">
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link  h1 mx-5"
                to="/"
                style={{
                  color: "#52465e",
                  fontsize: "15px",
                  fontweight: "600",
                  lineheight: 1
                }}
              >
                INICIO
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link  h1 mx-5"
                aria-current="page"
                to="/rastreo"
                style={{
                  color: "#52465e",
                  fontsize: "15px",
                  fontweight: "600",
                  lineheight: 1
                }}
              >
                RASTREO
              </Link>
            </li>

            <li className="nav-item">
              <a
                className="nav-link h1 mx-5"
                aria-current="page"
                href="/detalles"
                style={{
                  color: "#52465e",
                  fontsize: "15px",
                  fontweight: "600",
                  lineheight: 1
                }}
              >
                COTIZAR ENVIO
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link h1 mx-5"
                aria-current="page"
                href="/contacto"
                style={{
                  color: "#52465e",
                  fontsize: "15px",
                  fontweight: "600",
                  lineheight: 1
                }}
              >
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
