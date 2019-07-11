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
        borderRadius: 5,
        borderColor: '#e9e9ef',
        backgroundColor: '#e9e9ef',
        height: 400,
        width: 50,
        elevation: 1,
        marginLeft: 295,
        marginTop: 130,
        position: 'absolute',
        opacity: 0.5,
    },

};

export default ArrowCardTwo;