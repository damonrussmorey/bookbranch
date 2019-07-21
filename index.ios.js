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
import AttributesDetail from './src/components/AttributesDetail';
import LogIn from './src/components/LogIn';
import FindNewBook from './src/components/FindNewBook';
import DiscoveredNewBook from './src/components/DiscoveredNewBook';
import ReviewBook from './src/components/ReviewBook';
import SearchBook from './src/components/SearchBook';
import SearchBookResults from './src/components/SearchBookResults';
import BookResultsDetails from './src/components/BookResultsDetails';

const App = () => (
  <MenuProvider>
    <Router>
      <Scene key="root">

      <Scene
          key="LogIn"
          component={LogIn}
          title="Bookbranch"
          initial
        />

        <Scene
          key="Main"
          component={MainMenu}
          title="Bookbranch"
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

        <Scene
          key="FindNewBook"
          component={FindNewBook}
          title="Enter Two Books"
        />

        <Scene
          key="DiscoveredNewBook"
          component={DiscoveredNewBook}
          title="Enter Two Books"
        /> 

        <Scene
          key="ReviewBook"
          component={ReviewBook}
          title="Enter The Book To Review"
        />

        <Scene
          key="SearchBook"
          component={SearchBook}
          title="Enter The Book To Search"
        />

        <Scene
          key="SearchBookResults"
          component={SearchBookResults}
          title="Results"
        />

        <Scene
          key="BookResultsDetail"
          component={BookResultsDetails}
          title="Results"
        />

      </Scene>
    </Router>
  </MenuProvider>
);

// Render it to the device
AppRegistry.registerComponent('bookbranch', () => App);