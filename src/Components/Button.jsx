import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, variant, type, onClick }) {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  variant: 'primary',
  type: 'button'
};