import React, { Component } from 'react';
import { Text, Image, View, StyleSheet} from 'react-native';
import LikeAndPostBar from './../misc/LikeAndPostBar';

export default class HomeItem extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.topBar}>
        <Image  style={styles.icon} source={require('../images/fb.png')} />
        <Text style={{color: 'black', marginLeft: 5, fontSize: 20}}>{this.props.username}</Text>
        </View>
        <Image  style={styles.photo} source={require('../images/flower.jpg')} />
        <View style={styles.bottomBar}>
          <LikeAndPostBar />
        <Text style={{color: 'black'}}>Show all comments</Text>
        </View>
        <View
  style={{
    paddingTop: 5,
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
    height: 550,
    width: 412,
    paddingLeft: 5,
    paddingTop: 5,
    paddingRight: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    
  },
  topBar:{
    flex:1,
    flexDirection: 'row',
    paddingVertical: 5,
    backgroundColor: 'white',
    
  },
  icon: {
    height: 27,
    width: 27,
    borderWidth: 1,
    borderRadius: 75,
    resizeMode: 'cover'
  },
  bottomBar:{
    flex: 1,
    
  },
  photo:{
    height:460,
    width:402,
    resizeMode: 'cover' 
    
  },
});