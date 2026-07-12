import React, { useState } from 'react';
import Heading from './Heading';
import Button from './Button';
import '../styles/contacto.css';

export default function Contact() {
  // Estado único para estructurar el formulario controlado
  const estadoInicial = { 
    nombre: '', 
    email: '', 
    telefono: '', 
    destino: 'París', 
    viaje: 'individual', 
    mensaje: '' 
  };

  const [form, setForm] = useState(estadoInicial);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Manejo del Envío: Prevención por defecto e impresión limpia en consola
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    console.log("✈️ Datos del Formulario Enviados:", form); 
    alert("¡Formulario enviado con éxito! Revisa la consola.");
  };

  // Manejo del Reseteo de campos del estado
  const handleReset = () => {
    setForm(estadoInicial);
    console.log("🔄 Formulario reseteado a los valores iniciales.");
  };

  return (
    <div className="container my-5 text-center">
      <Heading level={2}>Contactanos</Heading>
      <form onSubmit={handleSubmit} className="form-contacto style-form mx-auto" style={{ maxWidth: '400px' }}>
        
        <div className="mb-3 w-100 text-start">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input id="nombre" name="nombre" type="text" className="form-control" value={form.nombre} onChange={handleChange} required />
        </div>

        <div className="mb-3 w-100 text-start">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
        </div>

        <div className="mb-3 w-100 text-start">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input id="telefono" name="telefono" type="tel" className="form-control" value={form.telefono} onChange={handleChange} required />
        </div>

        <div className="mb-3 w-100 text-start">
          <label className="form-label d-block">Destino de interés</label>
          <select name="destino" className="form-select" value={form.destino} onChange={handleChange}>
            {["París", "Tokio", "Roma", "New York", "Londres", "Rio de Janeiro", "Barcelona", "Dubai", "El cairo", "Sydney"].map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="mb-3 w-100 text-start">
          <label className="form-label d-block">Tipo de viaje</label>
          <div className="form-check form-check-inline">
            <input type="radio" id="individual" className="form-check-input" name="viaje" value="individual" checked={form.viaje === 'individual'} onChange={handleChange} />
            <label htmlFor="individual" className="form-check-label">Individual</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" id="familiar" className="form-check-input" name="viaje" value="familiar" checked={form.viaje === 'familiar'} onChange={handleChange} />
            <label htmlFor="familiar" className="form-check-label">Familiar</label>
          </div>
        </div>

        <div className="mb-3 w-100 text-start">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea id="mensaje" name="mensaje" className="form-control" rows="4" value={form.mensaje} onChange={handleChange}></textarea>
        </div>

        <div className="d-flex gap-2 w-100 mt-2 justify-content-center">
          <Button type="submit" variant="success">Enviar</Button>
          <Button type="button" variant="danger" onClick={handleReset}>Reset</Button>
        </div>
      </form>
    </div>
  );
}