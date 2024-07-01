import React, { useState, useRef } from 'react';
import '../estilos/form.css';
import Swal from 'sweetalert2';
import Banner from '../Resources/Banner.svg';
import emailjs from '@emailjs/browser';
import { Paises } from '../db/Paises.js';
import NavBar from "../Components/NavBar.jsx";

export default function HomePage() {
  const form = useRef();
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [telefono, setTelefono] = useState('');
  const [paisDestino, setPaisDestino] = useState('');
  const [tamanosDisponibles, setTamanosDisponibles] = useState([]);
  const [tamanoSeleccionado, setTamanoSeleccionado] = useState('');
  const [infoAdicional, setInfoAdicional] = useState('');
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    let formErrors = {};
    if (!nombreCompleto) formErrors.nombreCompleto = 'Este campo no puede estar vacío';
    if (!direccion) formErrors.direccion = 'Este campo no puede estar vacío';
    if (!correoElectronico) formErrors.correoElectronico = 'Este campo no puede estar vacío';
    if (!telefono) formErrors.telefono = 'Este campo no puede estar vacío';
    if (!paisDestino) formErrors.paisDestino = 'Este campo no puede estar vacío';
    if (!tamanoSeleccionado) formErrors.tamanoSeleccionado = 'Este campo no puede estar vacío';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
          alertaOk();
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alertaFalse();
          resetForm();
        }
      );
  };

  const resetForm = () => {
    setNombreCompleto('');
    setDireccion('');
    setCorreoElectronico('');
    setTelefono('');
    setPaisDestino('');
    setTamanoSeleccionado('');
    setInfoAdicional('');
    setErrors({});
  };

  const alertaOk = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El correo ha sido mandado :)",
      text: "Pronto nos pondremos en contacto con usted, por favor revisar estar pendiente a su bandeja de entrada.",
      showConfirmButton: false,
      timer: 4500
    });
  };

  const alertaFalse = () => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Algo no ha salido bien :(",
      text: "El correo no se ha podido enviar, intentar luego de unos minutos.",
      showConfirmButton: false,
      timer: 4500
    });
  };

  const getErrorClass = (field) => errors[field] ? 'input-error' : '';

  return (
    <>
      <NavBar />
      <div className='container-formulario'>
        <img className='Containder-logo' src={Banner} alt='Logo' />
        <div className='formulario'>
          <form className='form-submit' ref={form} onSubmit={sendEmail}>
            <h5 className='txt-tittle' style={{fontWeight:'bolder'}}>Contactanos</h5>
            <div className='container-person'>
              <div>
                <p className={getErrorClass('nombreCompleto')}>Nombre completo *</p>
                <input className={`input-texto ${getErrorClass('nombreCompleto')}`}
                  name='name'
                  placeholder='John Doe Smith Gonzalez'
                  type='text'
                  value={nombreCompleto}
                  onChange={(e) => setNombreCompleto(e.target.value)}
                  required />
                {errors.nombreCompleto && <div className="error-message">{errors.nombreCompleto}</div>}
              </div>
              <div>
                <p className={getErrorClass('direccion')}>Direccion *</p>
                <input className={`input-texto ${getErrorClass('direccion')}`}
                  name='address'
                  placeholder='234 Maple Street'
                  type='text'
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  required />
                {errors.direccion && <div className="error-message">{errors.direccion}</div>}
              </div>
              <div className='container-mail-phone'>
                <div>
                  <p className={getErrorClass('correoElectronico')}>Correo electronico *</p>
                  <input className={`input-texto-esencial ${getErrorClass('correoElectronico')}`}
                    placeholder='johndoe@example.com'
                    name='email'
                    value={correoElectronico}
                    onChange={(e) => setCorreoElectronico(e.target.value)}
                    type='text'
                    required />
                  {errors.correoElectronico && <div className="error-message">{errors.correoElectronico}</div>}
                </div>
                <div>
                  <p className={getErrorClass('telefono')}>Telefono *</p>
                  <input className={`input-texto-esencial ${getErrorClass('telefono')}`}
                    placeholder='(555) 123-4567'
                    name='phone'
                    type='text'
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required />
                  {errors.telefono && <div className="error-message">{errors.telefono}</div>}
                </div>
              </div>
              <h5 className='txt-tittle'>Información de la caja</h5>
              <div className='container-mail-phone'>
                <div>
                  <p className={getErrorClass('paisDestino')}>Pais destino *</p>
                  <select name="destination_country" className={`input-texto-esencial-select ${getErrorClass('paisDestino')}`} value={paisDestino} onChange={handleCountryChange} required>
                    <option value="">Seleccione un país</option>
                    {Paises.map((pais, key) => (
                      <option key={key} value={pais.nombre}>{pais.nombre}</option>
                    ))}
                  </select>
                  {errors.paisDestino && <div className="error-message">{errors.paisDestino}</div>}
                </div>
                <div>
                  <p className={getErrorClass('tamanoSeleccionado')}>Tamaño *</p>
                  <select name="box_type" className={`input-texto-esencial-select ${getErrorClass('tamanoSeleccionado')}`} value={tamanoSeleccionado} onChange={(e) => setTamanoSeleccionado(e.target.value)} required>
                    <option value="">Seleccione un tamaño</option>
                    {tamanosDisponibles.map(([key, value]) => (
                      <option key={key} value={value}>{value}</option>
                    ))}
                  </select>
                  {errors.tamanoSeleccionado && <div className="error-message">{errors.tamanoSeleccionado}</div>}
                </div>
              </div>
              <h5 className='txt-tittle'>Información adicional</h5>
              <textarea name="additional_info" placeholder='¿Algún requerimiento especial?' value={infoAdicional} onChange={(e) => setInfoAdicional(e.target.value)} className={`input-adicional ${getErrorClass('infoAdicional')}`} />
              {errors.infoAdicional && <div className="error-message">{errors.infoAdicional}</div>}
              <div className='container-person'>
                <input type="submit" value="Enviar" className='btn-enviar-form' />
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  );
}
