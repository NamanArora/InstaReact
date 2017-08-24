import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableNativeFeedback,ScrollView, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
      };

    _loginButtonPress(){
        this.props.navigation.navigate('Feed');
    }
    
    render() {
      return ( 
        
          <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Image source={require('../images/logo.png')} style={styles.logo} />
              </View>
              <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Username" placeholderTextColor='rgba(255,255,255,0.7)'/>
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor='rgba(255,255,255,0.7)'/>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Feed')}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
          </View>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 15,
        backgroundColor: '#8e44ad'
    },
    logoContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    form:{
        flex:1,
        justifyContent: 'flex-end',
        
    },
    logo: {
        height:400,
        width:400,
        
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        color: '#FFF',
        marginBottom: 10
    },
    button:{
        textAlign: 'center',
        alignItems: 'center',
        color: '#FFF',
        backgroundColor: '#9b59b6',
        paddingVertical: 10,
        fontWeight: '700'
    }
  });