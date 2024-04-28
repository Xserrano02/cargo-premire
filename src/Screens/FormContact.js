import React, { useState, useRef } from 'react'
import '../estilos/form.css'
import Swal from 'sweetalert2'
import Banner from '../Resources/Banner.svg'
import emailjs from '@emailjs/browser';
import { Paises } from '../db/Paises.js'
import NavBar from "../Components/NavBar.jsx";

export default function HomePage(e) {
  const form = useRef();
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [telefono, setTelefono] = useState('');
  const [paisDestino, setPaisDestino] = useState('');
  const [tamanosDisponibles, setTamanosDisponibles] = useState([]);
  const [tamanoSeleccionado, setTamanoSeleccionado] = useState('');
  const [infoAdicional, setInfoAdicional] = useState('');

  console.log(tamanoSeleccionado)

  const handleCountryChange = (e) => {
    const paisSeleccionado = e.target.value;
    setPaisDestino(paisSeleccionado);
    const pais = Paises.find(pais => pais.nombre === paisSeleccionado);
    if (pais) {
      setTamanosDisponibles(Object.entries(pais.tamanos));
    } else {
      setTamanosDisponibles([]);
    }
    setTamanoSeleccionado('');
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm('service_c8pic8d', 'template_0244yeb', form.current, {
        publicKey: 'Rs0ljdXLJTB5tB10k',
        destination_country: "sdf",
        additional_info: "sdf",
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alertaOk();
          resetForm()
        },
        (error) => {
          console.log('FAILED...', error.text);
          alertaFalse()
          resetForm()
        },
      );
  }

  function resetForm() {
    setNombreCompleto('');
    setDireccion('');
    setCorreoElectronico('');
    setTelefono('');
    setPaisDestino('');
    setInfoAdicional('');
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
    <>
    <NavBar />
      <div className='container-formulario'>

        <img class='Containder-logo' src={Banner} alt='Logo' />



        <div className='formulario'>

          <form className='form-submit' ref={form} onSubmit={sendEmail}>
            <h5 className='txt-tittle'>Informacion personal</h5>

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

              <h5 className='txt-tittle'>Información de la caja</h5>

              <div className='container-mail-phone'>
                <div>
                  <p>Pais destino *</p>
                  <select name="destination_country" className='input-texto-esencial-select' value={paisDestino} onChange={handleCountryChange}>
                    <option value="">Seleccione un país</option>
                    {Paises.map((pais, key) => (
                      <option key={key} value={pais.nombre}>{pais.nombre}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <p>Tamaño *</p>
                  <select
                    name="box_type"
                    className='input-texto-esencial-select'
                    value={tamanoSeleccionado}
                    onChange={(e) => {
                      console.log("Valor seleccionado:", e.target.value);  // Esto imprimirá el valor en la consola
                      setTamanoSeleccionado(e.target.value);
                    }}
                  >
                    <option value="">Seleccione un tamaño</option>
                    {tamanosDisponibles.map(([key, value]) => (
                      <option key={key} value={value}>{value}</option>
                    ))}
                  </select>
                </div>


              </div>
              <h5 className='txt-tittle'>Información adicional</h5>
              <textarea name="additional_info" placeholder='¿Algún requerimiento especial?' value={infoAdicional} onChange={(e) => setInfoAdicional(e.target.value)} className='input-adicional' />
              <div className='container-person'>
                <input type="submit" value="Enviar" className='btn-enviar-form' />
              </div>

            </div>
          </form>

        </div>

      </div>
    </>

  )

}
