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

export default function HomePage() {
  return (
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
                <img src={Banner} className="d-block w-100" alt="..." />
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
          className="text-center fw-bolder"
          style={{ color: "#13103A", fontSize: "60px" }}
        >
          Paises Destino
        </h1>
        <div class="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
          <div class="col text-center">
            <img className="" src={Mexico} />
            <div className="p-3">Mexico</div>
          </div>
          <div class="col text-center">
            <img className="" src={Guatemala} />
            <div class="p-3">Guatemala</div>
          </div>
          <div class="col text-center">
            <img className="" src={ElSalvador} />
            <div class="p-3">El Salvador</div>
          </div>
          <div class="col text-center">
            <img className="" src={Honduras} />
            <div class="p-3">Honduras</div>
          </div>
          <div class="col text-center">
            <img className="" src={Nicaragua} />
            <div class="p-3">Nicaragua</div>
          </div>
          <div class="col text-center">
            <img className="" src={CostaRica} />
            <div class="p-3">Costa Rica</div>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 justify-content-center container">
          <div className="col text-center">
            <img className="" src={Colombia} alt="Colombia" />
            <div className="p-3">Colombia</div>
          </div>
          <div className="col text-center">
            <img className="" src={Venezuela} alt="Venezuela" />
            <div className="p-3">Venezuela</div>
          </div>
          <div className="col text-center">
            <img className="" src={Republic} alt="Republica Dominicana" />
            <div className="p-3">Republica Dominicana</div>
          </div>
        </div>
      </div>
    </div>
  );
}
