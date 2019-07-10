import React from 'react';
import { View } from 'react-native';
import { MenuProvider} from 'react-native-popup-menu';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import MenuText from './MenuText';
import ChooseAttributeList from './ChooseAttributeList';

const CallChooseAttributeList = () => {
    return (
        <View>
            <MenuProvider>
                <Header headerText={'Bookbranch'} />
                <MenuText/>
                <ChooseAttributeList/>
            </MenuProvider>
        </View>
    );
};

export default CallChooseAttributeList;