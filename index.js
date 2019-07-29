//Citation: https://github.com/StephenGrider/ReactNativeReduxCasts/tree/master/albums

//itemImage = {require('./img/bookbranch_tree.png')}
// Import a library to help create a component

console.disableYellowBox = true;
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AttributesList from './src/components/AttributesList';
import MenuText from './src/components/MenuText';
import ChooseAttributeList from './src/components/ChooseAttributeList';
import { MenuProvider } from 'react-native-popup-menu';
import { Actions } from 'react-native-router-flux';
import { Router, Scene, Stack } from 'react-native-router-flux';
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
import CallAttributes1 from './src/components/CallAttributes1';
import ChooseAttributesList2 from './src/components/ChooseAttributesList2';
import CallAttributes2 from './src/components/CallAttributes2';
import CallAttributes3 from './src/components/CallAttributes3';
import ChooseAttributesList3 from './src/components/ChooseAttributesList3';
import CallAttributesPage2 from './src/components/CallAttributesPage2';
import Book2CallAttributes1 from './src/components/Book2CallAttributes1';
import Book2ChooseAttributesList from './src/components/Book2ChooseAttributesList';
import Book2ChooseAttributesList2 from './src/components/Book2ChooseAttributesList2';
import Book2CallAttributes3 from './src/components/Book2CallAttributes3';
import Book2ChooseAttributesList3 from './src/components/Book2ChooseAttributesList3';
import Book2CallAttributes4 from './src/components/Book2CallAttributes4';
import Launch from './src/components/Launch';
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
      
  
  <MenuProvider>
    <Router>
      <Scene key="root" transitionConfig={() => ({
        screenInterpolator: (props) => {
            switch (props.scene.route.params.direction) {
                case 'vertical':
                    return CardStackStyleInterpolator.forVertical(props);
                case 'fade':
                    return CardStackStyleInterpolator.forFade(props);
                case 'none':
                    return CardStackStyleInterpolator.forInitial
                case 'horizontal':
                default:
                    return CardStackStyleInterpolator.forHorizontal(props)
            }
        }
    })} >

        {/* PLACEHOLDER SCENE */}
      <Stack
          key="Launch"
          component={Launch}
          title="Launch"
          hideNavBar
          on={this.authenticate}
          success="Main"
          failure="LogIn"
          initial
          panhandlers={null} // NOT WORKING
          animationEnabled={false} // NOT WORKING
          direction="none"
          
      />

      <Scene
          key="LogIn"
          component={LogIn}
          title="Bookbranch"
          hideNavBar
          animationEnabled={false}
          direction="none"

        />

        <Scene
          key="Main"
          component={MainMenu}
          title="Bookbranch"
          hideNavBar
          direction="none"
        />

        <Scene
          key="attList"
          component={CallAttributes}
          title="Choose Three Attributes"
          hideNavBar
        />

        <Scene
          key = "CallAttributesPage2"
          component={CallAttributesPage2}
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
          key = "attList3"
          component={CallAttributes3}
          title="Choose The Rankings"
          hideNavBar
        />

        <Scene
          key = "Book2attList1"
          component={Book2CallAttributes1}
          title="Choose the Attributes"
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
          key="Book2attList3"
          component={Book2CallAttributes3}
          title="Choose the Attributes"
          hideNavBar
        />

        <Scene
          key="Book2attList4"
          component={Book2CallAttributes4}
          title="Choose the Ranking"
          hideNavBar
        />

        <Scene
          key = "chooseAttList3"
          component={ChooseAttributesList3}
          title="Choose From The Following List"
          hideNavBar
        />

        <Scene
          key = "chooseAttListBook2"
          component={Book2ChooseAttributesList}
          title="Choose From The Following List"
          hideNavBar
        />

        <Scene
          key = "chooseAttList2Book2"
          component={Book2ChooseAttributesList2}
          title="Choose From The Following List"
          hideNavBar
        />

        <Scene
          key = "chooseAttList3Book2"
          component={Book2ChooseAttributesList3}
          title = "Choose From The Following List"
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
)}
    }
  

// Render it to the device
AppRegistry.registerComponent('bookbranch', () => App);
