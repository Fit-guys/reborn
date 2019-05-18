import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { Routes } from '../../app/constants';

const NavLink = ({ to, children, ...buttonProps }) => (
  <Button
    variant="outlined"
    color="primary"
    size="large"
    {...buttonProps}
    style={window.location.pathname === to ? { display: 'none !important', ...buttonProps.style } : (buttonProps.style || {})}
    href={to}
  >
    {children}
  </Button>
);

NavLink.propTypes = {
  to: PropTypes.oneOf(Object.values(Routes)).isRequired,
  children: PropTypes.any.isRequired,
};

export default NavLink;
