import React from 'react';

export default function InputField({ id, label, type = 'text', name, value, onChange, required = false }) {
  return (
    <div className="mb-3 w-100 text-start">
      <label htmlFor={id} className="form-label">{label}</label>
      <input 
        id={id} 
        name={name} 
        type={type} 
        className="form-control"
        value={value} 
        onChange={onChange} 
        required={required} 
      />
    </div>
  );
}