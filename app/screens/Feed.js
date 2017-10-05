import React from 'react';
import Home from './Home';
import Search from './Search';
import Add from './Add';
import Profile from './Profile';
import Notif from './Notif';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Feed= TabNavigator({
    home:{
        screen: Home,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => {
            return <Icon name="home" size={25} color={tintColor} />;}
        },
    },
    Search:{
        screen: Search,
        navigationOptions:({navigation}) => ({
            tabBarIcon: ({ tintColor }) => {
                return <Icon name='search' size={25} color={ tintColor } />;
            }        
        }),
    },
    Add:{
        screen:Add,
        navigationOptions:({navigation}) => ({
            tabBarIcon: ({ tintColor }) => {
                return <Icon name='camera' size={23} color={ tintColor } />;
            }        
        }),
    },
    Profile:{
        screen:Profile,
        navigationOptions:({navigation}) => ({
            tabBarIcon: ({ tintColor }) => {
                return <Icon name='user-circle-o' size={25} color={ tintColor } />;
            }        
        }),
    },
    Notif:{
        screen:Notif,
        navigationOptions:({navigation}) => ({
            tabBarIcon: ({ tintColor }) => {
                return <Icon name='bell' size={25} color={ tintColor } />;
            }        
        }),
    }
},
{
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      iconStyle: {
        width: 25,
        height: 25,
      },
    }
});

const styles = StyleSheet.create(
    {
        container: {
            flex : 1,
        },

    }
);