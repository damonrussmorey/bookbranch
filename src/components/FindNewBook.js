import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

//import axios from 'axios'; // used for http requests

class FindNewBook extends Component {
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
            <Text
                style = {{fontSize: 20, fontWeight: 'bold', marginTop: 220,marginLeft: 40}}>
                Step #1: Tell us your favorite 2 books you've read recently</Text>
            <TextInput
                style={{marginTop: 10, marginLeft: 30, height: 40, width: 300, borderColor: '#499920', borderWidth: 1}}
                placeholder=" Book #1 Search"
                placeholderTextColor="gray"
                onChangeText={(text1) => this.setState({text1})}
                value1={this.state.text1}
            />
            <TextInput
                style={{marginTop: 5, marginLeft: 30, height: 40, width: 300, borderColor: '#499920', borderWidth: 1}}
                placeholder=" Book #2 Search"
                placeholderTextColor="gray"
                onChangeText={(text2) => this.setState({text2})}
                value2={this.state.text2}
            />
            <View style = {styles.ButtonStyle1}>
                    <TouchableOpacity onPress={() => Actions.attList({textOne: this.state.text1, textTwo: this.state.text2})}>
                        <Text style = {styles.TextStyle1}>Next</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = {

    ButtonStyle1: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#D3D3D3',
        height: 30,
        width: 80,
        elevation: 1,
        marginLeft: 250,
       // marginRight: 5,
        marginTop: 440,
        position: 'absolute'       
    },

    TextStyle1: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 4,
        marginLeft: 20,
        position: 'absolute'
    }
};

export default FindNewBook;