/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const StepIcon = ({
  icon, active, completed, error, story, onClick,
}) => {
  let color = 'gray';

  if (completed || active || story[story.length - 1].game_id >= (Number(icon) - 1)) {
    color = '#250E2B';
  }

  if (error) {
    color = 'red';
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={() => onClick(Number(icon) - 1)}
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
        cursor: 'pointer',
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
  story: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StepIcon;
