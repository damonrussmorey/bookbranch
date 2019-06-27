/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor() {
    super();
    this.state = { open: false };
    //this.socket = new WebSocket('wss://159.65.97.145:8765');
    this.emit = this.emit.bind(this);
  }
  
  emit() {
    this.setState( prev => ({ open : !prev.open}))
    fetch('http://192.168.0.12:8765')
    .then(res => res.json())
    .then(users => alert(users[0].name));
  }
  /*
  componentDidMount() {
    this.socket.onopen = () => {
      this.socket.send('hi there');
    }

    this.socket.onmessage = (e) => {
      alert('recv: ' + e.message);
    }

    this.socket.onerror = (e) => {
      alert('error: ' + e.message);
    }

    this.socket.onclose = (e) => {
      alert('closed: ' + e.code, e.reason);
    }
  }*/

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          onPress = {this.emit}
          title = {this.state.open ? "off" : "on"}
          style = {styles.instructions}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'aqua'
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
});
