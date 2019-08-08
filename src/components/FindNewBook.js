import React from 'react';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import { Button, FlatList, ActivityIndicator, Text, View, TextInput, TouchableOpacity  } from 'react-native';

export default class FindNewBook extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
        showList: false,
        showList2: false,
        isLoading: true,
        dataSource: ["", ""],
        text1:'',
        text2:'',
        lookupButton1: true,
        continue: false
    }

  }

  componentDidMount(){
        this.setState({
          isLoading: false,
          text1: '',
          text2: ''
        })
  }

  _onPress1 = () => {
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
            data: res
        })
      })
      .catch((err) => alert(err));
  }

  _onPress2 = () => {
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
          data: res
      })
    })
    .catch((err) => alert(err));
}

  _clearAndSave1 = (userChoice) => {
        this.setState({
            text1: userChoice,
            showList1: false,
        })
    
    console.log("State Changed from clear and save")
  }


_clearAndSave2 = (userChoice) => {
    console.log("clear and save 2");
    this.setState({
        text2: userChoice,
        showList2: false,
        continue: true
    })
    Actions.attList({textOne: this.state.text1, textTwo: this.state.text2})
}

  onKeyPress1(userChoice) {
      console.log("keypress1")
    this._onPress1()
    this.setState({
        text1: userChoice,
        showList1: true,
    })
  }

  onKeyPress2(userChoice) {
    console.log("keypress2")
    this._onPress2()
    this.setState({
        text2: userChoice,
        showList2: true,
    })
  }

  

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

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
                
                onSubmitEditing={() => this.onKeyPress1(this.state.text1)}
                onChangeText={(text1) => this.setState({text1: text1})}
            />
            <TextInput
                style={{marginTop: 5, marginLeft: 30, height: 40, width: 300, borderColor: '#499920', borderWidth: 1}}
                placeholder=" Book #2 Search"
                placeholderTextColor="gray"
                onSubmitEditing={() => this.onKeyPress2(this.state.text2)}
                onChangeText={(text2) => this.setState({text2: text2})}
                value={this.state.text2}
            />
            
        {(this.state.showList1) && <FlatList
          data={this.state.data}
          renderItem={({item}) => 
          
            <Button
                title={item.title}
                onPress={ () => this._clearAndSave1(item.title)  }
                >
            </Button>}
          
          
        />}
        {(this.state.showList2) && <FlatList
          data={this.state.data}
          renderItem={({item}) => 
          
            <Button
                title={item.title}
                onPress={ () => this._clearAndSave2(item.title)  }
                >
            </Button>}
          
          
        />}
        {(this.state.continue) && <Button
                title={"Continue"}
                onPress={ () => Actions.attList({textOne: this.state.text1, textTwo: this.state.text2}) }
                >
            </Button>}
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
