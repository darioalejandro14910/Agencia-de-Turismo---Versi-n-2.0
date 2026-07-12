import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <div className="footer-content">
        <div className="footer-info">
          <p>
            <FontAwesomeIcon icon={faPlane} className="me-1" /> &copy; {anioActual} TravelPro. Todos los derechos reservados.
          </p>
        </div>
        <div className="footer-links">
          <a href="#terminos">Términos de Servicio</a>
          <a href="#privacidad">Política de Privacidad</a>
          <a href="#soporte">Ayuda</a>
        </div>
        <div className="footer-contact">
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="me-1" /> contacto@travelpro.com
          </p>
        </div>
      </div>
    </footer>
  );
}