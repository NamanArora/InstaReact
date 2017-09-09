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
                  <Text style={styles.textLogo}>InstaReact</Text>
                  </View>
              <View style={styles.subContainer2}>
                  <TextInput placeholder="Username" placeholderTextColor='rgba(255,255,255,0.7)' />
                  <TextInput placeholder="Password" placeholderTextColor='rgba(255,255,255,0.7)' />
                  <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Feed')} background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={styles.button}>
                            <Text style={{color: 'white', fontWeight: '700'}}>Hello.</Text>
                            </View>
                        
                    </TouchableNativeFeedback>
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
    textLogo:{
        fontFamily: 'painter',
        color: 'white',
        fontSize: 50,
        fontWeight: '300',
        textAlign: 'center'
    },
    subContainer1 :{
        flex: 3,
        justifyContent: 'flex-end',
        backgroundColor: '#16a085'
    },
    subContainer2:{
        flex: 2,
        justifyContent: 'center',
        padding: 15,
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
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingVertical: 10,
        
    }
  });