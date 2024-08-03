import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import '../estilos/IconFloat.css';

const IconFloat = () => {
  return (
    <a href="https://wa.me/+14077281902" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
      <IoLogoWhatsapp size={50} />
    </a>
  );
}

export default IconFloat;
