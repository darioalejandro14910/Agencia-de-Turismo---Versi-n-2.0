import React, { useState } from 'react';
import Heading from './Heading';
import Button from './Button';
import GalleryImage from './GalleryImage';

const imagenesGaleria = [
  { src: "/img/ciudad1.jpg", cat: "ciudad" }, { src: "/img/ciudad2.jpg", cat: "ciudad" },
  { src: "/img/ciudad3.jpg", cat: "ciudad" }, { src: "/img/ciudad4.jpg", cat: "ciudad" },
  { src: "/img/ciudad5.jpg", cat: "ciudad" }, { src: "/img/ciudad6.jpg", cat: "ciudad" },
  { src: "/img/playa1.jpg", cat: "playa" }, { src: "/img/playa2.jpg", cat: "playa" },
  { src: "/img/playa3.jpg", cat: "playa" }, { src: "/img/playa4.jpg", cat: "playa" },
  { src: "/img/playa5.jpg", cat: "playa" }, { src: "/img/cultura1.jpg", cat: "cultura" },
  { src: "/img/cultura2.jpg", cat: "cultura" }, { src: "/img/cultura3.jpg", cat: "cultura" },
  { src: "/img/cultura4.jpg", cat: "cultura" }
];

export default function GalleryContainer() {
  const [filtro, setFiltro] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const imgsFiltradas = filtro === 'all' 
    ? imagenesGaleria 
    : imagenesGaleria.filter(img => img.cat === filtro);

  return (
    <section className="container my-5 text-center">
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

      {lightboxImg && (
        <div className="lightbox-maqueta" onClick={() => setLightboxImg(null)}>
          <button className="close-btn" onClick={() => setLightboxImg(null)}>&times;</button>
          <img className="lightbox-img" src={lightboxImg} alt="Vista previa de galería" />
        </div>
      )}
    </section>
  );
}