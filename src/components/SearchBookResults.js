import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardLarge from './CardLarge';
import HeaderBookResults from './HeaderBookResults';
import AsyncStorage from '@react-native-community/async-storage';
//import axios from 'axios'; // used for http requests

class SearchBookResults extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        text1: '',
        isLoading: true
    }
  }

  componentDidMount() {
    (async () => {
        let book1 = await AsyncStorage.getItem('bookObject1');
        book1 = JSON.parse(book1);
        let book2 = await AsyncStorage.getItem('bookObject2');
        book2 = JSON.parse(book2);
        let user = await AsyncStorage.getItem('userObject');
        user = JSON.parse(user);
        
        let res = await fetch('http://159.65.97.145:8765/magic', {
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                book1:        book1,
                rating1:      this.props.Book1RankOverall,
                attr1id1:     this.props.Book1Attribute1,
                attr1val1:    this.props.Book1Rank1,
                attr1id2:     this.props.Book1Attribute2,
                attr1val2:    this.props.Book1Rank2,
                attr1id3:     this.props.Book1Attribute3,
                attr1val3:    this.props.Book1Rank3,
                book2:        book2,
                rating2:      this.props.Book2RankOverall,
                attr2id1:     this.props.book2attributes1,
                attr2val1:    this.props.Book2Rank1,
                attr2id2:     this.props.book2attributes2,
                attr2val2:    this.props.Book2Rank2,
                attr2id3:     this.props.book2attributes3,
                attr2val3:    this.props.Book2Rank3,
                user_id:      user.id
            })
        });
        res = await res.json();
        
        this.setState({
            isLoading: false,
            Results: res,
            i: 0
        });
    })();
  
  }

  render() {
    if(this.state.isLoading) {
        return(
            <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
            </View>
        )
    } else {
    return (
        <View>
            <HeaderBookResults headerText={'Bookbranch'} />
            <Text style = {{marginTop: 15,fontSize: 25 ,color: 'black', fontWeight: 'bold', alignSelf: 'center'}}> {'Top ' + this.state.Results.length + ' Results' }</Text>   
            <CardLarge>
                <TouchableOpacity onPress={() => Linking.openURL('https://bookbran.ch/books/' + this.state.Results[this.state.i].urlTitle)}>
                    <Image 
                    style={{width: '100%', height: '100%'}}
                    source = {{uri: this.state.Results[this.state.i].imageURL}}>
                    </Image>
                </TouchableOpacity>
                
            </CardLarge>

            <View style = {{marginTop: 380, marginLeft: 0.1, position: 'absolute'}}>
                <TouchableOpacity onPress = {() => {
                this.setState((prev) => {return {i: Math.max(0, (prev.i - 1))}})
            }}>
                    <Text style = {{fontWeight: 'bold', fontSize: 60,}}> {"<"} </Text>
                </TouchableOpacity>
            </View>

            <View style = {{marginTop: 380, marginLeft: 320, position: 'absolute'}}>
             <TouchableOpacity onPress = {() => {
                this.setState((prev) => {return {i: Math.min((prev.i + 1), prev.Results.length-1)}})
            }}>
                    <Text style = {{fontWeight: 'bold', fontSize: 60,}}> {">"} </Text>
             </TouchableOpacity>
            </View>

            <View style = {styles.ButtonStyle1}>
                    <TouchableOpacity onPress = {() => Linking.openURL(this.state.Results[this.state.i].amazonURL).catch((err)=>alert('bad'))}>
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
        marginTop: 625,
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
        marginTop: 625,
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
