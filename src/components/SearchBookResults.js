import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableOpacity, TextInput, Image, Linking} from 'react-native';
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
    this.i = 0;
  }

  render() {
    return (
        <View>
            <Header headerText={'Bookbranch'} />
            <Text style = {{marginTop: 15,fontSize: 25 ,color: 'black', fontWeight: 'bold', alignSelf: 'center'}}>Results </Text>
            <Card>
              <Image source={{uri:this.prop.Results[i].imageURL}}/>
            </Card>

            <TouchableOpacity onPress = {() => {
              this.i = (this.i-1)%this.prop.Results.length;
            }}>
                <ArrowCard>
                    <Image source={require('bookbranch/img/arrow_left.png')} style={{marginTop: 120, marginRight: 5,width: 50}}></Image>
                </ArrowCard>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {
              this.i = (this.i+1) % this.prop.Results.length;
              
            }}>
                <ArrowCardTwo>
                    <Image source={require('bookbranch/img/arrow_right.png')} style={{marginTop: 120, marginLeft: 5,width: 50}}></Image>
                </ArrowCardTwo>
            </TouchableOpacity>

            <View style = {styles.ButtonStyle1}>
                    <TouchableOpacity onPress={() => Linking.openURL(this.props.res[this.i].amazonURL);}>
      /*
      () => Actions.BookResultsDetail({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, book2attributes1: this.props.book2attributes1, book2attributes2: this.props.book2attributes2, book2attributes3: this.props.book2attributes3, Book2Rank1: this.props.Book2Rank1, Book2Rank2: this.props.Book2Rank2, Book2Rank3: this.props.Book2Rank3, Book2RankOverall: this.props.Book2RankOverall })}>
      */
                        <Text style = {styles.TextStyle1}>Amazon</Text>
                    </TouchableOpacity>
            </View>
            <View style = {styles.ButtonStyle2}>
                    <TouchableOpacity onPress={() => Actions.popTo('Main')}>
                        <Text style = {styles.TextStyle2}>Start Over</Text>
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
