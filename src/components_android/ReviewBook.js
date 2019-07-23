import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableNativeFeedback, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import { Platform } from 'react-native';
//import axios from 'axios'; // used for http requests

class ReviewBook extends Component {
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
                style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 30}}>
                Enter The Book Name To Review:</Text>
            <TextInput
                style={{marginTop: 10, marginLeft: 30, height: 40, width: 300, borderColor: '#499920', borderWidth: 1}}
                placeholder=" Book Search"
                placeholderTextColor="gray"
                onChangeText={(text1) => this.setState({text1})}
                value1={this.state.text1}
            />
            <View style = {styles.ButtonStyle1}>
                    <TouchableNativeFeedback onPress={() => Actions.attList({BookReview: this.state.text1})}>
                        <Text style = {styles.TextStyle1}>Next</Text>
                    </TouchableNativeFeedback>
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
        width: 140,
        elevation: 1,
        marginLeft: 190,
       // marginRight: 5,
        marginTop: 160,
        position: 'absolute'       
    },

    TextStyle1: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 50,
        position: 'absolute'
    }
};

export default ReviewBook;