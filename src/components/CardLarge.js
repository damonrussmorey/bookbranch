import React from 'react';
import { View } from 'react-native';

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
        height: 500,
        width: 280,
        elevation: 1,
        marginLeft: 50,
        marginRight: 5,
        marginTop: 15,
        position: 'absolute'
    },

};

export default CardLarge;