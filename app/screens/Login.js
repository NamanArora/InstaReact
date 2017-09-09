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
          <View style={styles.container}>
              <View style={styles.subContainer1}>
                  </View>
              <View style={styles.subContainer2}>
                  </View>   
              <View style={styles.subContainer3}>
                  </View>    
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
        
    },
    subContainer1 :{
        flex: 3,
        backgroundColor: '#16a085'
    },
    subContainer2:{
        flex: 2,
        backgroundColor: '#e67e22'

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
        color: 'white',
        backgroundColor: '#34495e',
        paddingVertical: 10,
        fontWeight: '700'
    }
  });