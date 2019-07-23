/*
Sources I used:
1.) https://github.com/StephenGrider/ReactNativeReduxCasts/tree/master/albums
*/

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity style = {buttonStyle}>
            <Text style = {textStyle}>Button</Text>
        </TouchableOpacity>

    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
       // flex: 1,
        width: 50,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0007aff',
      //  marginLeft: 5,
       // marginRight: 5
    }
}

export default Button;