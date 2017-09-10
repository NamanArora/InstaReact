import React, { Component } from 'react';
import { Text, Image, View, StyleSheet} from 'react-native';

export default class HomeItem extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
        <View style={styles.topBar}>
        <Text style={{color: 'white'}}>{this.props.username}</Text>
        </View>
        <View style={styles.photo}>
        <Image source={require('../images/logo.png')}/>
        </View>
        <View style={styles.bottomBar}>
        <Text style={{color: 'white'}}>COmments</Text>
        </View>
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    
  },
  topBar:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  bottomBar:{
    flex: 2,
    flexDirection: 'row',
    
  },
  photo:{
    flex:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});