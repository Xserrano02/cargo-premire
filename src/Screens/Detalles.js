import React, { useState } from "react";
import NavBar from "../Components/NavBar.jsx";
import Mexico from "../Resources/Mexico.svg";
import Guatemala from "../Resources/Guatemala.png";
import ElSalvador from "../Resources/ElSalvador.png";
import Honduras from "../Resources/Honduras.png";
import Nicaragua from "../Resources/Nicaragua.png";
import CostaRica from "../Resources/CostaRica.png";
import Colombia from "../Resources/Colombia.png";
import Venezuela from "../Resources/Venezuela.png";
import Republic from "../Resources/RepublicaDom.png";

export default function Detalles() {
  const [tamanosSeleccionados, setTamanosSeleccionados] = useState([]);
  
  function Pais({ imagen, nombre, onClick }) {
    return (
      <div className="col text-center">
        <button className="btn btn-link p-0 border-0" onClick={onClick}>
          <img className="" src={imagen} alt={nombre} />
        </button>
        <div className="p-2 fw-bolder">{nombre}</div>
      </div>
    );
  }

  const paises = [
    {
      imagen: Mexico,
      nombre: "Mexico",
      tamanos: [
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
    },
    {
      imagen: Guatemala,
      nombre: "Guatemala",
      tamanos: [
        "22x22x22",
        "24x24x24",
        "36x22x22",
        "36x24x24",
        "35x30x24",
        "30x30x30",
        "42x29x25",
      ],
    },
    {
      imagen: ElSalvador,
      nombre: "El Salvador",
      tamanos: [
        "22x22x22",
        "24x24x24",
        "36x22x22",
        "36x24x24",
        "35x30x24",
        "30x30x30",
        "42x29x25",
      ],
    },
    {
      imagen: Honduras,
      nombre: "Honduras",
      tamanos: [
        "22x22x22",
        "24x24x24",
        "36x22x22",
        "36x24x24",
        "35x30x24",
        "30x30x30",
        "42x29x25",
      ],
    },
    {
      imagen: Nicaragua,
      nombre: "Nicaragua",
      tamanos: [
        "22x22x22",
        "24x24x24",
        "36x22x22",
        "36x24x24",
        "35x30x24",
        "30x30x30",
        "42x29x25",
      ],
    },
    {
      imagen: CostaRica,
      nombre: "Costa Rica",
      tamanos: [
        "22x22x22",
        "24x24x24",
        "36x22x22",
        "36x24x24",
        "35x30x24",
        "30x30x30",
        "42x29x25",
      ],
    },
    {
      imagen: Colombia,
      nombre: "Colombia",
      tamanos: [
        "16x16x16",
        "18x18x18",
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
    },
    //{ imagen: Venezuela, nombre: "Venezuela", tamanos: ['22x22x22', '24x24x24'] },
    {
      imagen: Republic,
      nombre: "Republica Dominicana",
      tamanos: ["18x18x18", "22x22x22", "24x24x24", "36x22x22"],
    },
  ];

  return (
    <div className="container">
      <NavBar />

      <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-3 justify-content-center container">
        {paises.map((pais) => (
          <Pais
            imagen={pais.imagen}
            nombre={pais.nombre}
            onClick={() => setTamanosSeleccionados(pais.tamanos)}
          />
        ))}
      </div>

      <div className="row">
        <div className="col text-center">
          <h2>Tamaños</h2>
          {tamanosSeleccionados.map((tamano, index) => (
            <>
              <button className="btn btn-primary m-2">{tamano}</button>
              {(index + 1) % 2 === 0 && <br />}
            </>
          ))}
        </div>
        <div className="col text-center">
          <h2>Información</h2>
        </div>
      </div>
    </div>
  );
}
