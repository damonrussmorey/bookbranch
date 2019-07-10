import React from 'react';
import { View, Text } from 'react-native';

//This will need to be changed to a class component later

const MenuText= () => {
    return (
        <View>
            <Text style = {styles.BookNumStyle}>Book #1</Text>
            <View style = {styles.TopThreeStyle}>
                <Text style = 
                {{fontSize: 11 ,color: '#778899', fontWeight: 'bold'}}>
                Choose this book's top 3 attributes:
                </Text>
            </View>
        </View>
    );
};

const styles = {
    TopThreeStyle: {
        marginTop: 110,
        marginLeft: 87,
        position: 'absolute'
    },
    BookNumStyle: {
        marginTop: 10,
        marginLeft: 87,
        fontWeight: 'bold',
        fontSize: 20,
        position: 'absolute'        
    },
};

export default MenuText;