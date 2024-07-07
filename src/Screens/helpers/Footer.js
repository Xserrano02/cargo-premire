import React, { useEffect } from 'react';
import '../../estilos/Footer.css';
import logoFooter from '../../Resources/Banner.svg';
import logoFoo from '../../Resources/LogoFo.png';

const Footer = ({scrollToSection }) => {
  useEffect(() => {
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    bootstrapLink.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';
    bootstrapLink.crossOrigin = 'anonymous';
    document.head.appendChild(bootstrapLink);

    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    bootstrapScript.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    bootstrapScript.crossOrigin = 'anonymous';
    document.body.appendChild(bootstrapScript);

    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://use.fontawesome.com/releases/v6.1.1/css/all.css';
    document.head.appendChild(fontAwesomeLink);

    return () => {
      document.head.removeChild(bootstrapLink);
      document.body.removeChild(bootstrapScript);
      document.head.removeChild(fontAwesomeLink);
    };
  }, []);

  return (
    <footer>
      <div className="container__footer">
      <section className="d-flex justify-content-between flex-column flex-lg-row p-4 text-white" >
        
          

          <div className="me-lg-auto mb-3 mb-lg-0 mx-auto text-center" id="LogoFooCaja">
            <img src={logoFooter} alt="" className="img-fluid" style={{ width: '400px', height: 'auto' }} />
          </div>

          <div className="me-lg-auto mb-3 mb-lg-0 mx-auto text-center" id="LogoFoo">
            <img src={logoFoo} alt="" className="img-fluid" style={{ width: '400px', height: 'auto' }} />
          </div>

        </section>
        <hr id="hrDiv" />
        <section className="container">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
              <h6 className="fw-bold" id="Titulos">Nuestros Servicios</h6>
              <ul className="list-unstyled">
                <li className="Servi" onClick={() => scrollToSection('serviciosAdd')} style={{ cursor: 'pointer' }}><span className="bullet">&#8226;</span> Paqueteria maritima puerta a puerta</li>
                <li className="Servi" onClick={() => scrollToSection('serviciosAdd')} style={{ cursor: 'pointer' }}><span className="bullet">&#8226;</span> Paqueteria aerea</li>
                <li className="Servi" onClick={() => scrollToSection('serviciosAdd')} style={{ cursor: 'pointer' }}><span className="bullet">&#8226;</span> Mudanzas nacionales e internacionales</li>
                <li className="Servi" onClick={() => scrollToSection('serviciosAdd')} style={{ cursor: 'pointer' }}><span className="bullet">&#8226;</span> Envio de Vehiculos</li>
             </ul>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h6 className="fw-bold" id="Titulos">Contacto</h6><br />
                <p className="Servi">4797 NW 72nd Ave. Miami, FL 33166</p><br />
                <p className="Servi"> Teléfono: +1 (305) 735-8577</p>
                <p className="Servi"> <a href="https://wa.me/+14077281902"> <i class="fa-brands fa-whatsapp"></i></a> <a href="https://wa.me/+14077281902">  (407) 728 - 1902 </a> </p>
                <p> E-mail: <strong> <a href="mailto:cargopremier@yahoo.com">cargopremier@yahoo.com</a> </strong></p>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.593706359522!2d-80.31412612456177!3d25.816974806318925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bbee1a39708b%3A0x7155122e7276d2ae!2sCargo%20Premier%20Corp.!5e0!3m2!1ses!2ssv!4v1719636594887!5m2!1ses!2ssv"
                  width="100%"
                  height="100%"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cargo premier"
                ></iframe>

              </div>
            </div>
          </div>
        </section>

        <hr id="hrDiv" />

        <section className="container">
          <div>
            <center> <h5>Powered by <strong> <a href="mailto:geektech2306@gmail.com"> GeekTech </a> </strong> 2024 ©</h5> </center>
          </div>
        </section>

      </div>
    </footer>
  );
};

export default Footer;
