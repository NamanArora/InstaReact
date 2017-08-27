import { StackNavigator, TabNavigator } from 'react-navigation';
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
  } from 'react-native';
  import Login from './../screens/Login';
  import Feed from './../screens/Feed';

  const insta = StackNavigator({
    Login: { screen: Login  },
    Feed: {screen: Feed},
    
  });

  
AppRegistry.registerComponent('insta', () => insta);