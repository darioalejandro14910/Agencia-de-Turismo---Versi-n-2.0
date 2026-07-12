import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import '../styles/cards.css';

/**
 * Componente Card Reutilizable con Validación de Propiedades
 */
export default function Card({ img, name, desc, icon }) {
  return (
    <div className="card-maqueta">
      <img src={img} alt={name} />
      <h3 className="mt-3">
        <FontAwesomeIcon icon={icon} className="me-2" /> 
        {name}
      </h3>
      <p className="my-2">{desc}</p>
      <div className="p-3 mt-auto">
        <Button variant="outline-primary">Ver más</Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
};