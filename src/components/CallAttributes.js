import React from 'react';
import { View , Text } from 'react-native';
import Header from './header';
import MenuText from './MenuText';
import AttributesList from './AttributesList';
import { MenuProvider } from 'react-native-popup-menu';
import { Actions } from 'react-native-router-flux';

const Attributes = () => {
    return (
        <View>
            <MenuProvider>
                <Header headerText={'Bookbranch'} />
                <MenuText/>
                <AttributesList/>
            </MenuProvider>
        </View>
    );
};

export default Attributes;