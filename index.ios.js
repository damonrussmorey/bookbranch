//Citation: https://github.com/StephenGrider/ReactNativeReduxCasts/tree/master/albums

//itemImage = {require('./img/bookbranch_tree.png')}
// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import Attributes from './src/components/Attributes';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Bookbranch'} />
    <Attributes/>
</View>
);

// Render it to the device
AppRegistry.registerComponent('bookbranch', () => App);