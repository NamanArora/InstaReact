import React, { Component,Dimensions }  from 'react';

import { Text, View,StyleSheet } from 'react-native';
import Camera from 'react-native-camera';

export default class Add extends Component {

  takePicture(){
    this.camera.capture()
        .then((data)=> console.log(data))
        .catch(err => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
           ref={(cam) => {
             this.camera = cam;
           }}
           style={styles.preview}
           aspect={Camera.constants.Aspect.fill}>
           <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
       </Camera>
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