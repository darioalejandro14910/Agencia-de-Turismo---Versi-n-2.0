import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import NavDropdown from './NavDropdown';

export default function Navbar() {
  const opcionesDestinos = [
    { optionName: "Europa", optionUrl: "#cards" },
    { optionName: "América", optionUrl: "#cards" },
    { optionName: "Asia", optionUrl: "#cards" }
  ];

  const opcionesSoporte = [
    { optionName: "Preguntas Frecuentes", optionUrl: "#home" },
    { optionName: "Asistencia 24/7", optionUrl: "#contacto" }
  ];

  return (
    <nav className="navbar-custom">
      <div className="logo d-flex align-items-center gap-2">
        <FontAwesomeIcon icon={faPlane} style={{ fontSize: '1.5rem', color: 'white' }} />
        <h2>TravelPro</h2>
      </div>
      
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <NavDropdown titulo="Destinos" options={opcionesDestinos} />
        <li><a href="#galeria">Galería</a></li>
        <NavDropdown titulo="Soporte" options={opcionesSoporte} />
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  ); 
}