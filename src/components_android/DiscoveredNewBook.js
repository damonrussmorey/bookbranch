import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableNativeFeedback, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import { Platform } from 'react-native';
//import axios from 'axios'; // used for http requests

class DiscoveredNewBook extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        text1: '',
        text2: ''
    };
  }

  render() {
    return (
        <View>
            <Header headerText={'Bookbranch'} />
            <Text style = {{fontSize: 20, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>You Entered: </Text>
            <Text style = {{fontSize: 15, fontWeight: 'bold', marginTop: 5,marginLeft: 40}}>Book #1: <Text style = {{fontSize: 15, fontWeight: 'bold', marginTop: 5}}>{this.props.textOne}</Text></Text>
            <Text style = {{fontSize: 15, fontWeight: 'bold', marginTop: 5,marginLeft: 40}}>Book #2: <Text style = {{fontSize: 15, fontWeight: 'bold', marginTop: 5}}>{this.props.textTwo}</Text></Text>
            <Text
                style = {{fontSize: 20, fontWeight: 'bold', marginTop: 20,marginLeft: 5}}>
                We Recommend: </Text>
            <Text style = {{fontSize: 15, fontWeight: 'bold', marginTop: 5,marginLeft: 40}}>Placeholder</Text> 
        </View>
    );
  }
}

export default DiscoveredNewBook;