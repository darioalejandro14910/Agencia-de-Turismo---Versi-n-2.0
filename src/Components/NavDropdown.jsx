import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function NavDropdown({ titulo, options }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li 
      className="nav-dropdown" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="dropdown-title">{titulo} ▾</span>
      {isOpen && (
        <ul className="dropdown-menu-custom">
          {options.map((opt, idx) => (
            <li key={idx}>
              <a href={opt.optionUrl}>{opt.optionName}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

NavDropdown.propTypes = {
  titulo: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      optionName: PropTypes.string.isRequired,
      optionUrl: PropTypes.string.isRequired
    })
  ).isRequired
};