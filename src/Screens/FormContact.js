import React from 'react'
import '../estilos/form.css'

export default function HomePage() {
  return (
    <div className='container-formulario'>
      <div className='Containder-logo'>

      </div>

      <div className='formulario'>

        <form>
          <h3>Informacion personal</h3>

          <div className='container-person'>
            <div >
              <p>Nombre completo *</p>
              <input className='input-texto' type='text' required />
            </div>


            <div>
              <p>Direccion *</p>
              <input className='input-texto' type='text' required />
            </div>

            <div className='container-mail-phone'>
              <div>
                <p>Correo electronico *</p>
                <input className='input-texto-esencial' type='text' required />
              </div>

              <div>
                <p>Telefono *</p>
                <input className='input-texto-esencial' type='text' required />
              </div>

            </div>

          </div>

          <div className='container-person'>
            <h3>Información de la caja</h3>

            <div className='container-mail-phone'>

              <div>
                <p>Telefono *</p>
                <div className='select-box'>
                  <select name="select" className='input-texto-esencial-select'>
                    <option value="value1">Value 1</option>
                    <option value="value2" selected>Value 2</option>
                    <option value="value3">Value 3</option>
                  </select>
                </div>

              </div>

              <div>
                <div>
                  <p>Telefono *</p>
                  <select name="select" className='input-texto-esencial-select'>
                    <option value="value1">Value 1</option>
                    <option value="value2" selected>Value 2</option>
                    <option value="value3">Value 3</option>
                  </select>
                </div>

              </div>


            </div>
          </div>


          <div className='container-person'>

            <h3>Información adicional</h3>

            <input type='text' className='input-adicional' />

          </div>

          <div className='container-person'>
            <input type="submit" value="Enviar" className='btn-enviar-form' />
          </div>


        </form>

      </div>
    </div>
  )
}