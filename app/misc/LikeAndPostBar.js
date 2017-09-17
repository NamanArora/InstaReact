import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class LikeAndPostBar extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Button />
          <Button />
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create(
    {
        container:{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: 'blue',
        },
    }
);