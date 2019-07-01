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
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#000000',
        backgroundColor: '#D3D3D3',
        height: 400,
        width: 50,
        elevation: 1,
        marginLeft: 35,
        marginRight: 5,
        marginTop: 10,
        position: 'absolute'
    },

};

export default ArrowCard;