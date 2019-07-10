import React from 'react';
import { View } from 'react-native';

const ArrowCard = (props) => {
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
        borderWidth: 0,
        borderRadius: 0,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        height: 400,
        width: 50,
        elevation: 1,
        marginLeft: 35,
        marginRight: 5,
        marginTop: 130,
        position: 'absolute'
    },

};

export default ArrowCard;