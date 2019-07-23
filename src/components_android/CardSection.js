/*
Sources I used: 
https://github.com/StephenGrider/ReactNativeReduxCasts/blob/master/albums/src/components/CardSection.js
*/

import React from 'react';
import { View } from 'react-native';
import { Platform } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 0.5,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#000000',
    position: 'relative',
    height: 133,
    opacity: 1
  }
};

export default CardSection;