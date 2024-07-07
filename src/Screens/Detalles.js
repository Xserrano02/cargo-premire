import React, { useState, useEffect, useCallback, useMemo,useRef  } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";
import Mexico from "../Resources/Mexico.svg";
import Guatemala from "../Resources/Guatemala.png";
import ElSalvador from "../Resources/ElSalvador.png";
import Honduras from "../Resources/Honduras.png";
import Nicaragua from "../Resources/Nicaragua.png";
import CostaRica from "../Resources/CostaRica.png";
import Colombia from "../Resources/Colombia.png";
import Republic from "../Resources/RepublicaDom.png";
// Importa las imágenes de las cajas
import imagenCaja1 from "../Resources/ImagenNoEncontrada.png";
import imagenCaja18x18x18 from "../Resources/18x18x18.jpeg";
import imagenCaja22x22x22 from "../Resources/22x22x22.jpeg";
import imagenCaja24x24x24 from "../Resources/24x24x24.jpeg";
import imagenCaja36x22x22 from "../Resources/36x22x22.jpeg";
import imagenCaja36x24x24 from "../Resources/36x24x24.jpeg";
import imagenCaja42x29x25 from "../Resources/42x29x25.png";

//import logoCajita1 from "../Resources/logo cajita 1.svg";
import imagenPaisajeMexico from "../Resources/imagenPaisajeMexico.jpg";
import imagenPaisajeGuatemala from "../Resources/imagenPaisajeGuatemala.jpg";
import imagenPaisajeElSalvador from "../Resources/imagenPaisajeElSalvador.jpg";
import imagenPaisajeHonduras from "../Resources/imagenPaisajeHonduras.jpg";
import imagenPaisajeNicaragua from "../Resources/imagenPaisajeNicaragua.jpg";
import imagenPaisajeCostaRica from "../Resources/imagenPaisajeCostaRica.jpg";
import imagenPaisajeColombia from "../Resources/imagenPaisajeColombia.jpg";
import imagenPaisajeRepublicaDominicana from "../Resources/imagenPaisajeRepublicaDominicana.jpg";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../estilos/Detalles.css";
import Footer from "./helpers/Footer.js";

import paqueteexpress from "../Resources/paqueteexpress.png";
import estafeta from "../Resources/Estafeta.jpg";
import fedex from "../Resources/fedex.png";

