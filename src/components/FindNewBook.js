import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TextInput, TouchableOpacity  } from 'react-native';
import Header from './header';
import { Actions } from 'react-native-router-flux';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
        isLoading: true,
        dataSource: ["", ""],
        text1:'',
        text2:''
    }

  }

  componentDidMount(){
        this.setState({
          isLoading: false,
          // text1: '',
          // text2: ''
        })
  }

  handleChangeName = (textInput) => {
    console.log("You typed");
    // this.setState({text1: "your new prop"})
   }
   
  _search = () =>{
    
  }



  render(){
    const dataObj = [
      {title: 'Text', key: '1'},
      {title: 'Text 2', key: '2'},
      {title: 'Text 3', key: '3'},
    ];

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
                onChangeText={(text1) => this.setState({text1})}
                value1={this.state.text1}
            />
            <TextInput
                style={{marginTop: 5, marginLeft: 30, height: 40, width: 300, borderColor: '#499920', borderWidth: 1}}
                placeholder=" Book #2 Search"
                placeholderTextColor="gray"
                onChangeText={ this.handleChangeName(this.state.text2)}
                value2={this.state.text2}
            />
            <View style = {styles.ButtonStyle1}>
                    {/* <TouchableOpacity onPress={() => Actions.attList({textOne: this.state.text1, textTwo: this.state.text2})}> */}
                    <TouchableOpacity onPress={ this._search() }>
                        <Text style = {styles.TextStyle1}>Next</Text>
                    </TouchableOpacity>
            </View>
            <Text>{"\n\n\n\n\n\n\n\n\n"}</Text>
            <FlatList
              data={dataObj}
              renderItem={({ item }) => <Text>{item.title}</Text>}
            />
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
