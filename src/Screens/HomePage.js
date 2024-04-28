import React from "react";
import NavBar from "../Components/NavBar.jsx";
import Banner from "../Resources/Banner.svg";
import Mexico from "../Resources/Mexico.svg";
import Guatemala from "../Resources/Guatemala.png";
import ElSalvador from "../Resources/ElSalvador.png";
import Honduras from "../Resources/Honduras.png";
import Nicaragua from "../Resources/Nicaragua.png";
import CostaRica from "../Resources/CostaRica.png";
import Colombia from "../Resources/Colombia.png";
import Venezuela from "../Resources/Venezuela.png";
import Republic from "../Resources/RepublicaDom.png";
import BannerSV from "../Resources/BannerSV.svg";
import Aereo from "../Resources/Areo.svg";
import LogoCaja from "../Resources/logo cajita 1.svg";
import LogoVision from "../Resources/Visionsvg.svg";
import Mision from "../Resources/Mision.svg";
import Terrestre from "../Resources/Terrestre.svg";
import SvCountry from "../Resources/SvCountry.svg";
import RowIcon from "../Resources/RowIcon.svg";
import Footer from "./helpers/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../estilos/HomeStyles.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function HomePage() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  

  return (
    <>
      <div className="container">
        <NavBar />
        <div className="row justify-content-center align-items-center mb-5">
          <div className="col-lg-8">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner" i>
                <div className="carousel-item active">
                  <img src={Banner} className="d-block w-100" alt="Banner" />
                  <h3 className="text-center" style={{ color: "#13103A" }}>
                    ¡Paqueteria puerta a puerta!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <h1
            className="text-center fw-bolder mb-5"
            style={{ color: "#13103A", fontSize: "60px" }}
          >
            Paises Destino
          </h1>
          <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-3">
            <div className="col text-center img-container">
              <img className="imagen" src={Mexico} alt="Mexico" />
              <div className="p-3 fw-bolder">Mexico</div>
            </div>
            <div className="col text-center img-container">
              <img className="imagen" src={Guatemala} alt="Guatemala" />
              <div className="p-3 fw-bolder">Guatemala</div>
            </div>
            <div className="col text-center img-container">
              <img className="imagen" src={ElSalvador} alt="El Salvador" />
              <div className="pt-3 fw-bolder">El Salvador</div>
            </div>
            <div className="col text-center img-container">
              <img className="imagen" src={Honduras} alt="Honduras" />
              <div className="p-3 fw-bolder">Honduras</div>
            </div>
            <div className="col text-center img-container">
              <img className="imagen" src={Nicaragua} alt="Nicaragua" />
              <div className="p-3 fw-bolder">Nicaragua</div>
            </div>
            <div className="col text-center img-container">
              <img className="imagen" src={CostaRica} alt="Costa Rica" />
              <div className="pt-3 fw-bolder">Costa Rica</div>
            </div>
          </div>
          <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-3 justify-content-center container">
            <div className="col text-center img-container">
              <img className="imagen" src={Colombia} alt="Colombia" />
              <div className="p-3 fw-bolder">Colombia</div>
            </div>
            <div className="col text-center img-container">
              <img className="imagen" src={Venezuela} alt="Venezuela" />
              <div className="p-3 fw-bolder">Venezuela</div>
            </div>
            <div className="col text-center img-container">
              <img className="imagen" src={Republic} alt="Republica Dominicana" />
              <div className="pt-3 pb-3 fw-bolder">Republica Dominicana</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid infoElSalvador">
        <div className="row  mt-5">
          <div className="col">
            <div className="circulo">
              <h1
                className="text-center fw-bolder mb-5 mt-5 pt-4"
                style={{ color: "#13103A" }}
              >
                El Salvador
              </h1>
              <img className="country" src={SvCountry} alt="El Salvador" />
              <p className="h4 mt-3" style={{ textAlign: "justify", padding:"0 60px" }}>
                Paqueteria puerta a puerta en
                toda la Republica de El Salvador
              </p>
              <p className="h4 fw-bold text-center" style={{ textAlign: "justify" }}>
                Tiempo de entrega
              </p>
              <p className="h4 text-center">
              3 - 4 Semanas
              </p>
              <p class="fw-bold mt-4 fst-italic h4 text-center">No se cobra por peso.</p>
            </div>
          </div>
          <div className="col position-relative text-center">
            <button type="button" class="fw-bold btn bg-white btn-lg position-absolute top-50 start-50 translate-middle">Cotizar tamaños <img className="ms-3" src={RowIcon}/></button>
          </div>
        </div>
      </div>
      <div className="container " id="Quienes-somos">
        <h1
          className="text-center fw-bolder mb-5 mt-5"
          style={{ color: "#13103A", fontSize: "60px" }}
        >
          Quienes Somos
        </h1>
        <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 mt-5">
          <div className="col">
            <img src={LogoCaja} className="img-fluid w-100" alt="..." />
          </div>
          <div className="col">
            <p className="h3 p-2" style={{ textAlign: "justify" }}>
              La Visión es Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velitLa
              Visión es Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velitLa
              Visión es Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velitLa
              Visión es Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velit
            </p>
          </div>
        </div>
        <h1
          className="text-center fw-bolder mb-5 mt-5"
          style={{ color: "#13103A", fontSize: "60px" }}
        >
          Paqueteria
        </h1>
      </div>

      <div
        id="carouselExample"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 mt-5">
                <div className="col">
                  <h1
                    className="text-center fw-bolder mb-5 mt-5"
                    style={{ color: "#13103A" }}
                  >
                    Aereo
                  </h1>
                  <p className="h3 textoBanner" style={{ textAlign: "justify" }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit Amet
                    minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit
                  </p>
                </div>
                <div className="col">
                  <img src={Aereo} className="img-fluid w-100 imagenBanner" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 mt-5">
                <div className="col">
                  <h1
                    className="text-center fw-bolder mb-5 mt-5"
                    style={{ color: "#13103A" }}
                  >
                    Terrestre
                  </h1>
                  <p className="h3 textoBanner" style={{ textAlign: "justify" }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit Amet
                    minim mollit non deserunt ullamco est sit aliqua dolor do
                    amet sint. Velit officia consequat duis enim velit
                  </p>
                </div>
                <div className="col">
                  <img
                    src={Terrestre}
                    className="img-fluid w-100 imagenBanner"
                    alt="Banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div>
        <div style={{ height: "150px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-1.41,20.23 C144.74,88.33 349.03,-3.44 503.67,27.14 L500.00,150.00 L-3.10,154.45 Z"
              style={{ stroke: "none", fill: "#6BDFFF" }}
            ></path>
          </svg>
        </div>
        <div
          className="row text-center pb-5"
          style={{ backgroundColor: "#6BDFFF" }}
        >
          <div className="col-6 container">
            <h1
              className="text-start fw-bolder p-2"
              style={{ color: "#13103A" }}
            >
              Visión
            </h1>
            <p
              className="container h5"
              style={{ textAlign: "justify", color: "#414141" }}
            >
              La Visión es Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velitLa
              Visión es Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velitLa
              Visión es Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velitLa
              Visión es Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velit
            </p>
          </div>
          <div className="col-3 text-start container">
            <img src={LogoVision} className="img-fluid w-80" alt="..." />
          </div>
        </div>
        <div
          className="row text-center pt-5 pb-5 "
          style={{ backgroundColor: "#85FFC8" }}
        >
          <div className="col-3 text-end container">
            <img src={Mision} className="img-fluid w-80" alt="..." />
          </div>
          <div className="col-6 container">
            <h1 className="text-end fw-bolder p-2" style={{ color: "#13103A" }}>
              Misión
            </h1>
            <p
              className="container h5"
              style={{ textAlign: "justify", color: "#414141" }}
            >
              La Visión es Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velitLa
              Visión es Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velitLa
              Visión es Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velitLa
              Visión es Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim velit
            </p>
          </div>
        </div>
        <div style={{ height: "150px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C156.04,122.88 283.01,9.39 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "#85FFC8" }}
            ></path>
          </svg>
        </div>
      </div>
      <Footer/>
    </>
    
  );
}
