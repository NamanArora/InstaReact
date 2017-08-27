import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, TouchableNativeFeedback,ScrollView, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {

    static navigationOptions = {
        headerLeft: null,
        title: 'Welcome',
      };

    _loginButtonPress(){
        this.props.navigation.navigate('Feed');
    }
    
    render() {
      return ( 
        
          <Image source={require('../images/loginpage.jpg')} style={styles.container}>
              <View style={styles.logoContainer}>
                <Image source={require('../images/logo.png')} style={styles.logo} />
              </View>
              <View style={styles.form}>
            <TextInput autoCorrect={false} underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} placeholder="Username" placeholderTextColor='rgba(255,255,255,0.7)'/>
            <TextInput autoCorrect={false} underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} placeholder="Password" placeholderTextColor='rgba(255,255,255,0.7)'/>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Feed')}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
          </View>
          </Image>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        
    },
    logoContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    form:{
        flex:1,
        justifyContent: 'flex-end',
        padding: 15,
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
        backgroundColor: '#34495e',
        paddingVertical: 10,
        fontWeight: '700'
    }
  });