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
import { Actions } from 'react-native-router-flux';
import { Router, Scene } from 'react-native-router-flux';
import CallAttributes from './src/components/CallAttributes';
import CallChooseAttributeList from './src/components/CallChooseAttributeList';
import MainMenu from './src/components/MainMenu';
/*
const App = () => (
  <View style={{ flex: 1 }}>
    <MenuProvider>
      <Header headerText={'Bookbranch'} />
      <MenuText/>
      <ChooseAttributeList/>
    </MenuProvider>
  </View>
);
*/
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
/*
const App = () => (
  <View style={{ flex: 1 }}>
    <MenuProvider>
      <Header headerText={'Bookbranch'}/>
      <MainMenu/>
    </MenuProvider>
</View>
);
*/
const App = () => (
  <Router>

      <Scene key="root">

        <Scene
          key="Main"
          component={MainMenu}
          title="Bookbranch"
          initial
        />

        <Scene
          key="attList"
          component={CallAttributes}
          title="Choose Three Attributes"
        />

        <Scene
          key="chooseAttList"
          component={CallChooseAttributeList}
          title="Choose From The Following List"
        />

      </Scene>
  </Router>
);

// Render it to the device
AppRegistry.registerComponent('bookbranch', () => App);