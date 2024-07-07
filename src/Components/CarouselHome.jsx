import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import "../estilos/Carousel.css";
import Banner from "../Resources/Banner.svg";

const CarouselHome = () => {
  return (
    <div className="position-relative movilContainer">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenMobile"
            src="https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/zocalo2-mexico%201-min.png?alt=media&token=c94acc87-80cf-41b5-8f1f-31e99ce635b1"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenMobile img-carousel"
            src="https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/79623-San-Salvador-And-Vicinity%201.png?alt=media&token=e77a274b-ecd1-4876-9649-357c356e6452 "
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenMobile img-carousel"
            src="https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/Uo2ifkX-venezuela-wallpaper%201.png?alt=media&token=e66f9bf9-8c7a-4fcf-8429-4b5c641e88a2"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenMobile img-carousel"
            src="https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/wp1879057-costa-rica-wallpapers%201.png?alt=media&token=82708b0a-ef74-410c-b098-ef8976bba239"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenMobile img-carousel"
            src="https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/paisajes-bonitos-de-playas-del-caribe%201.png?alt=media&token=7d682322-cdb2-4a37-a83d-add26a9859db"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenMobile img-carousel"
            src="https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/69293-Leon%201.png?alt=media&token=d2992744-0433-4f67-b1bb-a5c2606497d0"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenMobile img-carousel"
            src="https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/cartagena%201.png?alt=media&token=9650434a-b309-48da-ac5a-7a0fe018c931"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenMobile img-carousel"
            src="https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/AntiguaGuatemala%201.png?alt=media&token=fa24ca00-bc72-4c4a-a3e7-809178ae925f"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="col-lg-8 position-absolute top-50 start-50 translate-middle logoPadding">
        <img src={Banner} className="d-block w-100 img-logo" alt="Banner" />
        <h3 className="text-center style-pack " id='estilo-lema'>
          ¡Paqueteria puerta a puerta!
        </h3>
      </div>
    </div>
  );
};

export default CarouselHome;
