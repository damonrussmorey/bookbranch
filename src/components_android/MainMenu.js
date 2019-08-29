//The tree background image is taken from this open source website: https://www.pexels.com/photo/countryside-dawn-daylight-environment-286305/

import React, {Component}from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TouchableNativeFeedback, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';
import HeaderLogout from './headerLogout.js';
import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class MainMenu extends Component {

    componentDidMount(){
        this.fetchData();
    }
    
    constructor(props) {
        super(props);
        this.state = { 
            username: ''
        };
      }

    fetchData = async () => {
        let userObject = await AsyncStorage.getItem('userObject');
        let data = JSON.parse(userObject);
        this.setState({
            username: data.username
        });
    }

    async resetKey() {
        try {
          await AsyncStorage.removeItem('userObject');
          const value = await AsyncStorage.getItem('userObject');
          Actions.LogIn();
        } catch (error) {
        }
      }

    render(){
    return (
        <View>
            <ImageBackground source={require('bookbranch/img/dawn-daylight.jpg')} style={{width: '100%', height: '100%'}}>
            <HeaderLogout headerText={'Bookbranch'} />
            <Text style = {{fontSize: 30, fontWeight: 'bold', alignSelf: 'center', color: 'white', marginTop: hp('4%')}}>Hi {this.state.username}!</Text>
                <View style = {styles.ButtonStyle1}>
                <TouchableOpacity onPress={() => Actions.FindNewBook()} >
                        <Text  style = {styles.TextStyle1}>Find Your Next {"\n"} Great Read!</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
  }
};
const styles = {

    ButtonStyle1: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#499920',
        height: hp('10%'),
        width: wp('30%'),
        elevation: 1,
        marginLeft: wp('60%'), //220,
        marginRight: wp('3%'), //5,
        marginTop: hp('40%'), //290,
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
        zIndex: 1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#D3D3D3',
        height: 30,
        width: 140,
        elevation: 1,
        marginLeft: 220,
        marginRight: 5,
        marginTop: 330,
        position: 'absolute'       
    },

    TextStyle1: {
        fontWeight: 'bold',
        fontSize: wp('4'),
        color: 'white',
        marginTop: hp('1.5'),
        marginLeft: hp('1'),
        alignSelf: 'center'
    },

    TextStyle2: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 25,
        marginLeft: 12,
        position: 'absolute'
    },

    TextStyle3: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 10,
        position: 'absolute'
    }
};

export default MainMenu;