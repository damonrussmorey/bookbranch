//Citation: https://github.com/StephenGrider/ReactNativeReduxCasts/tree/master/albums

//itemImage = {require('./img/bookbranch_tree.png')}
// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AttributesList from './src/components/AttributesList';
import MenuText from './src/components/MenuText';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Bookbranch'} />
    <MenuText/>
    <AttributesList/>
</View>
);

// Render it to the device
AppRegistry.registerComponent('bookbranch', () => App);