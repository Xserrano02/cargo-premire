import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import "../estilos/HomeStyles.css";
import Banner from "../Resources/Banner.svg";

const CarouselHome = () => {
  return (
    <div className="position-relative movilContainer">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenMobile"
            src="https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/zocalo2-mexico%201.png?alt=media&token=c086c6e6-9362-4c8a-bc86-559229d19919"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenMobile"
            src="https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/barco-venezuela.jpg?alt=media&token=ca8e1144-ae80-48e7-b2c2-6e075fd464e9"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenMobile"
            src="https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/barco_costa%20rica.jpg?alt=media&token=02f4a14d-d8f5-4ef3-a7ea-e0d9b099ee01"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="col-lg-8 position-absolute top-50 start-50 translate-middle logoPadding">
        <img src={ Banner} className="d-block w-100" alt="Banner" />
        <h3 className="text-center" style={{ color: "#13103A" }}>
          ¡Paqueteria puerta a puerta!
        </h3>
      </div>
    </div>
  );
};

export default CarouselHome;
