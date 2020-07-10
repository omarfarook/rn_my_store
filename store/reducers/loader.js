/* eslint-disable prettier/prettier */
import { TOGGLE_SPLASH_SCREEN } from '../actions/loader';

const initialState = {
  isSplashScreen: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SPLASH_SCREEN:
      return {
        ...state,
        isSplashScreen: action.flag,
      };
  }

  return state;
};
