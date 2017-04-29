import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
const fileName = 'https://images.gr-assets.com/quotes/1387506524p8/2534.jpg';
import  Camera from 'react-native-camera';

export default class iosApp extends Component {
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
  takePicture() {
   const options = {};
   //options.location = ...
   this.camera.capture({metadata: options})
     .then((data) => console.log(data))
     .catch(err => console.error(err));
 }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('iosApp', () => iosApp);
