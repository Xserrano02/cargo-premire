import React from 'react';
import '../estilos/form.css';
import Banner from '../Resources/Banner.svg';
import NavBar from '../Components/NavBar';
import useForm from '../hooks/useForm';
import FormField from '../Components/FormfField';
import SelectField from '../Components/SelectField';
import { Paises } from '../db/Paises';

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
        <img className="Containder-logo" src={Banner} alt="Logo" />
        <div className="formulario">
          <form className="form-submit" ref={form} onSubmit={sendEmail}>
            <h5 className="txt-tittle">CONTACTANOS</h5>
            <div className="container-person">
              <FormField
                label="Nombre completo"
                name="nombreCompleto"
                value={formState.name}
                onChange={handleChange}
                error={errors.name}
              />
              <FormField
                label="Direccion"
                name="direccion"
                value={formState.direccion}
                onChange={handleChange}
                error={errors.direccion}
              />
              <div className="container-mail-phone">
                <FormField
                  label="Correo electronico"
                  name="correoElectronico"
                  value={formState.correoElectronico}
                  onChange={handleChange}
                  error={errors.correoElectronico}
                />
                <FormField
                  label="Telefono"
                  name="telefono"
                  value={formState.telefono}
                  onChange={handleChange}
                  error={errors.telefono}
                />
              </div>
              <h5 className="txt-tittle">Información de la caja</h5>
              <div className="container-mail-phone">
                <SelectField
                  label="Pais destino"
                  name="paisDestino"
                  value={formState.paisDestino}
                  onChange={handleCountryChange}
                  options={Paises.map((pais) => pais.nombre)}
                  error={errors.paisDestino}
                />
                <SelectField
                  label="Tamaño"
                  name="tamanoSeleccionado"
                  value={formState.tamanoSeleccionado}
                  onChange={handleChange}
                  options={tamanosDisponibles.map(([key, value]) => value)}
                  error={errors.tamanoSeleccionado}
                />
              </div>
              <h5 className="txt-tittle">Información adicional</h5>
              <textarea
                name="infoAdicional"
                value={formState.infoAdicional}
                onChange={handleChange}
                className={`input-adicional ${getErrorClass('infoAdicional')}`}
              />
              {errors.infoAdicional && <div className="error-message">{errors.infoAdicional}</div>}
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
