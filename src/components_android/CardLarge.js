import React from 'react';
import { View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CardLarge = (props) => {
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
        height: hp('70'),//500,
        width: wp('60'),//280,
        elevation: 1,
        marginLeft: wp('20'),//50,
        marginRight: wp('10'),//5,
        marginTop: 15,
        // position: 'absolute'
    },

};

export default CardLarge;