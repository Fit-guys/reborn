import React from 'react';
import PropTypes from 'prop-types';

const StepIcon = ({
  icon, active, completed, error,
}) => {
  let color = 'gray';

  if (completed || active) {
    color = '#250E2B';
  }

  if (error) {
    color = 'red';
  }

  return (
    <div
      style={{
        width: '70px',
        height: '70px',
        color: 'white',
        backgroundColor: color,
        borderRadius: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2.2em',
      }}
    >
      {icon}
    </div>
  );
};

StepIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default StepIcon;
