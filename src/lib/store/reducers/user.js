import { user as actionTypes } from '../action-types';

const initialState = {
  authenticated: true,
  token: '',
  id: '',
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case actionTypes.LOGIN:
      return state;
    default:
      return initialState;
  }
};