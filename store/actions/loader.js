export const TOGGLE_SPLASH_SCREEN = 'TOGGLE_SPLASH_SCREEN';

export const toggleSplash = flag => {
  return {type: TOGGLE_SPLASH_SCREEN, flag: flag};
};
