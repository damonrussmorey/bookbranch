import React from 'react';
import { View, Text } from 'react-native';

//This will need to be changed to a class component later

const MenuText= () => {
    return (
        <View style = {styles.TopThreeStyle}>
            <Text style = 
            {{fontSize: 11 ,color: '#778899', fontWeight: 'bold'}}>
            Choose this book's top 3 attributes:
            </Text>
        </View>
    );
};

const styles = {
    TopThreeStyle: {
        marginTop: 150,
        marginLeft: 87,
        //position: 'absolute'
    }
};

export default MenuText;