import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import Api, { Endpoints } from '../../lib/networking';

function ResetProgressButton({ token }) {
  async function handleClick() {
    await Api.delete(Endpoints.DROP_PROGRESS, {
      Authorization: `Bearer ${token}`,
    });

    window.location.reload();
  }

  return (
    <Button
      onClick={handleClick}
      value="contained"
      style={{
        backgroundColor: 'red',
        color: 'white',
        margin: '10px 20px',
      }}
    >
      Скинути Прогрес
    </Button>
  );
}

ResetProgressButton.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapState = ({ user: { token } }) => ({ token });

export default connect(mapState)(ResetProgressButton);
