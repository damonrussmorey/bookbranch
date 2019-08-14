import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import { Button, FlatList, ActivityIndicator, Text, View, TextInput, TouchableOpacity, Image  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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
          editable: true,
          editable2: true,
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
        console.log("Reset 1 was called");
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
        console.log("Reset 2 was called");
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
        console.log("Book Look up 1: isloading true and disabled2 true")
        this.setState({
          isLoading:true,
          editable2:true,
          continue: false
        })
          //fetch
          let res = await fetch('http://159.65.97.145:8765/keyword', {
            headers: {
              'content-type': 'application/json',
              Accept: 'application/json'},
            method : 'POST',
            body: JSON.stringify({keyword_search: this.state.text1})
          });
          res = await res.json();
          
          if(res.response != -1){
            console.log("response is not -1");
            this.setState({
                showList: true,
                data: res,
                // isLoading: false
            })
          }
          
          
      }
    
      _bookLookUp2 = async () => {
        this.setState({
          isLoading:true,
          editable:true,
          continue: false
        })
     
          //fetch
          let res = await fetch('http://159.65.97.145:8765/keyword', {
            headers: {
              'content-type': 'application/json',
              Accept: 'application/json'},
            method : 'POST',
            body: JSON.stringify({keyword_search: this.state.text2})
          });
          res = await res.json();
          
          if(res.response != -1){
            console.log("response is not -1");
            this.setState({
                showList: true,
                data: res,
                // isLoading: false
            })
          }
          
      }
    
    finalChoiceSubmission1 = (userChoice) => {
      console.log("F submission 1")
            this.setState({
                text1: userChoice.title,
                showList1: false,
                editable: false,
                editable2:true
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
      }
    
    
      finalChoiceSubmission2 = (userChoice) => {
        console.log("F submission 2")
        this.setState({
            text2: userChoice.title,
            showList2: false,
            editable: true,
            editable2:true
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
    }
    
    checkContinue(){
      console.log("check continue")
      if (this.state.book1Saved && this.state.book2Saved){
        this.setState({
          continue: true,
        })
      }
    }
    
    bookList1(userChoice) {
    
      console.log("Book list 1")
        this._bookLookUp1()
        this.setState({
            isLoading: false,
            text1: userChoice,
            showList1: true,
            book1Saved: true,
            editable2:false,
        })
      }
    
      bookList2(userChoice) {
        console.log("Book list 2")
        this._bookLookUp2()
        this.setState({
            isLoading: false,
            text2: userChoice,
            showList2: true,
            book2Saved: true,
            editable:false,
            
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

  render() {
    return (
        <View>
            <Header headerText={'Bookbranch'} />
            <Text
                style = {{fontSize: 20, fontWeight: 'bold', marginTop: 140,marginLeft: 40}}>
                Step #1: Tell us your favorite 2 books you've read recently</Text>
            <TextInput
                style={{marginTop: 10, marginLeft: 30, height: 40, width: 300, borderColor: '#499920', borderWidth: 1}}
                placeholder=" Book #1 Search"
                placeholderTextColor="gray"
                value={this.state.text1}
                editable={(this.state.editable)} 
                selectTextOnFocus={(this.state.editable)}
                onSubmitEditing={() => this.bookList1(this.state.text1)}
                onChangeText={(text1) => this.userChangeText1(text1) }
            />
            <TextInput
                style={{marginTop: 5, marginLeft: 30, height: 40, width: 300, borderColor: '#499920', borderWidth: 1}}
                placeholder=" Book #2 Search"
                placeholderTextColor="gray"
                value={this.state.text2}
                onSubmitEditing={() => this.bookList2(this.state.text2)}
                onChangeText={(text2) => this.userChangeText2(text2) }
                
                editable={(this.state.editable2)} 
                selectTextOnFocus={(this.state.editable2)}
            />

        {/* Book List for Book #1 */}
        {(this.state.showList1) 
        &&
        <FlatList style={{marginBottom: hp('70%'), borderBottomColor:'black'}}

          data={this.state.data}
          renderItem={({item}) => 
          
          <View style={{
              flex:1, 
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              
          }}>
          <Image
          style={{width: 50, height: 50}}
          source={{uri: item.imageURL}}
        />
            <Button
            style={{width: 50, height: 100}}
                title={item.title}
                onPress={ () => this.finalChoiceSubmission1(item)  }
                >
            </Button>
          </View>
          }
        />}

        {/* Book List for Book #2 */}
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
                      onPress={ () => this.finalChoiceSubmission2(item)  }
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
        width: 80,
        elevation: 1,
        marginLeft: 250,
       // marginRight: 5,
        marginTop: 360,
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

// export default FindNewBook;