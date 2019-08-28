/*
Sources I used:
https://github.com/StephenGrider/ReactNativeReduxCasts/blob/master/albums/src/components/Card.js
*/

//Implements Card 

import React from 'react';
import { View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        height: hp('58'),   //400 pixels
        width: wp('48'),    // 200 pixels
        elevation: 1,
        marginLeft: wp('13.062'),  //90,
        marginRight: wp('0.725'),   // 5 pixels
        marginTop: hp('10.885'), //75,
        position: 'absolute'
    },

};

export default Card;