import React from 'react';
import MainLayout from './Components/MainLayout';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

// Iconos FontAwesome para el mapeo dinámico
import { 
  faLandmark, faCity, faUmbrellaBeach, faToriiGate, 
  faClock, faChurch, faBuilding, faWater, faMonument 
} from '@fortawesome/free-solid-svg-icons';

// Array de datos de destinos para las props de las tarjetas
const listaDestinos = [
  { img: "/img/roma.jpg", name: "Roma", desc: "Historia y cultura milenaria.", icon: faLandmark },
  { img: "/img/newyork.jpg", name: "New York", desc: "La ciudad que nunca duerme.", icon: faCity },
  { img: "/img/riodejaneiro.jpg", name: "Río de Janeiro", desc: "Playas y carnaval.", icon: faUmbrellaBeach },
  { img: "/img/paris.jpg", name: "París", desc: "Romance y elegancia.", icon: faLandmark },
  { img: "/img/tokio.jpg", name: "Tokio", desc: "Tecnología y tradición.", icon: faToriiGate },
  { img: "/img/londres.jpg", name: "Londres", desc: "Historia y modernidad.", icon: faClock },
  { img: "/img/barcelona.jpg", name: "Barcelona", desc: "Arte y arquitectura.", icon: faChurch },
  { img: "/img/dubai.jpg", name: "Durbaí", desc: "Lujo y modernidad.", icon: faBuilding },
  { img: "/img/sydney.jpg", name: "Sydney", desc: "Playas y naturaleza.", icon: faWater },
  { img: "/img/cairo.jpg", name: "El Cairo", desc: "Misterio y antigüedad.", icon: faMonument }
];

// Array de imágenes para inyectar como props a la Galería
const imagenesGaleria = [
  { src: "/img/ciudad1.jpg", cat: "ciudad" }, { src: "/img/ciudad2.jpg", cat: "ciudad" },
  { src: "/img/ciudad3.jpg", cat: "ciudad" }, { src: "/img/ciudad4.jpg", cat: "ciudad" },
  { src: "/img/ciudad5.jpg", cat: "ciudad" }, { src: "/img/playa1.jpg", cat: "playa" }, 
  { src: "/img/playa2.jpg", cat: "playa" }, { src: "/img/playa3.jpg", cat: "playa" }, 
  { src: "/img/playa4.jpg", cat: "playa" }, { src: "/img/playa5.jpg", cat: "playa" }, 
  { src: "/img/cultura1.jpg", cat: "cultura" }, { src: "/img/cultura2.jpg", cat: "cultura" }, 
  { src: "/img/cultura3.jpg", cat: "cultura" }, { src: "/img/cultura4.jpg", cat: "cultura" }
];

export default function App() {
  return (
    <MainLayout>
      {/* Sección Inicio */}
      <section id="home">
        <Hero 
          titulo="Descubrí el mundo con nosotros"
          eslogan="Viajes únicos, experiencias inolvidables"
          textoBoton="Reservar ahora"
          imagenUrl="/img/banner.jpg"
          imagenNombre="Banner principal de viajes"
        />
      </section>

      {/* Sección Destinos */}
      <section id="cards" className="container my-5 text-center">
        <h2 className="mb-4">Destinos Populares</h2>
        <div className="contenedor-cards mt-4">
          {listaDestinos.map((destino, idx) => (
            <Card key={idx} {...destino} />
          ))}
        </div>
      </section>

      {/* Sección Galería */}
      <section id="galeria">
        <Gallery imagenes={imagenesGaleria} />
      </section>

      {/* Sección Contacto */}
      <section id="contacto">
        <Contact />
      </section>
    </MainLayout>
  );
}