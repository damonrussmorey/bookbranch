
import React, { Component } from 'react';
import Header from './header';
//import axios from 'axios'; // used for http requests
import { View, Text, ImageBackground } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

class Launch extends Component {

  render() {
    return (
        <ImageBackground source={require('bookbranch/img/dawn-daylight.jpg')} style={{width: '100%', height: '100%'}}>
        <View>
            <Header headerText={'Launch'} />
                <Text style={{marginTop: 250}}>
                    Loading...
                </Text>
        </View>
        </ImageBackground>
    );
  }
}

export default Launch;