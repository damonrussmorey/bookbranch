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
        Results: [{imageURL: 'https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218-1080x608.jpg'}],
        i: 0
    }
  }

  componentDidMount() {
    let res = fetch('http://localhost:8765/magic', {
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          title1:       this.props.BookOne,
          rating1:      this.props.Book1RankOverall,
          attr1id1:     this.props.Book1Attribute1,
          attr1val1:    this.props.Book1Rank1,
          attr1id2:     this.props.Book1Attribute2,
          attr1val2:    this.props.Book1Rank2,
          attr1id3:     this.props.Book1Attribute3,
          attr1val3:    this.props.Book1Rank3,
          title2:       this.props.BookTwo,
          rating2:      this.props.Book2RankOverall,
          attr2id1:     this.props.book2attributes1,
          attr2val1:    this.props.Book2Rank1,
          attr2id2:     this.props.book2attributes2,
          attr2val2:    this.props.Book2Rank2,
          attr2id3:     this.props.book2attributes3,
          attr2val3:    this.props.Book2Rank3,
          user_id:      1
        })
      }, (err, res) => {
        res.JSON((err, res) => {
            this.setState(prev => {
                this.state.Results = res;
                this.state.i = 0;
            });
        /*
        [{imageURL: string,
            amazonURL: string
        }, ...]
        */
    })});
  }

  render() {
    return (
        <View>
            <Header headerText={'Bookbranch'} />
            <Text style = {{marginTop: 15,fontSize: 25 ,color: 'black', fontWeight: 'bold', alignSelf: 'center'}}>Results </Text>   
            <Card>
             <Image 
             style={{width: '100%', height: '100%'}}
             source = {{uri: this.state.Results[this.state.i].imageURL}}></Image>
            </Card>
            <TouchableOpacity onPress = {() => {
                this.setState(prev => this.state.i = (prev.i - 1) % prev.Results.length)
            }}>
                <ArrowCard>
                    <Image source={require('bookbranch/img/arrow_left.png')} style={{marginTop: 120, marginRight: 5,width: 50}}></Image>
                </ArrowCard>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {
                this.setState(prev => this.state.i = (prev.i + 1) % prev.Results.length)
            }}>
                <ArrowCardTwo>
                    <Image source={require('bookbranch/img/arrow_right.png')} style={{marginTop: 120, marginLeft: 5,width: 50}}></Image>
                </ArrowCardTwo>
            </TouchableOpacity>

            <View style = {styles.ButtonStyle1}>
                    <TouchableOpacity>
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
