import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableOpacity, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './header';
//import axios from 'axios'; // used for http requests

class BookResultsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        text1: '',
    };
  }

  render() {
    return (
        <View>
            <Header headerText={'Bookbranch'} />
            <Text
                style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>
                Results for: </Text>
            <Text style = {{fontSize: 15, fontWeight: 'bold', marginTop: 5,marginLeft: 15}}>{this.props.BookResults}</Text>

            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 10,marginLeft: 5}}>Rating: <Text>Placeholder</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 10,marginLeft: 5}}>Attribute #1: <Text>Placeholder</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>Attribute #2: <Text>Placeholder</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>Attribute #3: <Text>Placeholder</Text></Text>

        </View>
    );
  }
}

export default BookResultsDetail;