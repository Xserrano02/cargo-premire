import React, { useState, useEffect, useRef } from "react";
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
import Maritimo from "../Resources/maritimo 1.jpg";
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
import { motion } from "framer-motion";
import CarouselHome from "../Components/CarouselHome.jsx";

export default function HomePage() {
  const [paisSeleccionado, setPaisSeleccionado] = useState({
    nombre: "El Salvador",
    imagen: SvCountry,
    descripcion: "Paquetería puerta a puerta en toda la República de El Salvador.",
    TipoTransporte: "Aereo y Maritimo",
    tiempo:"3 a 4 semanas",
    cobro: "No se cobra por peso",
  });
  const destinationRef = useRef(null);
  const [preloadedImages, setPreloadedImages] = useState({});
  const [animationPlayed, setAnimationPlayed] = useState({
    top: false,
    middle: false,
    bottom: false
  });
  console.log(animationPlayed)

  const paises = [
    { nombre: "Mexico", 
      imagen: Mexico,
      descripcion: "Paqueteria en toda la Republica Mexicana", 
      TipoTransporte:"Terrestre",
      tiempo:"10 a 15 dias",
    },
    {
      nombre: "El Salvador",
      imagen: ElSalvador,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de El Salvador",
      TipoTransporte: "Aereo y Maritimo",
      cobro: "No se cobra por peso",
      tiempo:"3 a 4 semanas",
    },
    {
      nombre: "Guatemala",
      imagen: Guatemala,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de Guatemala",
      TipoTransporte: "Maritimo",
      tiempo:"3 a 4 semanas",
      cobro: "No se cobra por peso"
    },
    {
      nombre: "Honduras",
      imagen: Honduras,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de Honduras",
      TipoTransporte: "Maritimo",
      cobro: "No se cobra por peso",
      tiempo:"3 a 4 semanas",
    },
    {
      nombre: "Nicaragua",
      imagen: Nicaragua,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de Nicaragua",
      TipoTransporte: "Maritimo",
      cobro: "No se cobra por peso",
      tiempo:"4 a 6 semanas",
    },
    {
      nombre: "Costa rica",
      imagen: CostaRica,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de Costa Rica",
      TipoTransporte: "Maritimo",
      cobro: "No se cobra por peso",
      tiempo:"4 a 6 semanas",
    },
  ];

  const paises2 = [
    {
      nombre: "Colombia",
      imagen: Colombia,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de Colombia",
      TipoTransporte: "Maritimo",
      cobro: "No se cobra por peso",
      tiempo:"3 a 4 semanas",
    },
    {
      nombre: "Venezuela",
      imagen: Venezuela,
      descripcion: "Paqueteria puerta a puerta en toda la Republica de Venezuela",
      TipoTransporte: "Maritimo",
      cobro: "No se cobra por peso",
      tiempo:"3 a 4 semanas",
    },
    {
      nombre: "Republica Dominicana",
      imagen: Republic,
      descripcion: "Paqueteria puerta a puerta en toda Republica Dominicana",
      TipoTransporte: "Maritimo",
      cobro: "No se cobra por peso",
      tiempo:"3 a 4 semanas",
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

  const imageUrls = [
    "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/Resena1.png?alt=media&token=fc8ca5bb-b5eb-4251-a29a-e62206eaa473",
    "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/resena2.png?alt=media&token=0650d378-36ec-41d2-b359-490fe934e068",
    "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/Resena3.png?alt=media&token=d0d9e838-f623-4ccd-a230-f6be001a0551",
    "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/Resena4.png?alt=media&token=15121e3e-219d-42c5-b6b0-7f5135a5b328",
    "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/resena5.png?alt=media&token=8da291e0-5d28-46d8-83d0-5cbf574b6c65",
    "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/resena6.png?alt=media&token=97896329-1b2c-4e70-a326-3fd995265f84",
    // "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/reseña8.png?alt=media&token=9e18e7d1-65c6-4a9f-b784-ed8c9e55d4de",
    // "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/reseña9.jpeg?alt=media&token=872d3437-bd94-461c-9022-9eb9de74cb05",
    // "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/reseña7.png?alt=media&token=43688115-dc50-40e2-bafb-53655416d2a1",
    // "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/reseña10.jpeg?alt=media&token=0a50a1c8-6e08-47b2-b7ee-79544c28b3e2"
  ];

  const selectedCountryClass = countryClasses[paisSeleccionado.nombre];

  const handleClickPais = (pais) => {
    setPaisSeleccionado(pais);

     // Desplazarse al div de destino
     if (destinationRef.current) {
      destinationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        <NavBar />
        <div className="">
          <CarouselHome/>
        </div>
      <div className="container">
        <div className="container mt-5">
          <motion.h1
            className="text-center fw-bolder mb-5"
            style={{ color: "#13103A", fontSize: "60px" }}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            onAnimationComplete={() => setAnimationPlayed((prev) => ({ ...prev, middle: true }))}
          >
            Paises Destino
          </motion.h1>
          <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-3">
            {paises.map((pais, index) => (
              <motion.div
                key={index}
                className="col text-center img-container"
                onClick={() => handleClickPais(pais)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                onAnimationComplete={() => setAnimationPlayed((prev) => ({ ...prev, middle: true }))}
              >
                <img className="imagen" src={preloadedImages[pais.imagen]?.src || pais.imagen} alt={pais.nombre} />
                <div className="pt-3 pb-3 fw-bolder">{pais.nombre}</div>
              </motion.div>
            ))}
          </div>
          <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-3 justify-content-center container">
            {paises2.map((pais, index) => (
              <motion.div
                key={index}
                className="col text-center img-container"
                onClick={() => handleClickPais(pais)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                onAnimationComplete={() => setAnimationPlayed((prev) => ({ ...prev, middle: true }))}
              >
                <img className="imagen" src={preloadedImages[pais.imagen]?.src || pais.imagen} alt={pais.nombre} />
                <div className="pt-3 pb-3 fw-bolder">{pais.nombre}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        ref={destinationRef}
        className={`container-fluid infoCountries ${selectedCountryClass}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        onAnimationComplete={() => setAnimationPlayed((prev) => ({ ...prev, bottom: true }))}
      >
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
                className="h4 mt-3 descript textoMovil"
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
              <p className="h4 text-center textoMovil">{paisSeleccionado.tiempo}</p>
              <p className="h4 text-center textoMovil"><span className="fw-bold">Trasporte:</span> {paisSeleccionado.TipoTransporte}</p>
              <p className="fw-bold mt-0 fst-italic h4 text-center CobroPeso textoMovil">{paisSeleccionado.cobro ? paisSeleccionado.cobro : '' }</p>
            </div>
          </div>
          <div className="col position-relative text-center">
            <Link to="/detalles">
              <button
                type="button"
                className="buttonSizes fw-bold btn bg-white btn-lg position-absolute top-50 start-50 translate-middle"
              >
                Cotizar envío <img className="ms-3" alt="icono" src={preloadedImages[RowIcon]?.src || RowIcon} />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
      
      <motion.div className="container" id="Quienes-somos" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.5 }}>
        <h1 className="text-center fw-bolder mb-5 mt-5" style={{ color: "#13103A", fontSize: "60px" }}>
          Quienes Somos
        </h1>
        <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 mt-5">
          <motion.div className="col" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.5 }}>
            <img src={"https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/Cajita.svg?alt=media&token=f1683d28-46e6-45a9-96c3-812b8bf58fb9"} className="img-fluid w-100" alt="..." />
          </motion.div>
          <div className="col" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.5 }}>
            <p className="h3 p-2" style={{ textAlign: "left", fontWeight:"bold", }}>
              <span className="span-text">En Cargo Premier,</span> somos una empresa familiar con <span className="span-text2">15 años de experiencia </span>en paquetería aérea, terrestre y maritima, ofreciendo envíos rápidos, seguros y eficientes. Conectamos personas y negocios mediante un servicio de transporte confiable y puntual. Nuestro equipo de profesionales brinda un servicio personalizado, asegurando que cada paquete llegue en perfectas condiciones.</p>
          </div>
        </div>
        <motion.h1 className="text-center fw-bolder mb-5 mt-5" id="serviciosAdd" style={{ color: "#13103A", fontSize: "60px" }} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.5 }}>
          Servicios adicionales
        </motion.h1>
      </motion.div>

      <motion.div
        id="carouselExample"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 mt-5">
                <div className="col">
                  <motion.h1
                    className="text-center fw-bolder mb-5 mt-5"
                    style={{ color: "#13103A" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    Aereo
                  </motion.h1>
                  <p
                    className="h3 textoBanner container"
                    style={{ textAlign: "left",fontWeight:"bold" }}
                  >
                    <span className="span-text">En Cargo Premier,</span>  ofrecemos envíos aéreos rápidos y seguros para tus paquetes. Nuestro servicio puerta a puerta es flexible y veloz, ideal para entregas urgentes. Confía en Cargo Premier para un transporte aéreo eficiente y confiable.
                  </p>
                </div>
                <div className="col">
                  <motion.img
                    src={preloadedImages[Aereo]?.src || Aereo}
                    className="img-fluid w-100 imagenBanner"
                    alt="..."
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 mt-5">
                <div className="col">
                  <motion.h1
                    className="text-center fw-bolder mb-5 mt-5"
                    style={{ color: "#13103A" }}
                  >
                    Mudanza
                  </motion.h1>
                  <p
                    className="h3 textoBanner container"
                    style={{ textAlign: "left", fontWeight:"bold" }}
                  >
                    <span className="span-text">Cargo Premier,</span> ofrece servicios de mudanzas a nivel nacional e internacional desde Florida. Garantizamos el transporte seguro y eficiente de sus pertenencias a cualquier destino, asegurando que lleguen en perfectas condiciones y a tiempo. Confíe en nosotros para una mudanza sin estrés.
                  </p>
                </div>
                <div className="col">
                  <motion.img
                    src={preloadedImages[Terrestre]?.src || Terrestre}
                    className="img-fluid w-100 imagenBanner"
                    alt="Banner"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 mt-5">
                <div className="col">
                  <motion.h1
                    className="text-center fw-bolder mb-5 mt-5"
                    style={{ color: "#13103A" }}
                  >
                    Envío de Vehiculos
                  </motion.h1>
                  <p
                    className="h3 textoBanner container"
                    style={{ textAlign: "left", fontWeight:"bold" }}
                  >
                    <span className="span-text">Cargo Premier,</span> ofrece envíos de vehículos desde Florida a toda Centroamérica. Garantizamos un transporte seguro y puntual de su vehículo, asegurando que llegue en perfectas condiciones. Confíe en nosotros para un servicio de envío eficiente y sin complicaciones.

                  </p>
                </div>
                <div className="col">
                  <motion.img
                    src={preloadedImages[Maritimo]?.src || Maritimo}
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
      </motion.div>
      
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
              style={{ textAlign: "left", color: "#414141", fontWeight:"bold" }}
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
          style={{ backgroundColor: "#b5fffe" }}
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
              style={{ textAlign: "left", color: "#414141", fontWeight:"bold",}}
            >
              Proveer servicios de envío de paquetería seguros, eficientes y accesibles a Centroamérica, superando las expectativas de nuestros clientes mediante tecnología avanzada, procesos optimizados y un servicio al cliente excepcional. Nos dedicamos a construir puentes entre comunidades, fomentando el crecimiento económico y el intercambio cultural en la región. Estas declaraciones reflejan un compromiso con la excelencia operativa, la innovación y el impacto positivo en las comunidades servidas, estableciendo una base sólida para el crecimiento y el éxito sostenible de la compañía.
            </p>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 40 500 100"
        preserveAspectRatio="none"
        style={{ height: "10%", width: "100%"}}
        className="margenSVG"
      >
        <path
          d="M0.00,49.98 C156.04,122.88 283.01,9.39 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style={{ stroke: "none", fill: "#b5fffe" }}
        ></path>
      </svg>

      <motion.h1
  className="text-center fw-bolder mb-5 mt-5"
  style={{ color: "#13103A", fontSize: "60px", marginTop: "0px" }}
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true, amount: 0.5 }}
>
  Reseñas
</motion.h1>
<motion.div
  id="carouselExample2"
  className="carousel carousel-dark slide"
  data-bs-ride="carousel"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true, amount: 0.5 }}
>
  <div className="carousel-inner">
    {imageUrls.reduce((acc, url, index, array) => {
      if (index % 2 === 0) {
        const nextUrl = array[index + 1];
        acc.push(
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            data-bs-interval="3000"
          >
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 mt-5">
                <div className="col">
                  <a href="https://g.co/kgs/zSqoxEy" target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={preloadedImages[url]?.src || url}
                      className="img-fluid w-100 imagenBanner"
                      alt={`Reseña ${index + 1}`}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true, amount: 0.5 }}
                    />
                  </a>
                </div>
                {nextUrl && (
                  <div className="col">
                    <a href="https://g.co/kgs/zSqoxEy" target="_blank" rel="noopener noreferrer">
                      <motion.img
                        src={preloadedImages[nextUrl]?.src || nextUrl}
                        className="img-fluid w-100 imagenBanner"
                        alt={`Reseña ${index + 2}`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }
      return acc;
    }, [])}
  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample2"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample2"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</motion.div>

      <Footer scrollToSection={scrollToSection}/>
    </>
  );
}
