import React, { useState, useRef } from 'react'
import '../estilos/form.css'
import Swal from 'sweetalert2'
import Banner from '../Resources/Banner.svg'
import emailjs from '@emailjs/browser';


export default function HomePage(e) {
  const form = useRef();
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipoCaja, setTipoCaja] = useState('');
  const [paisDestino, setPaisDestino] = useState('');
  const [infoAdicional, setInfoAdicional] = useState('');

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm('service_c8pic8d', 'template_0244yeb', form.current, {
        publicKey: 'Rs0ljdXLJTB5tB10k',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alertaOk();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alertaFalse()
        },
      );


  }

  function alertaOk() {

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El correo ha sido mandado :)",
      text: "Pronto nos pondremos en contacto con usted, por favor revisar estar pendiente a su bandeja de entrada.",
      showConfirmButton: false,
      timer: 4500
    });
  }

  function alertaFalse() {

    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Algo no ha salido bien :(",
      text: "El correo no se ha podido enviar, intentar luego de unos minutos.",
      showConfirmButton: false,
      timer: 4500
    });
  }


  return (
    <div className='container-formulario'>

        <img class='Containder-logo' src={Banner} alt='Logo' />



      <div className='formulario'>

        <form className='form-submit' ref={form} onSubmit={sendEmail}>
          <h3>Informacion personal</h3>

          <div className='container-person'>
            <div >
              <p>Nombre completo *</p>
              <input className='input-texto'
              name='name'
              placeholder='John Doe Smith Gonzalez'
                type='text'
                value={nombreCompleto}
                onChange={(e) => setNombreCompleto(e.target.value)}
                required />
            </div>


            <div>
              <p>Direccion *</p>
              <input className='input-texto'
                name='address'
                placeholder='234 Maple Street'
                type='text'
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                required />
            </div>

            <div className='container-mail-phone'>
              <div>
                <p>Correo electronico *</p>
                <input className='input-texto-esencial'
                  placeholder='johndoe@example.com'
                  name='email'
                  value={correoElectronico}
                  onChange={(e) => setCorreoElectronico(e.target.value)}
                  type='text'
                  required />
              </div>

              <div>
                <p>Telefono *</p>
                <input className='input-texto-esencial'
                placeholder='(555) 123-4567'
                  name='phone'
                  type='text'
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required />
              </div>

            </div>

            <h3>Información de la caja</h3>

            <div className='container-mail-phone'>

              <div>
                <p>Tipo caja *</p>
                <div className='select-box'>
                  <select name="select"
                    className='input-texto-esencial-select'
                    value={tipoCaja}
                    onChange={(e) => setTipoCaja(e.target.value)}
                    
                  >
                    <option value="value1" selected>Elija una opcion</option>
                    <option value="value2">20x20x20x20</option>
                    <option value="value3">36x36x36x6</option>
                    <option value="value4">60x60x60x60</option>
                  </select>
                </div>

              </div>

              <div>
                <div>
                  <p>Pais destino *</p>
                  <select name="select"
                    value={paisDestino}
                    onChange={(e) => setPaisDestino(e.target.value)}
                    className='input-texto-esencial-select'>
                    <option value="value2" >Colombia</option>
                    <option value="value3" >El Salvador</option>
                    <option value="value4">Nicaragua</option>
                  </select>
                </div>



              </div>


            </div>
            <h3>Información adicional</h3>

            <textarea 
            placeholder='¿Algún requerimiento especial?'
              value={infoAdicional}
              onChange={(e) => setInfoAdicional(e.target.value)}
              className='input-adicional' />
            <div className='container-person'>
              <input type="submit" name='additional_info' value="Enviar" className='btn-enviar-form' />
            </div>

          </div>
        </form>

      </div>
    </div>
  )

}