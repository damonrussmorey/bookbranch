//Citation: https://github.com/StephenGrider/ReactNativeReduxCasts/tree/master/albums

//itemImage = {require('./img/bookbranch_tree.png')}
// Import a library to help create a component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AttributesList from './src/components/AttributesList';
import MenuText from './src/components/MenuText';
import ChooseAttributeList from './src/components/ChooseAttributeList';
import { MenuProvider } from 'react-native-popup-menu';


const App = () => (
  <View style={{ flex: 1 }}>
    <MenuProvider>
      <Header headerText={'Bookbranch'} />
      <MenuText/>
      <ChooseAttributeList/>
    </MenuProvider>
  </View>
);

// Create a component
/*
const App = () => (
  <View style={{ flex: 1 }}>
    <MenuProvider>
      <Header headerText={'Bookbranch'} />
      <MenuText/>
      <AttributesList/>
    </MenuProvider>
</View>
);
*/
// Render it to the device
AppRegistry.registerComponent('bookbranch', () => App);