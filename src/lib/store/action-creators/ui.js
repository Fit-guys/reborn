/* eslint-disable import/prefer-default-export */
import { ui as actionTypes } from '../action-types';

export const toggleAuthModal = () => async (dispatch, getState) => dispatch({
  type: actionTypes.TOGGLE_AUTH_MODAL,
  authModalOpen: !getState().ui.authModalOpen,
});
