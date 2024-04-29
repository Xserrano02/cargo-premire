import React, { useEffect } from 'react';
import '../../estilos/Footer.css'
import logoFooter from '../../Resources/Banner.svg';


const Footer = () => {

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
      
          // Cleanup
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
          <div className="me-lg-auto mb-3 mb-lg-0 mx-auto text-center" id="LogoFoo">
            <img src={logoFooter} alt="" className="img-fluid" style={{ width: '400px', height: 'auto' }} />
          </div>
          <div id="social-icons">
            <a href="/www.facebook.com" className="text-white me-4"><i className="fab fa-facebook"></i></a>
            <a href="/www.x.com" className="text-white me-4"><i className="fab fa-twitter"></i></a>
            <a href="/www.instagram.com/cargopremier" className="text-white me-4"><i className="fab fa-instagram"></i></a>
          </div>
        </section>
        <hr id="hrDiv" />

        <section className="container">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h6 className="fw-bold" id="Titulos">Nuestros Servicios</h6><br />
                <p className="Servi">  Envíos Aéreos </p>
                <p className="Servi">  Envíos Marítimo </p>
                <p className="Servi">  Envíos De Sobres </p>
                <p className="Servi">  Casillero Postal </p>
                <p className="Servi">  Envíos Aéreos </p>
                <p className="Servi">  Envíos Marítimo</p>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4" >
                <h6 className="fw-bold" id="Titulos">Contacto</h6><br />
                <p className="Servi"> 4306 Hwy 6 North, Houston, TX 77084 16810 Barker Springs Rd, Suite 202, Houston TX 77084 </p><br />
                <p className="Servi"> Teléfono: +1 (713) 263-8090 </p>
                <p className="Servi">E-mail: servicioalcliente@oglobocargo.com</p>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
              <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.686291279216!2d2.120244875533621!3d41.380899996398384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498f576297baf%3A0x44f65330fe1b04b9!2sSpotify%20Camp%20Nou!5e0!3m2!1ses-419!2ssv!4v1713680177502!5m2!1ses-419!2ssv" 
    width="100%" 
    height="100%" 
    style={{ border: '0' }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade" 
    title="Mapa de Spotify Camp Nou"
></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
