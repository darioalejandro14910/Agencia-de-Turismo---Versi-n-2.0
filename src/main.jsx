import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Cambiar .js por .jsx

// Importación local de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importación de tus estilos globales dentro de src/styles/
import './styles/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);