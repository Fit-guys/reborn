import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Button } from '@material-ui/core';

const NavBar = ({ authenticated }) => {
  console.log(authenticated);

  return (
    <AppBar>
      <Button />
    </AppBar>
  );
};

NavBar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default NavBar;
