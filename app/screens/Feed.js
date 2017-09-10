import React from 'react';
import Home from './Home';
import Search from './Search';
import Add from './Add';
import Profile from './Profile';
import Notif from './Notif';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, BackHandler } from 'react-native';

export const Feed= TabNavigator({
    Home:{screen: Home},
    Search:{screen: Search},
    Add:{screen:Add},
    Profile:{screen:Profile},
    Notif:{screen:Notif}
},
{
    tabBarPosition: 'bottom',
    tabBarOptions: {
            labelStyle: {
              fontSize: 12,
              fontWeight: 'bold'
            },
        style: {
            backgroundColor: '#e67e22',
        }
    }
});

const styles = StyleSheet.create(
    {
        container: {
            flex : 1,
        },

    }
);