export default function Detalles() {
  const imagenesPorTamano = useMemo(
    () => ({
      "18x18x18": imagenCaja18x18x18,
      "22x22x22": imagenCaja22x22x22,
      "24x24x24": imagenCaja24x24x24,
      "36x22x22": imagenCaja36x22x22,
      "36x24x24": imagenCaja36x24x24,
      "42x29x25": imagenCaja42x29x25,
    }),
    []
  );
  const [imagenActual, setImagenActual] = useState(imagenCaja1); // Estado para almacenar la imagen actual
  const [mostrarAliados, setMostrarAliados] = useState(false);
  const paises = [
    {
      imagen: Mexico,
      nombre: "Mexico",
      imagenCaja: imagenCaja1,
      imagenPaisaje: imagenPaisajeMexico,
      tamanos: [
        "14x14x14",
        "16x16x16",
        "18x18x18",
        "20x20x20",
        "18x18x28",
        "22x22x22",
        "24x24x24",
        "36x22x22",
        "36x24x24",
        "35x30x24",
      ],
      tiempoEntrega: "3 - 4 semanas",
      CobroPeso: "No se cobra por Peso",
    },
    {
      imagen: ElSalvador,
      nombre: "El Salvador",
      imagenCaja: imagenCaja1,
      imagenPaisaje: imagenPaisajeElSalvador,
      tamanos: [
        "22x22x22",
        "24x24x24",
        "36x22x22",
        "36x24x24",
        "35x30x24",
        "30x30x30",
        "42x29x25",
      ],
      tiempoEntrega: "3 - 4 semanas",
      CobroPeso: "No se cobra por Peso",
    },
    {
      imagen: Guatemala,
      nombre: "Guatemala",
      imagenCaja: imagenCaja1,
      imagenPaisaje: imagenPaisajeGuatemala,
      tamanos: [
        "20x20x20",
        "22x22x22",
        "24x24x24",
        "36x22x22",
        "36x24x24",
        "35x30x24",
        "30x30x30",
        "42x29x25",
      ],
      tiempoEntrega: "3 - 4 semanas",
      CobroPeso: "No se cobra por Peso",
    },
    {
      imagen: Honduras,
      nombre: "Honduras",
      imagenCaja: imagenCaja1,
      imagenPaisaje: imagenPaisajeHonduras,
      tamanos: [
        "22x22x22",
        "24x24x24",
        "36x22x22",
        "36x24x24",
        "35x30x24",
        "30x30x30",
        "42x29x25",
      ],
      tiempoEntrega: "3 - 4 semanas",
      CobroPeso: "No se cobra por Peso",
    },
    {
      imagen: Nicaragua,
      nombre: "Nicaragua",
      imagenCaja: imagenCaja1,
      imagenPaisaje: imagenPaisajeNicaragua,
      tamanos: [
        "22x22x22",
        "24x24x24",
        "36x22x22",
        "36x24x24",
        "35x30x24",
        "30x30x30",
        "42x29x25",
      ],
      tiempoEntrega: "3 - 4 semanas",
      CobroPeso: "No se cobra por Peso",
    },
    {
      imagen: CostaRica,
      nombre: "Costa Rica",
      imagenCaja: imagenCaja1,
      imagenPaisaje: imagenPaisajeCostaRica,
      tamanos: [
        "22x22x22",
        "24x24x24",
        "36x22x22",
        "36x24x24",
        "35x30x24",
        "30x30x30",
        "42x29x25",
      ],
      tiempoEntrega: "3 - 4 semanas",
      CobroPeso: "No se cobra por Peso",
    },
    {
      imagen: Colombia,
      nombre: "Colombia",
      imagenCaja: imagenCaja1,
      imagenPaisaje: imagenPaisajeColombia,
      tamanos: [
        "20x20x20",
        "18x18x28",
        "22x22x22",
        "24x24x24",
        "36x22x22",
        "36x24x24",
        "35x30x24",
        "30x30x30",
        "42x29x25",
      ],
      tiempoEntrega: "3 - 4 semanas",
      CobroPeso: "No se cobra por Peso",
    },
    //{ imagen: Venezuela, nombre: "Venezuela", tamanos: ['22x22x22', '24x24x24'] },
    {
      imagen: Republic,
      nombre: "Republica Dominicana",
      imagenCaja: imagenCaja1,
      imagenPaisaje: imagenPaisajeRepublicaDominicana,
      tamanos: ["18x18x18", "18x18x28", "22x22x22", "24x24x24", "36x22x22"],
      tiempoEntrega: "3 - 4 semanas",
      CobroPeso: "No se cobra por Peso",
    },
  ];

  const ResponsiveBreak = () => {
    return <span className="responsive-break"> </span>;
  };

  const [tamanosSeleccionados, setTamanosSeleccionados] = useState(
    paises[0].tamanos
  );
  const [tamanoSeleccionado, setTamanoSeleccionado] = useState(
    paises[0].tamanos[0]
  );
  const [paisSeleccionado, setPaisSeleccionado] = useState(paises[0]);

  const seccionRef = useRef(null);

  const cambiarImagenPorTamano = useCallback(
    (tamano) => {
      setImagenActual(imagenesPorTamano[tamano] || imagenCaja1);
    },
    [imagenesPorTamano]
  );

  useEffect(() => {
    setTamanoSeleccionado(paisSeleccionado.tamanos[0]);
    cambiarImagenPorTamano(paisSeleccionado.tamanos[0]);
    setMostrarAliados(paisSeleccionado.nombre === "Mexico");
    if (seccionRef.current) {
      seccionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [paisSeleccionado, paisSeleccionado.tamanos, cambiarImagenPorTamano]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [previousPais, setPreviousPais] = useState(paises[0]);

  const [, setIsChanging] = useState(false);

  useEffect(() => {
    if (paisSeleccionado !== previousPais) {
      setIsChanging(true);
      const timer = setTimeout(() => {
        setPreviousPais(paisSeleccionado);
        setIsChanging(false);
      }, 1000); // duración de la animación
      return () => clearTimeout(timer);
    }
  }, [paisSeleccionado, previousPais]);
  const [hoverIndex, setHoverIndex] = useState(null);

  const toggleHover = (index) => {
    setHoverIndex(index);
  };

  const [hoverIndexPais, setHoverIndexPais] = useState(null);
  const [hoverIndexTamano, setHoverIndexTamano] = useState(null);

  // Funciones para cambiar el estado hoverIndexPais
  const toggleHoverPais = (index) => {
    setHoverIndexPais(index);
  };

  // Funciones para cambiar el estado hoverIndexTamano
  const toggleHoverTamano = (index) => {
    setHoverIndexTamano(index);
  };

  function Pais({ imagen, nombre, onClick, index }) {
    return (
      <div className="col text-center pais-container">
        <button
          className="btn btn-link p-0 border-0"
          onClick={onClick}
          onMouseEnter={() => toggleHoverPais(index)}
          onMouseLeave={() => toggleHoverPais(null)}
          style={{
            transform: hoverIndexPais === index ? "translateY(-10px)" : "none",
            transition: "transform 0.3s",
          }}
        >
          <img className="" src={imagen} alt={nombre} />
        </button>
        <div
          className="p-2 fw-bolder"
          style={{
            fontSize: "larger",
            color: "white",
          }}
        >
          {nombre}
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "100vw", padding: 0, margin: 0 }}>
      <NavBar backgroundColor="#05C8FE" />

      <div
        style={{
          position: "relative",
          backgroundSize: "cover",
        }}
      >
        <TransitionGroup>
          <CSSTransition
            key={paisSeleccionado.nombre}
            timeout={500}
            classNames="fade"
          >
            <div
              style={{
                background: `
          linear-gradient(
            rgba(0, 0, 0, 0.3), 
            rgba(0, 0, 0, 0.3)
          ), 
          url(${paisSeleccionado.imagenPaisaje})`,
                filter: "blur(2px)",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </CSSTransition>
        </TransitionGroup>

        <div className="d-flex justify-content-center align-items-center">
          <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-3 justify-content-center container mt-3 mb-1">
            {paises.map((pais, index) => (
              <Pais
                imagen={pais.imagen}
                nombre={pais.nombre}
                onClick={() => {
                  setTamanosSeleccionados(pais.tamanos);
                  setPaisSeleccionado(pais);
                }}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <h1 className="pais-titulo"   ref={seccionRef}>
          {paisSeleccionado.nombre.toUpperCase() === "EL SALVADOR" ? (
            <>
              <span style={{ color: "#0047AB" }}>
                {paisSeleccionado.nombre.slice(0, 3).toUpperCase()}
              </span>
              <span style={{ color: "white" }}>
                {paisSeleccionado.nombre.slice(3, 7).toUpperCase()}
              </span>
              <span style={{ color: "#0047AB" }}>
                {paisSeleccionado.nombre.slice(7).toUpperCase()}
              </span>
            </>
          ) : paisSeleccionado.nombre.toUpperCase() === "MEXICO" ? (
            <>
              <span style={{ color: "#006847" }}>
                {paisSeleccionado.nombre.slice(0, 2).toUpperCase()}
              </span>
              <span style={{ color: "white" }}>
                {paisSeleccionado.nombre.slice(2, 4).toUpperCase()}
              </span>
              <span style={{ color: "#CE1126" }}>
                {paisSeleccionado.nombre.slice(4).toUpperCase()}
              </span>
            </>
          ) : paisSeleccionado.nombre.toUpperCase() === "GUATEMALA" ? (
            <>
              <span style={{ color: "#4997D0" }}>
                {paisSeleccionado.nombre.slice(0, 3).toUpperCase()}
              </span>
              <span style={{ color: "white" }}>
                {paisSeleccionado.nombre.slice(3, 6).toUpperCase()}
              </span>
              <span style={{ color: "#4997D0" }}>
                {paisSeleccionado.nombre.slice(6).toUpperCase()}
              </span>
            </>
          ) : paisSeleccionado.nombre.toUpperCase() === "HONDURAS" ? (
            <>
              <span style={{ color: "#00BCE4" }}>
                {paisSeleccionado.nombre.slice(0, 3).toUpperCase()}
              </span>
              <span style={{ color: "white" }}>
                {paisSeleccionado.nombre.slice(3, 5).toUpperCase()}
              </span>
              <span style={{ color: "#00BCE4" }}>
                {paisSeleccionado.nombre.slice(5).toUpperCase()}
              </span>
            </>
          ) : paisSeleccionado.nombre.toUpperCase() === "NICARAGUA" ? (
            <>
              <span style={{ color: "#0067C6" }}>
                {paisSeleccionado.nombre.slice(0, 3).toUpperCase()}
              </span>
              <span style={{ color: "white" }}>
                {paisSeleccionado.nombre.slice(3, 6).toUpperCase()}
              </span>
              <span style={{ color: "#0067C6" }}>
                {paisSeleccionado.nombre.slice(6).toUpperCase()}
              </span>
            </>
          ) : paisSeleccionado.nombre.toUpperCase() === "COSTA RICA" ? (
            <>
              <span style={{ color: "#001489" }}>
                {paisSeleccionado.nombre.slice(0, 1).toUpperCase()}
              </span>
              <span style={{ color: "white" }}>
                {paisSeleccionado.nombre.slice(1, 2).toUpperCase()}
              </span>
              <span style={{ color: "#DA291C" }}>
                {paisSeleccionado.nombre.slice(2, 8).toUpperCase()}
              </span>
              <span style={{ color: "white" }}>
                {paisSeleccionado.nombre.slice(8, 9).toUpperCase()}
              </span>
              <span style={{ color: "#001489" }}>
                {paisSeleccionado.nombre.slice(9).toUpperCase()}
              </span>
            </>
          ) : paisSeleccionado.nombre.toUpperCase() === "COLOMBIA" ? (
            <>
              <span style={{ color: "#FFCD00" }}>
                {paisSeleccionado.nombre.slice(0, 4).toUpperCase()}
              </span>
              <span style={{ color: "#003087" }}>
                {paisSeleccionado.nombre.slice(4, 7).toUpperCase()}
              </span>
              <span style={{ color: "#C8102E" }}>
                {paisSeleccionado.nombre.slice(7).toUpperCase()}
              </span>
            </>
          ) : paisSeleccionado.nombre.toUpperCase() ===
            "REPUBLICA DOMINICANA" ? (
            <>
              <span style={{ color: "#CE1126" }}>
                {paisSeleccionado.nombre.slice(0, 3).toUpperCase()}
              </span>
              <span style={{ color: "white" }}>
                {paisSeleccionado.nombre.slice(3, 6).toUpperCase()}
              </span>
              <span style={{ color: "#002D62" }}>
                {paisSeleccionado.nombre.slice(6, 9).toUpperCase()}
              </span>
              <ResponsiveBreak />
              <span style={{ color: "#CE1126" }}>
                {paisSeleccionado.nombre.slice(9, 12).toUpperCase()}
              </span>
              <span style={{ color: "white" }}>
                {paisSeleccionado.nombre.slice(12, 16).toUpperCase()}
              </span>
              <span style={{ color: "#002D62" }}>
                {paisSeleccionado.nombre.slice(16).toUpperCase()}
              </span>
            </>
          ) : (
            <span style={{ color: "white" }}>
              {paisSeleccionado.nombre.toUpperCase()}
            </span>
          )}
        </h1>
      </div>

      <div className="row mt-5 justify-content-center ms-5 me-5">
        <div className="col-12 col-md-6 text-center mt-3 order-1 order-md-1">
          <h2>
            <b>Tamaños</b>
          </h2>
          {tamanosSeleccionados.map((tamano, index) => (
            <React.Fragment key={index}>
              <button
                className="btn m-2"
                onClick={() => {
                  setTamanoSeleccionado(tamano);
                  cambiarImagenPorTamano(tamano);
                }}
                style={{
                  backgroundColor:
                    tamano === tamanoSeleccionado
                      ? "#05C8FE"
                      : hoverIndexTamano === index
                        ? "#95E1F6"
                        : "white",
                  color: "#13103A",
                  borderColor: "#13103A",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  borderWidth: "3px",
                  fontWeight: "bold",
                  fontSize: window.innerWidth < 768 ? "small" : "medium",
                }}
                onMouseEnter={() => toggleHoverTamano(index)}
                onMouseLeave={() => toggleHoverTamano(null)}
              >
                {tamano}
              </button>
              {(index + 1) % 2 === 0 && <br />}
            </React.Fragment>
          ))}
        </div>
        <div className="col-12 col-md-6 text-center mt-3 order-2 order-md-2">
          <h2 className="mb-2">
            <b>Información</b>
          </h2>
          {tamanoSeleccionado && (
            <div className="container">
              <div className="row justify-content-center mt-3 mb-3">
                <div className="col-12 col-md-5 text-center">
                  <img
                    src={imagenActual}
                    alt="Imagen de la caja"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="col-12 col-md-6 m-5">
                  <div className="row align-items-center mb-5">
                    <div className="col-12 col-md-4">
                      <p className="h5">
                        <b>Tamaño:</b>
                      </p>
                    </div>
                    <div className="col-12 col-md-8">
                      <p className="h5">{tamanoSeleccionado}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h5 className="mt-0">
            <b>Tiempo de Entrega:</b>
          </h5>
          <p>
            {paisSeleccionado
              ? paisSeleccionado.tiempoEntrega
              : "No seleccionado"}
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        {mostrarAliados && (
          <div className="row justify-content-center mt-4">
            <div className="col-12 text-center">
              <h5 className="mt-0">
                <b>Aliados:</b>
              </h5>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <div className="row justify-content-center">
                <div className="col-4 col-md-2 mb-3 mb-md-0 me-5 ms-4">
                  <img
                    src={estafeta}
                    alt="Aliado 1"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-md-2 mb-3 mb-md-0 me-5">
                  <img
                    src={fedex}
                    alt="Aliado 2"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-md-2 mb-3 mb-md-0 me-5">
                  <img
                    src={paqueteexpress}
                    alt="Aliado 3"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="col-auto">
          <Link
            to="/contacto"
            className="btn btn-primary btn-lg mt-4"
            style={{
              backgroundColor: hoverIndex === "contact" ? "#05C8FE" : "white",
              color: "#13103A",
              borderColor: "#13103A",
              borderRadius: "20px",
              padding: "20px 40px",
              borderWidth: "3px",
              fontWeight: "bold",
              fontSize: "25px",
            }}
            onMouseOver={() => toggleHover("contact")}
            onMouseOut={() => toggleHover(null)}
          >
            Contactar
          </Link>
        </div>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/Cajita.svg?alt=media&token=f1683d28-46e6-45a9-96c3-812b8bf58fb9"
            }
            alt="Logo"
            className="logoCajita"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
