import React from 'react';
import PropTypes from 'prop-types';
import '../styles/home.css';

export default function Hero({ titulo, eslogan, textoBoton, imagenNombre, imagenUrl }) {
  return (
    <div className="home-section container my-4 text-center">
      <div className="contenido-home mb-4">
        <h1>{titulo}</h1>
        <p className="lead">{eslogan}</p>
        <button className="btn btn-primary px-4 py-2 mt-2">
          {textoBoton}
        </button>
      </div>
      <div className="home-image">
        <img src={imagenUrl} alt={imagenNombre} />
      </div>
    </div>
  );
}

Hero.propTypes = {
  titulo: PropTypes.string,
  eslogan: PropTypes.string,
  textoBoton: PropTypes.string,
  imagenNombre: PropTypes.string,
  imagenUrl: PropTypes.string
};