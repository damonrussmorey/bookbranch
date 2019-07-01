/*
Sources I used:
https://github.com/StephenGrider/ReactNativeReduxCasts/blob/master/albums/src/components/Card.js
*/

import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style = {styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#000000',
        backgroundColor: '#D3D3D3',
        //borderBottomWidth: 0,
       // shadowColor: '#000',
        //shadowOffset: { width: 0, height: 2 },
        //shadowOpacity: 0.1,
        //shadowRadius: 2,
        height: 400,
        width: 200,
        elevation: 1,
        marginLeft: 90,
        marginRight: 5,
        marginTop: 10,
        position: 'absolute'
        //opacity: 0.5
    }
};

export default Card;