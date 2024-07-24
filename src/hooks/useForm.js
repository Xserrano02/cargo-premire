import { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { Paises } from '../db/Paises.js';

const useForm = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    destination_country: '',
    box_type: '',
    additional_info: ''
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
      destination_country: paisSeleccionado,
    }));
    const pais = Paises.find(pais => pais.nombre === paisSeleccionado);
    if (pais) {
      setTamanosDisponibles(Object.entries(pais.tamanos));
    } else {
      setTamanosDisponibles([]);
    }
    setFormState((prevState) => ({
      ...prevState,
      box_type: '',
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formState.name) formErrors.name = 'Este campo no puede estar vacío';
    if (!formState.address) formErrors.address = 'Este campo no puede estar vacío';
    if (!formState.email) formErrors.email = 'Este campo no puede estar vacío';
    if (!formState.phone) formErrors.phone = 'Este campo no puede estar vacío';
    if (!formState.destination_country) formErrors.destination_country = 'Este campo no puede estar vacío';
    if (!formState.box_type) formErrors.box_type = 'Este campo no puede estar vacío';
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
      name: '',
      address: '',
      email: '',
      phone: '',
      destination_country: '',
      box_type: '',
      additional_info: ''
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
