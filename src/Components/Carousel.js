import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/Carousel.css';
import { motion } from 'framer-motion';

const imageUrls = [
  "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/reseñanew1.png?alt=media&token=7522a213-043e-4708-9c80-295acfa31d2f",
  "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/reseñanew2.png?alt=media&token=1449fb00-cfff-44c1-90b7-437ec5fe3b04",
  "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/reseñanew3.png?alt=media&token=903cb674-9650-4fa0-b5cb-e4e2d5f0441a",
  "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/reseñanew4.png?alt=media&token=8694134f-1493-4473-b774-45d01802a008",
  "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/reseñanew5.png?alt=media&token=4f539cb5-a83c-42c2-ab7d-a6534168cefa",
  "https://firebasestorage.googleapis.com/v0/b/cargo-pre.appspot.com/o/reseñanew6.png?alt=media&token=426eff55-7c75-42cd-9742-74bf2906edc5"
];

function CustomCarousel() {
  const pairs = imageUrls.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []);

  return (
    <motion.div
      className="container mt-5 container-resena"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h2 className="text-center mb-4 container-resena" style={{ fontWeight: "bolder" }}>Reseñas</h2>
      <Carousel>
        {pairs.map((pair, index) => (
          <Carousel.Item key={index} interval={3000}>
            <div className="container">
              <div className="row justify-content-center">
                {pair.map((imageUrl, subIndex) => (
                  <motion.div
                    key={subIndex}
                    className="col-12 col-md-6 d-flex justify-content-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: subIndex * 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <img src={imageUrl} className="img-fluid imagenBanner" alt={`Slide ${index * 2 + subIndex + 1}`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </motion.div>
  );
}

export default CustomCarousel;
