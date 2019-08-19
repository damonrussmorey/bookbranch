import React from 'react';
import { View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ArrowCardTwo = (props) => {
    console.log(wp('72') + 'pixels close to 295');
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
        borderRadius: 5,
        borderColor: '#e9e9ef',
        backgroundColor: '#e9e9ef',
        height: hp('58'),
        width: 50,
        elevation: 1,
        marginLeft: wp('72'), //295,
        marginTop: 75,
        position: 'absolute',
        opacity: 0.5,
    },

};

export default ArrowCardTwo;