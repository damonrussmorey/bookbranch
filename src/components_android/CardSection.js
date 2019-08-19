/*
Sources I used: 
https://github.com/StephenGrider/ReactNativeReduxCasts/blob/master/albums/src/components/CardSection.js
*/

import React from 'react';
import { View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CardSection = (props) => {
  console.log(hp('19.2') + "should be 133");
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    // borderBottomWidth: 0.5,
    // padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start', //why?
    flexDirection: 'row',
    borderColor: '#000000',
    // position: 'relative',  // why?
    height: hp('19.2'), //133
    width: wp('47'),
    opacity: 1
  }
};

export default CardSection;