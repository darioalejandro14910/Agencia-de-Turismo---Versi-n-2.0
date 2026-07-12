import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

/**
 * Componente estructural que define la cuadrícula general de la One Page.
 */
export default function MainLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="d-flex flex-grow-1 w-100">
        <Sidebar />
        <main className="flex-grow-1 p-4 bg-light overflow-auto">
          {children} 
        </main>
      </div>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};