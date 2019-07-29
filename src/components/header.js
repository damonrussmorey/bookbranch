/*
Sources I used:
1.) https://github.com/StephenGrider/ReactNativeReduxCasts/tree/master/albums
*/

// Import libraries for making a component
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';
import {Actions} from 'react-native-router-flux';
import { Platform } from 'react-native';
// Make a component
const Header = (props) => {
  const { textStyle, viewStyle, imageStyle, buttonStyle, imageStyle_two } = styles;

  return (
    <View style={viewStyle}>
      <Image
        style={imageStyle}
          source={require('bookbranch/img/Bookbranch_Tree2.png')}>
        </Image>
        <TouchableOpacity onPress={() => Actions.home()}>
          <Text style={textStyle}>{props.headerText}</Text>
        </TouchableOpacity>

      <TouchableOpacity style = {buttonStyle} onPress={() => Actions.pop()}>
          <Text style = {{marginLeft: 2, marginTop: 1, fontWeight: 'bold'}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#499920',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
  },
  textStyle: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: -30,
    marginLeft: -150
  },
  imageStyle: {
    height: 20,
    width: 20,
    paddingTop: 20,
    margin: 10,
    marginTop: 15,
    alignSelf: 'flex-start',
    borderRadius: 15
  },
  buttonStyle: {
    width: 40,
    height: 23,
    //paddingTop: 2,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffffff',
    marginLeft: 280,
    marginTop: -34,
   // position: 'absolute',
    alignSelf: 'center',
  }
};
// Make the component available to other parts of the app
export default Header;
