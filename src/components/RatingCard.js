import React from 'react';
import { View } from 'react-native';

const RatingCard = (props) => {
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
        height: 30,
        width: 170,
        elevation: 1,
        marginLeft: 100,
        marginRight: 5,
        marginTop: 548,
        position: 'absolute'
    },

};

export default RatingCard;