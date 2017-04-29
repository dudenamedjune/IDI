/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import keys from './IDIHackathon-a33b9dcfefb4.json';
const Vision = require('@google-cloud/vision');
const projectId = keys.project_id;
const visionClient = Vision({
  projectId: projectId
});
const fileName = 'https://images.gr-assets.com/quotes/1387506524p8/2534.jpg';

export default class iosApp extends Component {
  componentDidMount(){
    visionClient.detectFulltext(fileName)
      .then((results) => {
        const labels = results[0];
        console.log('Labels: ');
        labels.forEach((label) => console.log(label));
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('iosApp', () => iosApp);
