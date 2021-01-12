import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import SplashScreen from '../screens/SplashScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator initialRouteName="Splash">

      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{header: () => null}}
      />

      <Stack.Screen
        name="Login"
        component={SignInScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;