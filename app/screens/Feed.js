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
            return <Icon name="home" size={28} color={tintColor} />;}
        },
    },
    Search:{
        screen: Search,
        navigationOptions:({navigation}) => ({
            tabBarIcon: ({ tintColor }) => {
                return <Icon name='search' size={30} color={ tintColor } />;
            }        
        }),
    },
    Add:{
        screen:Add,
        navigationOptions:({navigation}) => ({
            tabBarIcon: ({ tintColor }) => {
                return <Icon name='camera' size={26} color={ tintColor } />;
            }        
        }),
    },
    Profile:{
        screen:Profile,
        navigationOptions:({navigation}) => ({
            tabBarIcon: ({ tintColor }) => {
                return <Icon name='user-circle-o' size={30} color={ tintColor } />;
            }        
        }),
    },
    Notif:{
        screen:Notif,
        navigationOptions:({navigation}) => ({
            tabBarIcon: ({ tintColor }) => {
                return <Icon name='bell' size={30} color={ tintColor } />;
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
        width: 30,
        height: 30,
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