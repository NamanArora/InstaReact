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

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
          <Text>Hello, Chat App!</Text>
          <Button
            onPress={() => navigate('Chat')}
            title="Chat with Lucy"
          />
        </View>
      );
    }
  }

  class ChatScreen extends React.Component {
    static navigationOptions = {
      title: 'Chat with Lucy',
    };
    render() {
      return (
        <View>
          <Text>Chat with Lucy</Text>
        </View>
      );
    }
  }

  const insta = StackNavigator({
    Login: { screen: Login  },
    
    
  });

  const tabApp = TabNavigator({
      Yolo: {screen: Feed},
  }
  );
  
AppRegistry.registerComponent('insta', () => insta);