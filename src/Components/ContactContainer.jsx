import React, { useState } from 'react';
import Heading from './Heading';
import InputField from './InputField';
import Button from './Button';

export default function ContactContainer() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', destino: 'París', viaje: 'individual', mensaje: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log(form); };
  const handleReset = () => setForm({ nombre: '', email: '', telefono: '', destino: 'París', viaje: 'individual', mensaje: '' });

  return (
    <section className="home-section container my-5">
      <Heading level={2}>Contactanos</Heading>
      <form onSubmit={handleSubmit} className="form-contacto w-100 style-form" style={{ maxWidth: '400px' }}>
        <InputField id="nombre" name="nombre" label="Nombre" value={form.nombre} onChange={handleChange} required />
        <InputField id="email" name="email" label="Email" type="email" value={form.email} onChange={handleChange} required />
        <InputField id="telefono" name="telefono" label="Teléfono" type="tel" value={form.telefono} onChange={handleChange} required />

        <div className="mb-3 w-100">
          <label className="form-label d-block text-start">Destino de interés</label>
          <select name="destino" className="form-select" value={form.destino} onChange={handleChange}>
            {["París", "Tokio", "Roma", "New York", "Londres", "Rio de Janeiro", "Barcelona", "Dubai", "El cairo", "Sydney"].map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="mb-3 w-100 text-start">
          <label className="form-label d-block">Tipo de viaje</label>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="viaje" value="individual" checked={form.viaje === 'individual'} onChange={handleChange} /> Individual
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="viaje" value="familiar" checked={form.viaje === 'familiar'} onChange={handleChange} /> Familiar
            </label>
          </div>
        </div>

        <div className="mb-3 w-100 text-start">
          <label className="form-label">Mensaje</label>
          <textarea name="mensaje" className="form-control" rows="4" value={form.mensaje} onChange={handleChange}></textarea>
        </div>

        <div className="d-flex gap-2 w-100 mt-2 justify-content-center">
          <Button type="submit" variant="success">Enviar</Button>
          <Button type="button" variant="danger" onClick={handleReset}>Reset</Button>
        </div>
      </form>
    </section>
  );
}