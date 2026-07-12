import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import Button from './Button';
import GalleryImage from './GalleryImage';
import '../styles/galeria.css';

export default function Gallery({ imagenes }) {
  const [filtro, setFiltro] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  // Filtrado lógico de elementos en el cliente
  const imgsFiltradas = filtro === 'all' 
    ? imagenes 
    : imagenes.filter(img => img.cat === filtro);

  return (
    <div className="container my-5 text-center">
      <Heading level={2}>Galería de Viajes</Heading>
      
      <div className="filtros my-4">
        {['all', 'playa', 'ciudad', 'cultura'].map((cat) => (
          <Button 
            key={cat}
            variant={filtro === cat ? 'primary' : 'outline-primary'} 
            onClick={() => setFiltro(cat)}
          >
            {cat === 'all' ? 'Todos' : cat.charAt(0).toUpperCase() + cat.slice(1) + 's'}
          </Button>
        ))}
      </div>

      <div className="grid-galeria">
        {imgsFiltradas.map((img, idx) => (
          <GalleryImage 
            key={idx} 
            src={img.src} 
            onClick={() => setLightboxImg(img.src)} 
          />
        ))}
      </div>

      {/* Ventana Modal Lightbox para visualización */}
      {lightboxImg && (
        <div className="lightbox-maqueta" onClick={() => setLightboxImg(null)}>
          <button className="close-btn" onClick={() => setLightboxImg(null)}>&times;</button>
          <img className="lightbox-img" src={lightboxImg} alt="Vista ampliada" />
        </div>
      )}
    </div>
  );
}

Gallery.propTypes = {
  imagenes: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired
    })
  ).isRequired
};