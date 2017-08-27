import { StackNavigator, TabNavigator } from 'react-navigation';
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
  } from 'react-native';

  import Login from './../screens/Login';
  import {Feed} from './../screens/Feed';
  import Home from './../screens/Home';
  import Search from './../screens/Search';
  import Add from './../screens/Add';
  import Profile from './../screens/Profile';
  import Notif from './../screens/Notif';

   

  const insta = StackNavigator({
    Login: { screen: Login  },
    Feed: {screen: Feed},
    
  },
{
  headerMode: "none",
});


  
AppRegistry.registerComponent('insta', () => insta);