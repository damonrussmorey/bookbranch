import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardLarge from './CardLarge';
import HeaderBookResults from './HeaderBookResults';
import AsyncStorage from '@react-native-community/async-storage';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class SearchBookResults extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        text1: '',
        isLoading: true,
        myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff',
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
        console.log(book1 + " overall: " + this.props.Book1RankOverall);
        console.log(book1 + " book1att1: " + this.props.Book1Attribute1);
        console.log(book1 + " bookrank1: " + this.props.Book1Rank1);
        console.log(book1 + " book1Attribute2: " + this.props.Book1Attribute2);
        console.log(book1 + " book1rank2: " + this.props.Book1Rank2);
        console.log(book1 + " book1rank3: " + this.props.Book1Rank3);
        console.log(book2 + " book1rankoveral: " + this.props.Book2RankOverall);
        console.log(book2 + " book2attr1: " + this.props.book2attributes1);
        console.log(book2 + " book2attr1: " + this.props.book2attributes1);
        console.log(book2 + " book2rank2: " + this.props.Book2Rank2);
        console.log(book2 + " book2attr3: " + this.props.book2attributes3);
        console.log(book2 + " book2rank3: " + this.props.Book2Rank3);
        
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
                attr2val1:    this.props.book2Rank1,
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

  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
  }

  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
  }

  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
  }

  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        this.setState(   );
        break;
      case SWIPE_DOWN:
        this.setState(   );
        break;
      case SWIPE_LEFT:
        this.setState( (prev) => {return {i: Math.min((prev.i + 1), prev.Results.length-1)}} );
        break;
      case SWIPE_RIGHT:
        this.setState( (prev) => {return {i: Math.max(0, (prev.i - 1))}}   );
        break;
    }
  }

  leftArrow(i){
    console.log("i:" + i);
    if(i == 0){
      return false;
    } else
      return true
  }

  rightArrow(i){
    console.log("right i:" + i);
    if(i > 8){
      return false;
    } else
      return true
  }

  render() {
    const config = {
        velocityThreshold: 0.1,
        directionalOffsetThreshold: 80
      };

        console.log((this.props.Book1Rank1) + (this.props.Book2Rank1))
        console.log((this.props.Book1Rank2) + (this.props.Book2Rank2))
        console.log(this.props.Book1Rank3 + this.props.Book2Rank3)
        console.log(this.props.Book1RankOverall + this.props.Book2RankOverall)

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
            {/* <Text>onSwipe callback received gesture: {this.state.gestureName}</Text> */}
            <Text style = {{marginTop: 15,fontSize: 25 ,color: 'black', fontWeight: 'bold', alignSelf: 'center'}}> {'Top ' + this.state.Results.length + ' Results' }</Text>   
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                onSwipeUp={(state) => this.onSwipeUp(state)}
                onSwipeDown={(state) => this.onSwipeDown(state)}
                onSwipeLeft={(state) => this.onSwipeLeft(state)}
                onSwipeRight={(state) => this.onSwipeRight(state)}
                config={config} >
                <CardLarge>
                    <TouchableOpacity onPress={() => Linking.openURL('https://bookbran.ch/books/' + this.state.Results[this.state.i].urlTitle)}>
                        <Image 
                        style={{width: '100%', height: '100%'}}
                        source = {{uri: this.state.Results[this.state.i].imageURL}}>
                        </Image>
                    </TouchableOpacity>
                </CardLarge>
            </GestureRecognizer>

            <View style = {{marginTop: 380, marginLeft: 0.1, position: 'absolute'}}>
                <TouchableOpacity onPress = {() => {
                this.setState((prev) => {return {i: Math.max(0, (prev.i - 1))}})
            }}>
                    {this.leftArrow(this.state.i) && <Text style = {{fontWeight: 'bold', fontSize: 60,}}> {"<"} </Text>}
                </TouchableOpacity>
            </View>

            <View style = {{marginTop: 380, marginLeft: 320, position: 'absolute'}}>
             <TouchableOpacity onPress = {() => {
                this.setState((prev) => {return {i: Math.min((prev.i + 1), prev.Results.length-1)}})
            }}>
                    {this.rightArrow(this.state.i) && <Text style = {{fontWeight: 'bold', fontSize: 60,}}> {">"} </Text>}
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
