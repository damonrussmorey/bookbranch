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
   // borderBottomWidth: 0.5,
    borderRadius: 8,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#D3D3D3',
    position: 'relative',
    height: 30,
    opacity: 1
  }
};

export default CardSection;