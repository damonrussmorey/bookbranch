//The tree background image is taken from this open source website: https://www.pexels.com/photo/countryside-dawn-daylight-environment-286305/

import React, { Component } from 'react';
import Header from './header';
//import axios from 'axios'; // used for http requests
import { View, Text } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

class Launch extends Component {

  render() {
    return (
        <View>
            <Header headerText={'Launch'} />
                <Text style={{marginTop: 250}}>
                    Loading...
                </Text>
        </View>
    );
  }
}

export default Launch;