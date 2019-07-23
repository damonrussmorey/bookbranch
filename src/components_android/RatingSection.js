import React from 'react';
import { View } from 'react-native';
import { Platform } from 'react-native';

const RatingSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 0.5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#000000',
    padding: 5,
    backgroundColor: '#fff',
   // justifyContent: 'flex-start',
    flexDirection: 'row',
    //position: 'absolute',
    height: 28,
    width: 34,
    opacity: 1
  }
};

export default RatingSection;