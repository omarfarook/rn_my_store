import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import AboutUs from '../screens/static/AboutUs'
import ContactUs from '../screens/static/ContactUs'
import * as Colors from '../constants/Colors'

const Stack = createStackNavigator();
// import { Platform, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
// // import { Ionicons } from '@expo/vector-icons';

// import Home from '../screens/static/home'
// import AboutUs from '../screens/static/AboutUs';
// import ContactUs from '../screens/static/ContactUs';
// import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'red'
  },
  // headerTitleStyle: {
  //   fontFamily: 'open-sans-bold'
  // },
  // headerBackTitleStyle: {
  //   fontFamily: 'open-sans'
  // },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'My Store'
};

// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: Home
//     },
//     AboutUs: {
//       screen: AboutUs
//     },
//     ContactUs: ContactUs
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: defaultStackNavOptions
//   }
// );

// export default createAppContainer(AppNavigator);

export default ShopNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={HomeScreen}
      />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
    </Stack.Navigator>
  );
}
