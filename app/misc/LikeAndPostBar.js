import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Alert,TouchableHighlight } from 'react-native'

export default class LikeAndPostBar extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.view1} />
          
          <View style={styles.view2} />
      </View>
    )
  }
}

const styles = StyleSheet.create(
    {
        container:{
            flexDirection: 'row',
            flex: 1,

        },

        view1:{
            flex: 1,
            backgroundColor: 'blue',
            justifyContent: 'flex-start'
        },
        view2:{
            flex: 1,
            backgroundColor: 'green'
        }
    }
);