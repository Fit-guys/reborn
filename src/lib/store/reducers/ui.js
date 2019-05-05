import { ui as actionTypes } from '../action-types';

const initialState = {
  authModalOpen: false,
};

export default (state = initialState, action) => {
  const { type, ...data } = action;

  switch (type) {
    case actionTypes.TOGGLE_AUTH_MODAL:
      return { ...state, ...data };
    default:
      return state;
  }
};
