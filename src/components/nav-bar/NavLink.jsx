import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { Routes } from '../../app/constants';

const NavLink = ({ to, children, ...buttonProps }) => (
  <Button
    {...buttonProps}
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
