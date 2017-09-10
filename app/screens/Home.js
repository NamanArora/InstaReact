import React, { Component } from 'react';
import { Text , View,StyleSheet,BackHandler, FlatList } from 'react-native';
import HomeItem from '../adapters/HomeItem';
export default class Home extends Component {
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
          renderItem={({item}) => <HomeItem username={item.key} />}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: "white"
    },
  }
);