import React, { Component } from 'react';
import { Text, View,StyleSheet,FlatList } from 'react-native';
import NotifItem from './../adapters/NotifItem';

export default class Notif extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <NotifItem username={item.key} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: "#34495e"
    },
  }
);