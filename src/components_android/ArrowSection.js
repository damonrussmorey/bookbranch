import React from 'react';
import { View } from 'react-native';

const ArrowSection = (props) => {
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
    borderColor: '#ffffff',
    position: 'relative',
    height: 133,
    opacity: 0.8
  }
};

export default ArrowSection;