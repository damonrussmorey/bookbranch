/*
Sources I used:
1.) https://github.com/StephenGrider/ReactNativeReduxCasts/tree/master/albums
*/

// Import libraries for making a component
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

// Make a component
const HeaderBookResults = (props) => {
  const { textStyle, viewStyle, imageStyle, buttonStyle, imageStyle_two } = styles;

  return (
    <View style={viewStyle}>
      <Image
        style={imageStyle}
          source={require('bookbranch/img/Bookbranch_Tree2.png')}>
        </Image>
        <TouchableOpacity>
          <Text style={textStyle}>{props.headerText}</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {buttonStyle}>
          <Text style = {{marginLeft: 2, marginTop: 1, fontWeight: 'bold', color: '#ffffff'}}></Text>
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
    backgroundColor: '#499920',
    borderRadius: 5,
    marginLeft: 280,
    marginTop: -34,
    alignSelf: 'center',
  }
};
export default HeaderBookResults;