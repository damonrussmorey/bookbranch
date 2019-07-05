/*
Sources I used:
1.) https://github.com/StephenGrider/ReactNativeReduxCasts/tree/master/albums
*/

// Import libraries for making a component
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle, imageStyle, buttonStyle, imageStyle_two } = styles;

  return (
    <View style={viewStyle}>
      <Image
        style={imageStyle}
          source={require('bookbranch/img/Bookbranch_Tree2.png')}>
       </Image>
      <Text style={textStyle}>{props.headerText}</Text>

      <TouchableOpacity style = {buttonStyle}>
        <Image
          style={{height: 20, width: 25, marginLeft: 7}}
            source={require('bookbranch/img/hamburger-menu.png')}>
        </Image>
        <Menu>
          <MenuTrigger/>
            <MenuOptions>
              <MenuOption onSelect={() => alert(`You chose Main Menu`)} text='Main Menu' />
              <MenuOption onSelect={() => alert('You chose User Profile')} text='User Profile' />
              <MenuOption onSelect={() => alert('You chose Log-Out')} text='Log-Out' />
            </MenuOptions>
        </Menu>
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
    paddingTop: 30,
    paddingRight: 190
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
