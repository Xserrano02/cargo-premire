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
import BannerPaq from "../Resources/BannerPaqueteria.svg";
import LogoCaja from "../Resources/logo cajita 1.svg";
import LogoVision from  "../Resources/Visionsvg.svg"
import Mision from "../Resources/Mision.svg"

export default function HomePage() {
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
          <div class="row row-cols-3 row-cols-lg-6 g-2 g-lg-3">
            <div class="col text-center">
              <img className="" src={Mexico} alt="Mexico"/>
              <div className="p-3 fw-bolder">Mexico</div>
            </div>
            <div class="col text-center">
              <img className="" src={Guatemala} alt="Guatemala"/>
              <div class="p-3 fw-bolder">Guatemala</div>
            </div>
            <div class="col text-center">
              <img className="" src={ElSalvador} alt="El Salvador"/>
              <div class="p-3 fw-bolder">El Salvador</div>
            </div>
            <div class="col text-center">
              <img className="" src={Honduras} alt="Honduras"/>
              <div class="p-3 fw-bolder">Honduras</div>
            </div>
            <div class="col text-center">
              <img className="" src={Nicaragua} alt="Nicaragua"/>
              <div class="p-3 fw-bolder">Nicaragua</div>
            </div>
            <div class="col text-center">
              <img className="" src={CostaRica}  alt="Costa Rica"/>
              <div class="p-3 fw-bolder">Costa Rica</div>
            </div>
          </div>
          <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-3 justify-content-center container">
            <div className="col text-center">
              <img className="" src={Colombia} alt="Colombia" />
              <div className="p-3 fw-bolder">Colombia</div>
            </div>
            <div className="col text-center">
              <img className="" src={Venezuela} alt="Venezuela" />
              <div className="p-3 fw-bolder">Venezuela</div>
            </div>
            <div className="col text-center">
              <img className="" src={Republic} alt="Republica Dominicana" />
              <div className="p-3 fw-bolder">Republica Dominicana</div>
            </div>
          </div>
        </div>
      </div>
      <img src={BannerSV} class="img-fluid w-100" alt="..." />
      <div className="container ">
        <h1
          className="text-center fw-bolder mb-5 mt-5"
          style={{ color: "#13103A", fontSize: "60px" }}
        >
          Quienes Somos
        </h1>
        <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 mt-5">
          <div class="col">
            <img src={LogoCaja} class="img-fluid w-100" alt="..." />
          </div>
          <div class="col">
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
      </div>
      <img src={BannerPaq} class="img-fluid w-100" alt="..." />
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
        <div class="row text-center pb-5" style={{ backgroundColor: "#6BDFFF" }}>
          <div class="col-6 container">
            <h1 className="text-start fw-bolder p-2" style={{ color: "#13103A" }}>
              Visión
            </h1>
            <p className="container h5" style={{ textAlign: "justify", color:"#414141"}}>
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
          <div class="col-3 text-start container">
          <img src={LogoVision} class="img-fluid w-80" alt="..." />
          </div>
        </div>
        <div class="row text-center pt-5 pb-5 " style={{ backgroundColor: "#85FFC8" }}>
          <div class="col-3 text-end container">
          <img src={Mision} class="img-fluid w-80" alt="..." />
          </div>
          <div class="col-6 container">
            <h1 className="text-end fw-bolder p-2" style={{ color: "#13103A" }}>
              Misión
            </h1>
            <p className="container h5" style={{ textAlign: "justify", color:"#414141"}}>
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
        <div style={{height: "150px", overflow: "hidden"}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C156.04,122.88 283.01,9.39 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "#85FFC8"}}></path></svg></div>
      </div>
    </>
  );
}
