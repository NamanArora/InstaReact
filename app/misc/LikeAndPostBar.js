import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Alert,TouchableHighlight } from 'react-native'

export default class LikeAndPostBar extends Component {

    _onPressButton(){
        Alert.alert("button");
    }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.view1} >
          <TouchableHighlight onPress={this._onPressButton}>
            <View style={styles.button}>
                <Text style={{fontWeight: 'bold'}}>Like</Text> 
            </View>
          </TouchableHighlight>
          </View>
          <View style={styles.view2} >
          <TouchableHighlight onPress={this._onPressButton}>
          <View style={styles.button}>
                <Text style={{fontWeight: 'bold'}}>Comment</Text> 
            </View>
          </TouchableHighlight>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create(
    {
        container:{
            flexDirection: 'row',
            flex: 1,
            height: 29,
        },
        button:{
            paddingVertical: 5,
            alignItems: 'center',
            backgroundColor: 'white',
        },
        view1:{
            flex: 1,
            backgroundColor: 'blue',
            height: 30
        },
        view2:{
            flex: 1,
            backgroundColor: 'green',
            height: 30
        }
    }
);