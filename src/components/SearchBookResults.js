import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import Card from './Card';
import ArrowCard from './ArrowCard';
import ArrowCardTwo from './ArrowCardTwo';
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
            <Text style = {{marginTop: 15,fontSize: 25 ,color: 'black', fontWeight: 'bold', alignSelf: 'center'}}>Results </Text>
            <Card></Card>

            <TouchableOpacity>
                <ArrowCard>
                    <Image source={require('bookbranch/img/arrow_left.png')} style={{marginTop: 120, marginRight: 5,width: 50}}></Image>
                </ArrowCard>
            </TouchableOpacity>

            <TouchableOpacity>
                <ArrowCardTwo>
                    <Image source={require('bookbranch/img/arrow_right.png')} style={{marginTop: 120, marginLeft: 5,width: 50}}></Image>
                </ArrowCardTwo>
            </TouchableOpacity>

            <View style = {styles.ButtonStyle1}>
                    <TouchableOpacity onPress={() => Actions.BookResultsDetail({BookResults: 'Placeholder'})}>
                        <Text style = {styles.TextStyle1}>Amazon</Text>
                    </TouchableOpacity>
            </View>
            <View style = {styles.ButtonStyle2}>
                    <TouchableOpacity onPress={() => Actions.Main()}>
                        <Text style = {styles.TextStyle2}>HomePage</Text>
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
        width: 90,
        elevation: 1,
        marginLeft: 200,
       // marginRight: 5,
        marginTop: 650,
        position: 'absolute'       
    },

    TextStyle1: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 4,
        marginLeft: 16,
        position: 'absolute'
    },

    ButtonStyle2: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#D3D3D3',
        height: 30,
        width: 90,
        elevation: 1,
        marginLeft: 95,
       // marginRight: 5,
        marginTop: 650,
        position: 'absolute'       
    },

    TextStyle2: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 4,
        marginLeft: 8,
        position: 'absolute'
    }
};

export default SearchBookResults;