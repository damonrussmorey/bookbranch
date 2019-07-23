/*
Sources I used:
https://github.com/StephenGrider/ReactNativeReduxCasts/blob/master/albums/src/components/Card.js
*/

//Implements Card 

import React from 'react';
import { View , Text } from 'react-native';
import { Platform } from 'react-native';
const Card = (props) => {
    return (
        <View>
             <View style = {styles.containerStyle}>
                {props.children}
             </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#000000',
        backgroundColor: '#D3D3D3',
        height: 400,
        width: 200,
        elevation: 1,
        marginLeft: 90,
        marginRight: 5,
        marginTop: 130,
        position: 'absolute'
    },

};

export default Card;