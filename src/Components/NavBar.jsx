import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-primary"
      style={{
        fontFamily: "Roboto, sans-serif",
        fontWeight: "Bold",
        fontSize: "Larger",
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
              <a
                className="nav-link  h1 mx-5"
                aria-current="page"
                href="/"
              >
                SERVICIOS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  h1 mx-5"
                aria-current="page"
                href="https://cbone.controlbox.net/cargopremier/cbone/app/rastreo/"
              >
                RASTREO
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  h1 mx-5"
                aria-current="page"
                href="/"
              >
                QUIENES SOMOS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link h1 mx-5"
                aria-current="page"
                href="/detalles"
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
