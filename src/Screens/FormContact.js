import React from 'react'
import '../estilos/form.css'

export default function HomePage() {
    return (
        <div>
            <div className='conatiner-logo'>

            </div>

            <div className='conatiner-formulario'>
                <h3>Informacion personal</h3>

                <form>
                    <div className='container-infoperso'>

                        <div className='nombres'>
                            <p>Nombre completo *</p>
                            <input type='text' required />
                        </div>

                        <div className='Direccion'>
                            <p>Direccion *</p>
                            <input type='text' required />
                        </div>

                        <div>

                            <div className='Correo'>
                                <p>Correo electronico *</p>
                                <input type='text' required />
                            </div>


                            <div className='Telefono'>
                                <p>Telefono *</p>
                                <input type='text' required />
                            </div>

                        </div>

                    </div>

                    <div className='info-caja'>
                        <h3>Informacion de la caja</h3>

                        <div className='conatiner-caja'>

                            <div className='tipo-caja'>
                                <p>Tipo caja</p>
                                <select name="select">
                                    <option value="value1">28x28x28</option>
                                    <option value="value2" selected>32x32x32x32</option>
                                    <option value="value3">48x48x48x48</option>
                                </select>
                            </div>

                            <div className='pais'>
                                <p>Pais</p>
                                <select name="select">
                                    <option value="value1">El Salvador</option>
                                    <option value="value2" selected>Mexico</option>
                                    <option value="value3">Colombia</option>
                                </select>
                            </div>

                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}