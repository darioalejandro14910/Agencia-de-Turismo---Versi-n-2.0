import React from 'react';
import PropTypes from 'prop-types';

export default function GalleryImage({ src, alt, onClick }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      loading="lazy" 
      onClick={onClick} 
      style={{ cursor: 'pointer' }} 
    />
  );
}

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

GalleryImage.defaultProps = {
  alt: 'Fotografía de viaje'
};