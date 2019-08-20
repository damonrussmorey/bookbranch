/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends Component {
  state = {
    placeName: "",
    places: [],
    buttonTitle: 'Click to get a name from DB',
    usersIdx: 0
  };
  
  async testDB() {
    //run server.js on local machine
    //node server.js
    try {
      res = await fetch('http://159.65.97.145:8765')
      users = await res.json();
    } catch(e) {
      alert(e);
    }
    alert(users[Math.floor(Math.random() * users.length)].name);
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map(place => (
      <Text>{place}</Text>
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bookbranch</Text>
        <Text> Book Search #1 </Text>
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Book #1"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="Next ->"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
        </View>
        <View>
          {placesOutput}
        </View>
        <Button
          onPress = {this.testDB}
          title = {this.state.buttonTitle}
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
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput:{
    width: "50%",
    borderColor: "black", 
    borderWidth: 1,
    textAlign: 'center',
    margin:20
    
  },
  placeButton: {
    width: "30%"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'green'
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
});
