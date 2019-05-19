import React from 'react';
import PropTypes from 'prop-types';

import star from './zvezda.svg';

const Star = () => (
  <img style={{ width: '50px', height: '50px' }} src={star} alt="sttaaa" />
);

const createStars = num => new Array(num).fill(0).map(() => <Star key="star" />);

function Stars({ rank }) {
  switch (rank) {
    case 'Учень':
      return createStars(1);
    case 'Студент':
      return createStars(2);
    case 'Джуніор':
      return createStars(3);
    case 'Мідл':
      return createStars(4);
    case 'Сеньйор':
      return createStars(5);
    case 'Бос':
      return createStars(6);
    default:
      return createStars(1);
  }
}

Stars.propTypes = {
  rank: PropTypes.string,
};

export default Stars;
