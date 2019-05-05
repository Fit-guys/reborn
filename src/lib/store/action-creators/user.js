import { user as actionTypes } from '../action-types';
import { post, Endpoints } from '../../networking';

export const logIn = () => {
  const type = actionTypes.LOGIN;

  return async (dispatch) => {
    const payload = await post(Endpoints.USER_REGISTER);

    dispatch({ type, payload });
  };
};

export const signUp = () => ({

});

export const logOut = () => ({

});

export const passForgot = () => ({

});

export const passChange = () => {

};
