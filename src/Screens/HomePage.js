import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar.jsx";
import Banner from "../Resources/Banner.svg";
import Mexico from "../Resources/Mexico.svg";
import Guatemala from "../Resources/Guatemala.svg";
import ElSalvador from "../Resources/ElSalvador.svg";
import Honduras from "../Resources/Honduras.svg";
import Nicaragua from "../Resources/Nicaragua.svg";
import CostaRica from "../Resources/CostaRica.svg";
import Colombia from "../Resources/Colombia.svg";
import Venezuela from "../Resources/Venezuela.svg";
import Republic from "../Resources/RepDom.svg";
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
import "../estilos/HomeStyles.css";
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [paisSeleccionado, setPaisSeleccionado] = useState({
    nombre: "El Salvador",
    imagen: SvCountry,
    descripcion: "Paquetería puerta a puerta en toda la República de El Salvador.",
  });

  const [preloadedImages, setPreloadedImages] = useState({});

  const paises = [
    { nombre: "Mexico", imagen: Mexico, descripcion: "Paqueteria puerta a puerta en toda la Republica de Mexico" },
    {
      nombre: "Guatemala",
      imagen: Guatemala,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de Guatemala",
    },
    {
      nombre: "El Salvador",
      imagen: ElSalvador,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de El Salvador",
    },
    {
      nombre: "Honduras",
      imagen: Honduras,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de Honduras",
    },
    {
      nombre: "Nicaragua",
      imagen: Nicaragua,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de Nicaragua",
    },
    {
      nombre: "Costa rica",
      imagen: CostaRica,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de Costa Rica",
    },
  ];

  //Estos paises son los de la segunda linea que van centrados
  const paises2 = [
    {
      nombre: "Colombia",
      imagen: Colombia,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de Colombia",
    },
    {
      nombre: "Venezuela",
      imagen: Venezuela,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de Venezuela",
    },
    {
      nombre: "Republica Dominicana",
      imagen: Republic,
      descripcion: "Paqueteria puerta a puerta en toda Republica Dominicana",
    },
  ];

  const countryClasses = {
    Mexico: 'imagenMex',
    Guatemala: 'imagenGuat',
    'El Salvador': 'imagenSv',
    Honduras: 'imagenHond',
    Nicaragua: 'imagenNic',
    'Costa rica': 'imagenCosta',
    Colombia: 'imagenColm',
    Venezuela: 'imagenVenez',
    'Republica Dominicana': 'imagenRep',
  };

  const selectedCountryClass = countryClasses[paisSeleccionado.nombre];

  const handleClickPais = (pais) => {
    setPaisSeleccionado(pais);
  };

  const preloadImages = (imageArray) => {
    const images = {};
    imageArray.forEach((image) => {
      const img = new Image();
      img.src = image;
      images[image] = img;
    });
    return images;
  };

  useEffect(() => {
    const allImages = [
      Banner,
      Mexico,
      Guatemala,
      ElSalvador,
      Honduras,
      Nicaragua,
      CostaRica,
      Colombia,
      Venezuela,
      Republic,
      Aereo,
      LogoCaja,
      LogoVision,
      Mision,
      Terrestre,
      SvCountry,
      RowIcon
    ];
    setPreloadedImages(preloadImages(allImages));
  }, []);

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
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={preloadedImages[Banner]?.src || Banner} className="d-block w-100" alt="Banner" />
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
            {paises.map((pais, index) => (
              <div
                key={index}
                className="col text-center img-container"
                onClick={() => handleClickPais(pais)}
              >
                <img className="imagen" src={preloadedImages[pais.imagen]?.src || pais.imagen} alt={pais.nombre} />
                <div className="pt-3 pb-3 fw-bolder">{pais.nombre}</div>
              </div>
            ))}
          </div>
          <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-3 justify-content-center container">
            {paises2.map((pais, index) => (
              <div key={index} className="col text-center img-container" onClick={() => handleClickPais(pais)}>
                <img className="imagen" src={preloadedImages[pais.imagen]?.src || pais.imagen} alt="Colombia" />
                <div className="pt-3 pb-3 fw-bolder">{pais.nombre}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`container-fluid infoCountries ${selectedCountryClass}`}>
        <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 mt-5">
          <div className="col">
            <div className="circulo">
              <h1
                className={`text-center fw-bolder mb-1 mb-lg-5 mt-5 ${paisSeleccionado.nombre === 'Republica Dominicana' ? 'textoRep' : 'pt-4'}`}
                style={{ color: "#13103A" }}
              >
                {paisSeleccionado ? paisSeleccionado.nombre : ''}
              </h1>
              <img className="country" src={preloadedImages[paisSeleccionado.imagen]?.src || paisSeleccionado.imagen} alt={paisSeleccionado.nombre} />
              <p
                className="h4 mt-3 descript"
                style={{ textAlign: "justify", padding: "0 60px" }}
              >
                {paisSeleccionado.descripcion}
              </p>
              <p
                className="h4 fw-bold text-center"
                style={{ textAlign: "justify" }}
              >
                Tiempo de entrega
              </p>
              <p className="h4 text-center">3 - 4 Semanas</p>
              <p className="fw-bold mt-0 mt-lg-4 fst-italic h4 text-center">
                No se cobra por peso.
              </p>
            </div>
          </div>
          <div className="col position-relative text-center">
            <Link to="/detalles">
              <button
                type="button"
                className="buttonSizes fw-bold btn bg-white btn-lg position-absolute top-50 start-50 translate-middle"
              >
                Cotizar tamaños <img className="ms-3" alt="icono" src={preloadedImages[RowIcon]?.src || RowIcon} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container" id="Quienes-somos">
        <h1
          className="text-center fw-bolder mb-5 mt-5"
          style={{ color: "#13103A", fontSize: "60px" }}
        >
          Quienes Somos
        </h1>
        <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 mt-5">
          <div className="col">
            <img src={preloadedImages[LogoCaja]?.src || LogoCaja} className="img-fluid w-100" alt="..." />
          </div>
          <div className="col">
            <p className="h3 p-2" style={{ textAlign: "justify" }}>
              La Visión es Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velitLa Visión es Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velitLa Visión es Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velitLa Visión es Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
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
                  <p
                    className="h3 textoBanner"
                    style={{ textAlign: "justify" }}
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                  </p>
                </div>
                <div className="col">
                  <img
                    src={preloadedImages[Aereo]?.src || Aereo}
                    className="img-fluid w-100 imagenBanner"
                    alt="..."
                  />
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
                  <p
                    className="h3 textoBanner"
                    style={{ textAlign: "justify" }}
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                  </p>
                </div>
                <div className="col">
                  <img
                    src={preloadedImages[Terrestre]?.src || Terrestre}
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <svg
        viewBox="0 0 500 80"
        preserveAspectRatio="none"
        style={{ height: "10%", width: "100%" }}
      >
        <path
          d="M-1.41,20.23 C144.74,88.33 349.03,-3.44 503.67,27.14 L500.00,150.00 L-3.10,154.45 Z"
          style={{ stroke: "none", fill: "#6BDFFF" }}
        ></path>
      </svg>
      <div className="container-fluid">
        <div
          className="row text-center pb-5"
          style={{ backgroundColor: "#6BDFFF" }}
        >
          <div className="col-12 col-sm-6 container">
            <h1
              className="text-center text-lg-start fw-bolder p-2 txt-Vision"
              style={{ color: "#13103A" }}
            >
              Visión
            </h1>
            <p
              className="container h5"
              style={{ textAlign: "justify", color: "#414141" }}
            >
              Ser la compañía líder en servicios de envío de paquetería a Centroamérica, reconocida por nuestra confiabilidad, rapidez y compromiso con la satisfacción del cliente, facilitando la conexión entre personas y negocios a través de soluciones logísticas innovadoras y sostenibles.
            </p>
          </div>
          <div className="col-12 col-sm-3 text-start container">
            <img
              src={preloadedImages[LogoVision]?.src || LogoVision}
              className="img-fluid w-80 logoVision"
              alt="..."
            />
          </div>
        </div>
        <div
          className="row text-center pt-5 pb-5 "
          style={{ backgroundColor: "#85FFC8" }}
        >
          <div className="col-12 col-sm-3 text-end container">
            <img src={preloadedImages[Mision]?.src || Mision} className="img-fluid w-80 logoMision" alt="..." />
          </div>
          <div className="col-12 col-sm-6 container">
            <h1
              className="text-center text-lg-end fw-bolder p-2 txt-Mision"
              style={{ color: "#13103A" }}
            >
              Misión
            </h1>
            <p
              className="container h5"
              style={{ textAlign: "justify", color: "#414141" }}
            >
              Proveer servicios de envío de paquetería seguros, eficientes y accesibles a Centroamérica, superando las expectativas de nuestros clientes mediante tecnología avanzada, procesos optimizados y un servicio al cliente excepcional. Nos dedicamos a construir puentes entre comunidades, fomentando el crecimiento económico y el intercambio cultural en la región. Estas declaraciones reflejan un compromiso con la excelencia operativa, la innovación y el impacto positivo en las comunidades servidas, estableciendo una base sólida para el crecimiento y el éxito sostenible de la compañía.
            </p>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 40 500 100"
        preserveAspectRatio="none"
        style={{ height: "10%", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C156.04,122.88 283.01,9.39 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style={{ stroke: "none", fill: "#85FFC8" }}
        ></path>
      </svg>
      <Footer />
    </>
  );
}
