import React, { Component } from 'react';
import Camera from 'react-native-camera';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

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
   this.camera.capture({metadata: options})
     .then((data) => console.log(data))
     .catch(err => console.error(err));

    // extract text
    var visionUrl = "https://vision.googleapis.com/v1/images:annotate?key="; // TODO API KEY
    var postBody = {
      "requests": [
        {
          "image": {
            "source": {
              "imageUri": "https://images.gr-assets.com/quotes/1387506524p8/2534.jpg" // TODO replace this text img with real data
            }
          },
          "features": [
            {
              "type": "TEXT_DETECTION",
              "maxResults": 100000
            }
          ]
        }
      ]
    };

    fetch(visionUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: postBody
    }).then(function(response) {
      console.log("Google Vision API response body -\n" + response.json());
    })

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
