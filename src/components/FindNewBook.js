import React from 'react';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import { Button, FlatList, ActivityIndicator, Text, View, TextInput, TouchableOpacity, Image  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class FindNewBook extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
        showList: false,
        showList2: false,
        isLoading: false,
        dataSource: ["", ""],
        text1:'',
        text2:'',
        lookupButton1: true,
        continue: false,
        book1Saved: false,
        book2Saved: false,
        // disabled: true,
        // disabled2: false
    }

  }
    
  componentDidMount(){
    this.resetBook1();
    this.resetBook2();
        this.setState({
          text1: '',
          text2: ''
        })
  }

  async resetBook1() {
    console.log("Reset was called");
    this.setState({
      book1Saved: false,
      continue: false
      })
    try {
      await AsyncStorage.removeItem('bookObject1');
      // const value = await AsyncStorage.getItem('bookObject1');
      // this.setState({myKey: value});
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }
  async resetBook2() {
    console.log("Reset was called");
    this.setState({
      book2Saved: false,
      continue: false
      })
      
    try {
      await AsyncStorage.removeItem('bookObject2');
      // const value = await AsyncStorage.getItem('bookObject2');
      // this.setState({myKey: value});
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }

  _bookLookUp1 = async () => {
    // this.setState({isLoading:true})
      //fetch
      let data = fetch('http://localhost:8765/find_book', {
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json'},
        method : 'POST',
        body: JSON.stringify({name: this.state.text1})
      })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
            showList: true,
            data: res,
            // isLoading: false
        })
        
      })
      .catch((err) => alert(err));

      
  }

  _bookLookUp2 = () => {
    //fetch
    let data = fetch('http://localhost:8765/find_book', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'},
      method : 'POST',
      body: JSON.stringify({name: this.state.text2})
    })
    .then((res) => res.json())
    .then((res) => {
      this.setState({
          showList: true,
          data: res,
      })
    })
    .catch((err) => alert(err));
}

  _clearAndSave1 = (userChoice) => {
        this.setState({
            text1: userChoice.title,
            showList1: false,
            // disabled: false,
            // disabled2: true
        })
        this.checkContinue();
        // Save into Async-storage
      let book = {
        asin: userChoice.asin,
        amazonURL: userChoice.amazonURL,
        description: userChoice.description,
        imageURL: userChoice.imageURL,
        title: userChoice.title,
        author: userChoice.author
      };
      AsyncStorage.setItem('bookObject1', JSON.stringify(book));
    
    console.log("State Changed from clear and save")
  }


_clearAndSave2 = (userChoice) => {
    console.log("clear and save 2");
    this.setState({
        text2: userChoice.title,
        showList2: false,
        // disabled2: false
    })
    this.checkContinue();
    // Save into Async-storage
    let book = {
      asin: userChoice.asin,
      amazonURL: userChoice.amazonURL,
      description: userChoice.description,
      imageURL: userChoice.imageURL,
      title: userChoice.title,
      author: userChoice.author
    };
    AsyncStorage.setItem('bookObject2', JSON.stringify(book));
    // Actions.attList({textOne: this.state.text1, textTwo: this.state.text2})
}

checkContinue(){
  if (this.state.book1Saved && this.state.book2Saved){
    this.setState({
      continue: true,
    })
  }
}

finalChoiceSubmission1(userChoice) {
    this._bookLookUp1()
    this.setState({
        // isLoading: false,
        text1: userChoice,
        showList1: true,
        book1Saved: true,
    })
  }

  finalChoiceSubmission2(userChoice) {
    this._bookLookUp2()
    this.setState({
        // isLoading: false,
        text2: userChoice,
        showList2: true,
        book2Saved: true,
    })
  }

  userChangeText1(text1){
    this.resetBook1();
    
    this.setState({
      text1: text1,
      book1Saved: false,
      })
  }

  userChangeText2(text2){
    this.resetBook2();

    this.setState({
      text2: text2,
      book2Saved: false,
      })
  }

  

  render(){
    return(
      <View style={{flex: 1, paddingTop:20}}>
          <Header headerText={'Bookbranch'} />
            <Text
                style = {{fontSize: 20, fontWeight: 'bold', marginTop: 220,marginLeft: 40}}>
                Step #1: Tell us your favorite 2 books you've read recently</Text>
            <TextInput
                style={{marginTop: 10, marginLeft: 30, height: 40, width: 300, borderColor: '#499920', borderWidth: 1}}
                placeholder=" Book #1 Search"
                placeholderTextColor="gray"
                value={this.state.text1}
                // editable={(this.state.disabled)} 
                // selectTextOnFocus={(this.state.disabled)}
                onSubmitEditing={() => this.finalChoiceSubmission1(this.state.text1)}
                onChangeText={(text1) => this.userChangeText1(text1) }
                
            />
            <TextInput
                style={{marginTop: 5, marginLeft: 30, height: 40, width: 300, borderColor: '#499920', borderWidth: 1}}
                placeholder=" Book #2 Search"
                placeholderTextColor="gray"
                value={this.state.text2}
                onSubmitEditing={() => this.finalChoiceSubmission2(this.state.text2)}
                onChangeText={(text2) => this.userChangeText2(text2) }
                
                // editable={(this.state.disabled2)} 
                // selectTextOnFocus={(this.state.disabled2)}
            />
            
        {(this.state.showList1) && <FlatList
          data={this.state.data}
          renderItem={({item}) => 
          
          <View>
          <Image
          style={{width: 50, height: 50}}
          source={{uri: item.imageURL}}
        />
            <Button
                title={item.title}
                onPress={ () => this._clearAndSave1(item)  }
                >
            </Button>
          </View>
          }
        />}
        {(this.state.showList2) && <FlatList
          data={this.state.data}
          renderItem=
                {({item}) => 
                
                <View>
                <Image
                style={{width: 50, height: 50}}
                source={{uri: item.imageURL}}
              />
                  <Button
                      title={item.title}
                      onPress={ () => this._clearAndSave2(item)  }
                      >
                  </Button>
                </View>
                }  
        />}
        {(this.state.continue) && <Button
                title={"Continue"}
                onPress={ () => Actions.attList({textOne: this.state.text1, textTwo: this.state.text2}) }
                >
            </Button>}
            {this.state.isLoading && <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
            </View>}
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
        marginTop: 230,
        position: 'absolute'       
    },

    flatListResults:{
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: 'red',
    },

    TextStyle1: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 50,
        position: 'absolute'
    }
};
