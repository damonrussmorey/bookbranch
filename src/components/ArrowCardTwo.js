import React from 'react';
import { View } from 'react-native';

const ArrowCardTwo = (props) => {
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
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        height: 400,
        width: 50,
        elevation: 1,
        marginLeft: 295,
        marginTop: 130,
        position: 'absolute'
    },

};

export default ArrowCardTwo;