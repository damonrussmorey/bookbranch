//The tree background image is taken from this open source website: https://www.pexels.com/photo/countryside-dawn-daylight-environment-286305/

import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, ImageBackground, TextInput, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import AsyncStorage from '@react-native-community/async-storage';
import bcrypt from 'react-native-bcrypt'
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
// import { saveData, fetchData } from './asyncStorage';

class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        email: '',
        username: '',
        password: '',
        loading: true
    };
  }

  componentDidMount() {
    //alert('rawr');
    (async () => {
      //await AsyncStorage.removeItem('userObject');
      let user = await AsyncStorage.getItem('userObject');
      if(user) {
        Actions.Main({username: user.name})
      } else {
        this.setState({
          loading: false
        });
      }
    })();
  }

  Authenticate = () => {
    //check if fields are populated
    if(!this.state.email || !this.state.username || !this.state.password) {
      alert('Please fill out the form');
      return;
    }
    let user = {
      email: this.state.email,
      username: this.state.username,
      hash: '',
      id: -1
    };
    let res, verified = false;

    //ask backend if email already in use
    res = fetch('http://159.65.97.145:8765/user_info', {
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
      //if user email exists, verify that the password is correct
      if(res.id != -1) {
        //check the hash
        verified = bcrypt.compareSync(this.state.password, res.hash);
        user.id = res.id
        //If all good, move on to other screens
        if(verified) {
          AsyncStorage.setItem('userObject', JSON.stringify(user));
          Actions.Main();
        } else {
          alert('Invalid login, try again');
        }


      //otherwise add the new user
      } else {
        verified = true;
        user.hash = bcrypt.hashSync(this.state.password, 10);
        res = fetch('http://159.65.97.145:8765/new_user', {
          headers: {
              'content-type': 'application/json',
              Accept: 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(res => {
          if(res.id == -1) {
            verified = false;
          }
          user.id = res.id;
          //If all good, move on to other screens
          if(verified) {
            AsyncStorage.setItem('userObject', JSON.stringify(user));
            Actions.Main({username: user.name});
          } else {
            alert('Invalid login, try again');
          }

        });
      }
    });
  }

  render() {
    if(!this.state.loading)
    return (
      <ImageBackground source={require('bookbranch/img/dawn-daylight.jpg')} style={{width: '100%', height: '100%'}}>
        <View>
            <Header headerText={'Bookbranch'} />
            <Text
                style = {{fontSize: 20, fontWeight: 'bold', marginTop: 5,marginLeft: 65, color: 'black'}}>
                Welcome to Bookbranch!</Text>

            <TextInput
                style={{opacity: 0.70,backgroundColor: '#ffffff',marginTop: 10, marginLeft: 30, height: 40, width: 300, borderColor: 'black', borderWidth: 1}}
                placeholder=" Email"
                placeholderTextColor="gray"
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
            />
            <TextInput
                style={{opacity: 0.70,backgroundColor: '#ffffff', marginLeft: 30, height: 40, width: 300, borderColor: 'black', borderWidth: 1}}
                placeholder=" Name"
                placeholderTextColor="gray"
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
            />
            <TextInput
                style={{opacity: 0.70,backgroundColor: '#ffffff',marginLeft: 30, height: 40, width: 300, borderColor: 'black', borderWidth: 1}}
                placeholder=" Password"
                secureTextEntry = {true}
                placeholderTextColor="gray"
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
            />

            <LoginButton
                readPermissions={["public_profile","email"]}
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            console.log("login has error: " + result.error);
                        } else if (result.isCancelled) {
                            console.log("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    const infoRequest = new GraphRequest(
                                        '/me?fields=id,name,email',
                                        null,
                                        this._responseInfoCallback
                                    );
                                    // Start the graph request.
                                    new GraphRequestManager().addRequest(infoRequest).start();
                                }
                            )
                        }
                    }
                }
                onLogoutFinished={() => console.log("logout.")}/>

                <View style = {styles.ButtonStyle3}>
                    <TouchableOpacity onPress={this.Authenticate.bind(this)}>
                        <Text style = {styles.TextStyle3}>Register</Text>
                    </TouchableOpacity>
                </View>                
        </View>
      </ImageBackground>
    );
    else
      return(
            <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
            </View>
        );
    render
  }
  _responseInfoCallback = async (error, result) => {
      if (error) {
          alert('Error fetching data: ' + error.toString());
      } else {
          // This is where you would get the users information to login/register
          let res = await fetch('http://localhost:8765/insert_facebook', {
              headers: {
                  'content-type': 'application/json',
                  Accept: 'application/json'},
              method : 'POST',
              body: JSON.stringify({
                facebook_id: result.id,
                name: result.name,
                email: result.email})
          });
          res = await res.json();


          if(res.id != -1) {
              console.log("login with facebook");
              //alert('id: ' + res.id + '\nname: '+ res.name + '\nemail: ' + result.email);
              await AsyncStorage.setItem('userObject', JSON.stringify({id: res.id, username: res.name}));
              Actions.Main();
          }
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
        width: 140,
        elevation: 1,
        marginLeft: 220,
        marginRight: 5,
        marginTop: 210,
        position: 'absolute'       
    },

    ButtonStyle2: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#D3D3D3',
        height: 30,
        width: 140,
        elevation: 1,
        marginLeft: 220,
        marginRight: 5,
        marginTop: 270,
        position: 'absolute'       
    },

    ButtonStyle3: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#D3D3D3',
        height: 40,
        width: 110,
        elevation: 1,
        marginLeft: 220,
        marginRight: 5,
        marginTop: 230,
        position: 'absolute'  
    },

    TextStyle1: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 50,
        position: 'absolute'
    },

    TextStyle2: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 40,
        position: 'absolute'
    },

    TextStyle3: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
        marginLeft: 14,
        position: 'absolute'
    }
};

export default LogIn;
