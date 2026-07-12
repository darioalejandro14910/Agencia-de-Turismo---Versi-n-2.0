import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCompass, faTags, faStar, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      <aside className={`sidebar-custom ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Panel de Viajes</h3>
        </div>

        <div className="sidebar-widgets">
          <div className="widget-item">
            <h4><FontAwesomeIcon icon={faCompass} /> Descubrir</h4>
            <ul>
              <li><a href="#cards" onClick={toggleSidebar}>Últimas Ofertas</a></li>
              <li><a href="#galeria" onClick={toggleSidebar}>Tendencias</a></li>
            </ul>
          </div>

          <div className="widget-item">
            <h4><FontAwesomeIcon icon={faTags} /> Promociones</h4>
            <p>¡Hasta 30% OFF en paquetes seleccionados de invierno!</p>
          </div>

          <div className="widget-item">
            <h4><FontAwesomeIcon icon={faStar} /> Beneficios</h4>
            <ul>
              <li className="d-flex align-items-center gap-2 mb-1">
                <FontAwesomeIcon icon={faShieldAlt} /> Seguro Incluido
              </li>
              <li>Asistencia 24hs</li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}