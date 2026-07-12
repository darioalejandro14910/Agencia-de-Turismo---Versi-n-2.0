import React from 'react';
import { 
  faLandmark, faCity, faUmbrellaBeach, faToriiGate, 
  faClock, faChurch, faBuilding, faWater, faMonument 
} from '@fortawesome/free-solid-svg-icons';
import DestinationCard from './Card';
import Heading from './Heading';

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

export default function DestinationsContainer() {
  return (
    <section className="container my-5 text-center">
      <Heading level={2}>Destinos Populares</Heading>
      <div className="contenedor-cards mt-4">
        {listaDestinos.map((destino, idx) => (
          <DestinationCard key={idx} {...destino} />
        ))}
      </div>
    </section>
  );
}