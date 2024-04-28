import React from "react";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({ backgroundColor = "white" }) => {
  const location = useLocation();

  const handleLinkClick = (section) => {
    if (location.pathname !== '/') {
      return `/#${section}`;
    }
    return `#${section}`;
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-primary"
      style={{
        fontFamily: "Roboto, sans-serif",
        fontWeight: "Bold",
        fontSize: "Larger",
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
                to={handleLinkClick("carouselExample")}
              >
                SERVICIOS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link  h1 mx-5"
                to={handleLinkClick("Rastreo")}
              >
                RASTREO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link  h1 mx-5"
                to={handleLinkClick("Quienes-somos")}
              >
                QUIENES SOMOS
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link  h1 mx-5"
                to={handleLinkClick("Quienes-somos")}
              >
                SOBRE NOSOTROS
              </Link>
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
