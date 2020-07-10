import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShopNavigator from './ShopNavigator';
import * as splashScreen from '../store/actions/loader'
import StartupScreen from '../screens/static/StartupScreen'

const AppNavigator = () => {

  const isSplashScreen = useSelector(state => state.SplashLoader.isSplashScreen)
  const dispatch = useDispatch();

  setTimeout(() => dispatch(splashScreen.toggleSplash(false)), 3000);

  return (
    <>
      {isSplashScreen && <StartupScreen />}
      {!isSplashScreen && <ShopNavigator />}
    </>
  );
};

export default AppNavigator;
