import React from 'react';
import '../estilos/form.css';
import Banner from '../Resources/Banner.svg';
import NavBar from '../Components/NavBar';
import useForm from '../hooks/useForm';
import FormField from '../Components/FormfField';
import SelectField from '../Components/SelectField';
import { Paises } from '../db/Paises';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";


export default function FormContact() {
  const {
    form,
    formState,
    tamanosDisponibles,
    errors,
    handleChange,
    handleCountryChange,
    sendEmail,
    getErrorClass,
  } = useForm();

  return (
    <>
      <NavBar />
      <div className="container-formulario">
        <section className='container-side-logo'>       
          <img className="Containder-logo" src={Banner} alt="Logo" />
          <h3 style={{paddingTop:'10px', fontWeight:'bolder'}}><BsFillTelephoneFill />+1 (305) 735-8577</h3>


          <h3 style={{paddingTop:'10px', fontWeight:'bolder'}}><IoLogoWhatsapp /> +1 (407) 728 - 1902</h3>
        </section>
        <div className="formulario">
          <form className="form-submit" ref={form} onSubmit={sendEmail}>
            <h5 className="txt-tittle">CONTACTANOS</h5>
            <div className="container-person">
              <FormField
                label="Nombre completo"
                name="name"
                value={formState.name}
                onChange={handleChange}
                error={errors.name}
              />
              <FormField
                label="Direccion"
                name="address"
                value={formState.address}
                onChange={handleChange}
                error={errors.address}
              />
              <div className="container-mail-phone">
                <FormField
                  label="Correo electronico"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormField
                  label="Telefono"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
              </div>
              <h5 className="txt-tittle">Información de la caja</h5>
              <div className="container-mail-phone">
                <SelectField
                  label="Pais destino"
                  name="destination_country"
                  value={formState.destination_country}
                  onChange={handleCountryChange}
                  options={Paises.map((pais) => pais.nombre)}
                  error={errors.destination_country}
                />
                <SelectField
                  label="Tamaño"
                  name="box_type"
                  value={formState.box_type}
                  onChange={handleChange}
                  options={tamanosDisponibles.map(([key, value]) => value)}
                  error={errors.box_type}
                />
              </div>
              <h5 className="txt-tittle">Información adicional</h5>
              <textarea
                name="additional_info"
                value={formState.additional_info}
                onChange={handleChange}
                className={`input-adicional ${getErrorClass('additional_info')}`}
              />
              {errors.additional_info && <div className="error-message">{errors.additional_info}</div>}
              <div className="container-person">
                <input type="submit" value="Enviar" className="btn-enviar-form2" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
