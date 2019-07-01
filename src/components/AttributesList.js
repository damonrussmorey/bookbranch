/*
Sources I used:
https://github.com/StephenGrider/ReactNativeReduxCasts/blob/master/albums/src/components/AlbumList.js
*/

//This will fetch data from database

//We use class component here for fetching data from database
//Used for dynamic sources of data

//Functional components (i.e. our header component) is used for presenting static data

import React, { Component } from 'react';
import { View, Text} from 'react-native';
import AttributesDetail from './AttributesDetail';

//import axios from 'axios'; // used for http requests

class AttributesList extends Component {

    //state = {attributes: []};
    /*
    renderAttributes(){
        //return attribute => <Text> </Text>;
    }
    */
    render () {
        return (
            <View>
               <AttributesDetail/>
            </View>
        );
    }
}


export default AttributesList;