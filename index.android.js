//Citation: https://github.com/StephenGrider/ReactNativeReduxCasts/tree/master/albums

//itemImage = {require('./img/bookbranch_tree.png')}
// Import a library to help create a component

console.disableYellowBox = true;
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import ChooseAttributeList from './src/components_android/ChooseAttributeList';
import { Router, Scene, Stack } from 'react-native-router-flux';
import CallAttributes from './src/components_android/CallAttributes';
import MainMenu from './src/components_android/MainMenu';
import LogIn from './src/components_android/LogIn';
import FindNewBook from './src/components_android/FindNewBook';
import SearchBookResults from './src/components_android/SearchBookResults';
import BookResultsDetails from './src/components_android/BookResultsDetails';
import CallAttributes1 from './src/components_android/CallAttributes1';
import ChooseAttributesList2 from './src/components_android/ChooseAttributesList2';
import CallAttributes2 from './src/components_android/CallAttributes2';
import CallAttributes3 from './src/components_android/CallAttributes3';
import ChooseAttributesList3 from './src/components_android/ChooseAttributesList3';
import Book2CallAttributes1 from './src/components_android/Book2CallAttributes1';
// import Book2CallAttributes3 from './src/components_android/Book2CallAttributes3';
import Book2ChooseAttributesList from './src/components_android/Book2ChooseAttributesList';
import Book2ChooseAttributesList2 from './src/components_android/Book2ChooseAttributesList2';
import Book2CallAttributes3 from './src/components_android/Book2CallAttributes3';
import Book2ChooseAttributesList3 from './src/components_android/Book2ChooseAttributesList3';
import Book2CallAttributes4 from './src/components_android/Book2CallAttributes4';
import Launch from './src/components_android/Launch';
import AsyncStorage from '@react-native-community/async-storage';
import CardStackStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";

class App extends Component {

  componentDidMount(){
    // This is for demonstrating Async Works as intended, it can be uncommented and ran as if it were a 'Logout' button
    // this.resetKey();
  }

  constructor(props) {
      super(props);
      this.state = { 
          username: ''
      };
    }

  fetchData = async () => {
      let userObject = await AsyncStorage.getItem('userObject');
      let data = JSON.parse(userObject);
      this.setState({
          username: data.username
      });
  }

  async resetKey() {
    console.log("Reset was called");
    try {
      await AsyncStorage.removeItem('userObject');
      const value = await AsyncStorage.getItem('userObject');
      this.setState({myKey: value});
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }

  authenticate = async () => {
    let userObject = await AsyncStorage.getItem('userObject');
    let data = JSON.parse(userObject);
    console.log("From the Router: " + data.username);
    if(data.username)
      return true;
    else {
     return false;
    }
  }

  transitionConfig= () => StackViewTransitionConfigs.SlideFromRightIOS


  render() {
    return (
        
    <Router>
      <Scene key="root"
       hideNavBar
      >

        {/* PLACEHOLDER SCENE */}
      <Stack
          key="Launch"
          component={Launch}
          title="Launch"
          on={this.authenticate}
          success="Main"
          failure="LogIn"
          initial
      />

      <Scene
          key="LogIn"
          component={LogIn}
          title="Bookbranch"

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
          key = "CallAttributesPage2"
          component={Book2CallAttributes1}
          title="Choose Three Attributes"
        />

        <Scene
          key="attList1"
          component={CallAttributes1}
          title="Choose Three Attributes"
        />

        <Scene
          key="attList2"
          component={CallAttributes2}
          title="Choose Three Attributes"
        /> 

        <Scene
          key = "attList3"
          component={CallAttributes3}
          title="Choose The Rankings"
        />

        <Scene
          key = "Book2attList1"
          component={Book2CallAttributes3}
          title="Choose the Attributes"
        />

        <Scene
          key="chooseAttList"
          component={ChooseAttributeList}
          title="Choose From The Following List"
        />

        <Scene
          key="chooseAttList2"
          component={ChooseAttributesList2}
          title="Choose From The Following List"
        />

        <Scene 
          key="Book2attList3"
          component={Book2CallAttributes4}
          title="Choose the Attributes"
        />

        <Scene
          key="Book2attList4"
          component={Book2CallAttributes4}
          title="Choose the Ranking"
        />

        <Scene
          key = "chooseAttList3"
          component={ChooseAttributesList3}
          title="Choose From The Following List"
        />

        <Scene
          key = "chooseAttListBook2"
          component={Book2ChooseAttributesList}
          title="Choose From The Following List"
        />

        <Scene
          key = "chooseAttList2Book2"
          component={Book2ChooseAttributesList2}
          title="Choose From The Following List"
        />

        <Scene
          key = "chooseAttList3Book2"
          component={Book2ChooseAttributesList3}
          title = "Choose From The Following List"
        />

        <Scene
          key="FindNewBook"
          component={FindNewBook}
          title="Enter Two Books"
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
)}
    }
  

// Render it to the device
AppRegistry.registerComponent('bookbranch', () => App);
