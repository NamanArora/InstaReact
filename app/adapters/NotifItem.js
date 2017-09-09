import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class NotifItem extends Component {
  render() {
    return (
      <View>
        <Text> Random notif for {this.props.username} </Text>
      </View>
    )
  }
}