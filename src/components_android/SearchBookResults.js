import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableNativeFeedback, TextInput, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import Card from './Card';
import ArrowCard from './ArrowCard';
import ArrowCardTwo from './ArrowCardTwo';
import { Platform } from 'react-native';
//import axios from 'axios'; // used for http requests

class SearchBookResults extends Component {
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
            <Text style = {{fontSize: 20 ,color: 'black', fontWeight: 'bold', marginLeft: 5}}>Results for: </Text>
            <Text style = {{fontSize: 15 ,color: 'black', fontWeight: 'bold', marginLeft: 20, marginTop: 10}}>{this.props.BookSearch}</Text>
            <Card></Card>

            <TouchableNativeFeedback>
                <ArrowCard>
                    <Image source={require('bookbranch/img/arrow_left.png')} style={{marginTop: 120, marginRight: 5,width: 50}}></Image>
                </ArrowCard>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback>
                <ArrowCardTwo>
                    <Image source={require('bookbranch/img/arrow_right.png')} style={{marginTop: 120, marginLeft: 5,width: 50}}></Image>
                </ArrowCardTwo>
            </TouchableNativeFeedback>

            <View style = {styles.ButtonStyle1}>
                    <TouchableNativeFeedback onPress={() => Actions.BookResultsDetail({BookResults: 'Placeholder'})}>
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
        marginLeft: 152,
       // marginRight: 5,
        marginTop: 665,
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

export default SearchBookResults;