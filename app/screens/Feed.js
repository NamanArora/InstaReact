import React from 'react';
import { StyleSheet, TabNavigator, Text, View, TextInput, Button, Alert, TouchableNativeFeedback,ScrollView, TouchableOpacity } from 'react-native';
import Home from './Home';
import Search from './Search';
import Add from './Add';
import Profile from './Profile';
import Notif from './Notif';


export default class Feed extends React.Component{
    render(){
        return(
            <View style={styles.container}>

            </View>
        );
    }
}

export const Feed= TabNavigator({
    Home:{screen: Home},
    Search:{screen: Search},
    Add:{screen:Add},
    Profile:{screen:Profile},
    Notif:{screen:Notif}
});

const styles = StyleSheet.create(
    {
        container: {
            flex : 1,
            backgroundColor: 'powderblue',
        },

    }
);