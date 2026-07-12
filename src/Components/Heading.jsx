import React from 'react';
import PropTypes from 'prop-types';

export default function Heading({ level, children }) {
  const Tag = `h${level}`;
  return <Tag>{children}</Tag>;
}

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node.isRequired
};

Heading.defaultProps = {
  level: 2
};