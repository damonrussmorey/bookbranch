//Citation: https://github.com/StephenGrider/ReactNativeReduxCasts/tree/master/albums

//itemImage = {require('./img/bookbranch_tree.png')}
// Import a library to help create a component
console.disableYellowBox = true;
import React from 'react';
import { AppRegistry, View } from 'react-native';
import ChooseAttributeList from './src/components_android/ChooseAttributeList';
import { MenuProvider } from 'react-native-popup-menu';
import { Router, Scene } from 'react-native-router-flux';
import CallAttributes from './src/components_android/CallAttributes';
import MainMenu from './src/components_android/MainMenu';
import LogIn from './src/components_android/LogIn';
import FindNewBook from './src/components_android/FindNewBook';
import DiscoveredNewBook from './src/components_android/DiscoveredNewBook';
import ReviewBook from './src/components_android/ReviewBook';
import SearchBook from './src/components_android/SearchBook';
import SearchBookResults from './src/components_android/SearchBookResults';
import BookResultsDetails from './src/components_android/BookResultsDetails';
import CallAttributes1 from './src/components_android/CallAttributes1';
import ChooseAttributesList2 from './src/components_android/ChooseAttributesList2';
import CallAttributes2 from './src/components_android/CallAttributes2';

const App = () => (
  <MenuProvider>
    <Router>
      <Scene key="root">

      <Scene
          key="LogIn"
          component={LogIn}
          title="Bookbranch"
          initial
          hideNavBar
        />

        <Scene
          key="Main"
          component={MainMenu}
          title="Bookbranch"
          hideNavBar
        />

        <Scene
          key="attList"
          component={CallAttributes}
          title="Choose Three Attributes"
          hideNavBar
        />

        <Scene
          key="attList1"
          component={CallAttributes1}
          title="Choose Three Attributes"
          hideNavBar
        />

        <Scene
          key="attList2"
          component={CallAttributes2}
          title="Choose Three Attributes"
          hideNavBar
        /> 

        <Scene
          key="chooseAttList"
          component={ChooseAttributeList}
          title="Choose From The Following List"
          hideNavBar
        />

        <Scene
          key="chooseAttList2"
          component={ChooseAttributesList2}
          title="Choose From The Following List"
          hideNavBar
        />

        <Scene
          key="FindNewBook"
          component={FindNewBook}
          title="Enter Two Books"
          hideNavBar
        />

        <Scene
          key="DiscoveredNewBook"
          component={DiscoveredNewBook}
          title="Enter Two Books"
          hideNavBar
        /> 

        <Scene
          key="ReviewBook"
          component={ReviewBook}
          title="Enter The Book To Review"
          hideNavBar
        />

        <Scene
          key="SearchBook"
          component={SearchBook}
          title="Enter The Book To Search"
          hideNavBar
        />

        <Scene
          key="SearchBookResults"
          component={SearchBookResults}
          title="Results"
          hideNavBar
        />

        <Scene
          key="BookResultsDetail"
          component={BookResultsDetails}
          title="Results"
          hideNavBar
        />

      </Scene>
    </Router>
  </MenuProvider>
);

// Render it to the device
AppRegistry.registerComponent('bookbranch', () => App);