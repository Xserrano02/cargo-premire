import { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { Paises } from '../db/Paises.js';

const useForm = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    nombreCompleto: '',
    direccion: '',
    correoElectronico: '',
    telefono: '',
    paisDestino: '',
    tamanoSeleccionado: '',
    infoAdicional: ''
  });
  const [tamanosDisponibles, setTamanosDisponibles] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleCountryChange = (e) => {
    const paisSeleccionado = e.target.value;
    setFormState((prevState) => ({
      ...prevState,
      paisDestino: paisSeleccionado,
    }));
    const pais = Paises.find(pais => pais.nombre === paisSeleccionado);
    if (pais) {
      setTamanosDisponibles(Object.entries(pais.tamanos));
    } else {
      setTamanosDisponibles([]);
    }
    setFormState((prevState) => ({
      ...prevState,
      tamanoSeleccionado: '',
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formState.nombreCompleto) formErrors.nombreCompleto = 'Este campo no puede estar vacío';
    if (!formState.direccion) formErrors.direccion = 'Este campo no puede estar vacío';
    if (!formState.correoElectronico) formErrors.correoElectronico = 'Este campo no puede estar vacío';
    if (!formState.telefono) formErrors.telefono = 'Este campo no puede estar vacío';
    if (!formState.paisDestino) formErrors.paisDestino = 'Este campo no puede estar vacío';
    if (!formState.tamanoSeleccionado) formErrors.tamanoSeleccionado = 'Este campo no puede estar vacío';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then(() => {
        alertaOk();
        resetForm();
      }, (error) => {
        alertaFalse();
        resetForm();
      });
  };

  const resetForm = () => {
    setFormState({
      nombreCompleto: '',
      direccion: '',
      correoElectronico: '',
      telefono: '',
      paisDestino: '',
      tamanoSeleccionado: '',
      infoAdicional: ''
    });
    setErrors({});
  };

  const alertaOk = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El correo ha sido enviado exitosamente :)",
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

  return {
    form,
    formState,
    tamanosDisponibles,
    errors,
    handleChange,
    handleCountryChange,
    sendEmail,
    getErrorClass,
  };
};

export default useForm;
