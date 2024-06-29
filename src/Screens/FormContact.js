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
  const [touched, setTouched] = useState({});

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

  const handleBlur = (field) => {
    setTouched({
      ...touched,
      [field]: true,
    });
    validateField(field);
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
    if (touched[e.target.name]) {
      validateField(e.target.name);
    }
  };

  const validateField = (field) => {
    let formErrors = { ...errors };
    switch (field) {
      case 'nombreCompleto':
        formErrors.nombreCompleto = !nombreCompleto ? 'Este campo es obligatorio' : '';
        break;
      case 'direccion':
        formErrors.direccion = !direccion ? 'Este campo es obligatorio' : '';
        break;
      case 'correoElectronico':
        formErrors.correoElectronico = !correoElectronico ? 'Este campo es obligatorio' : '';
        break;
      case 'telefono':
        formErrors.telefono = !telefono ? 'Este campo es obligatorio' : '';
        break;
      case 'paisDestino':
        formErrors.paisDestino = !paisDestino ? 'Este campo es obligatorio' : '';
        break;
      case 'tamanoSeleccionado':
        formErrors.tamanoSeleccionado = !tamanoSeleccionado ? 'Este campo es obligatorio' : '';
        break;
      default:
        break;
    }
    setErrors(formErrors);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!nombreCompleto) formErrors.nombreCompleto = 'Este campo es obligatorio';
    if (!direccion) formErrors.direccion = 'Este campo es obligatorio';
    if (!correoElectronico) formErrors.correoElectronico = 'Este campo es obligatorio';
    if (!telefono) formErrors.telefono = 'Este campo es obligatorio';
    if (!paisDestino) formErrors.paisDestino = 'Este campo es obligatorio';
    if (!tamanoSeleccionado) formErrors.tamanoSeleccionado = 'Este campo es obligatorio';
    return formErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    setTouched({
      nombreCompleto: true,
      direccion: true,
      correoElectronico: true,
      telefono: true,
      paisDestino: true,
      tamanoSeleccionado: true,
    });
    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
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
    }
  };

  const resetForm = () => {
    setNombreCompleto('');
    setDireccion('');
    setCorreoElectronico('');
    setTelefono('');
    setPaisDestino('');
    setInfoAdicional('');
    setErrors({});
    setTouched({});
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

  const getErrorClass = (field) => errors[field] && touched[field] ? 'input-error' : '';

  return (
    <>
      <NavBar />
      <div className='container-formulario'>
        <img className='Containder-logo' src={Banner} alt='Logo' />
        <div className='formulario'>
          <form className='form-submit' ref={form} onSubmit={sendEmail}>
            <h4 className='txt-tittle' style={{fontWeight:'bolder'}}>Informacion personal</h4>
            <div className='container-person'>
              <div>
                <p className={getErrorClass('nombreCompleto')}>Nombre completo *</p>
                <input
                  className={`input-texto ${getErrorClass('nombreCompleto')}`}
                  name='nombreCompleto'
                  placeholder='John Doe Smith Gonzalez'
                  type='text'
                  value={nombreCompleto}
                  onChange={handleChange(setNombreCompleto)}
                  onBlur={() => handleBlur('nombreCompleto')}
                  required
                />
              </div>
              <div>
                <p className={getErrorClass('direccion')}>Direccion *</p>
                <input
                  className={`input-texto ${getErrorClass('direccion')}`}
                  name='direccion'
                  placeholder='234 Maple Street'
                  type='text'
                  value={direccion}
                  onChange={handleChange(setDireccion)}
                  onBlur={() => handleBlur('direccion')}
                  required
                />
              </div>
              <div className='container-mail-phone'>
                <div>
                  <p className={getErrorClass('correoElectronico')}>Correo electronico *</p>
                  <input
                    className={`input-texto-esencial ${getErrorClass('correoElectronico')}`}
                    placeholder='johndoe@example.com'
                    name='correoElectronico'
                    value={correoElectronico}
                    onChange={handleChange(setCorreoElectronico)}
                    onBlur={() => handleBlur('correoElectronico')}
                    type='text'
                    required
                  />
                </div>
                <div>
                  <p className={getErrorClass('telefono')}>Telefono *</p>
                  <input
                    className={`input-texto-esencial ${getErrorClass('telefono')}`}
                    placeholder='(555) 123-4567'
                    name='telefono'
                    value={telefono}
                    onChange={handleChange(setTelefono)}
                    onBlur={() => handleBlur('telefono')}
                    type='text'
                    required
                  />
                </div>
              </div>
              <h5 className='txt-tittle'>Información de la caja</h5>
              <div className='container-mail-phone'>
                <div>
                  <p className={getErrorClass('paisDestino')}>Pais destino *</p>
                  <select
                    name='paisDestino'
                    className={`input-texto-esencial-select ${getErrorClass('paisDestino')}`}
                    value={paisDestino}
                    onChange={(e) => {
                      handleChange(setPaisDestino)(e);
                      handleCountryChange(e);
                    }}
                    onBlur={() => handleBlur('paisDestino')}
                  >
                    <option value=''>Seleccione un país</option>
                    {Paises.map((pais, key) => (
                      <option key={key} value={pais.nombre}>{pais.nombre}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <p className={getErrorClass('tamanoSeleccionado')}>Tamaño *</p>
                  <select
                    name='tamanoSeleccionado'
                    className={`input-texto-esencial-select ${getErrorClass('tamanoSeleccionado')}`}
                    value={tamanoSeleccionado}
                    onChange={handleChange(setTamanoSeleccionado)}
                    onBlur={() => handleBlur('tamanoSeleccionado')}
                  >
                    <option value=''>Seleccione un tamaño</option>
                    {tamanosDisponibles.map(([key, value]) => (
                      <option key={key} value={value}>{value}</option>
                    ))}
                  </select>
                </div>
              </div>
              <h5 className='txt-tittle'>Información adicional</h5>
              <textarea
                name='infoAdicional'
                placeholder='¿Algún requerimiento especial?'
                value={infoAdicional}
                onChange={handleChange(setInfoAdicional)}
                onBlur={() => handleBlur('infoAdicional')}
                className={`input-adicional ${getErrorClass('infoAdicional')}`}
              />
              <div className='container-person'>
                <input type='submit' value='Enviar' className='btn-enviar-form' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
