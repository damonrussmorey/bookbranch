import React from 'react';
import { View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ArrowSection = (props) => {
  console.log(hp('19.49') + 'pixels close to 133');
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
    // position: 'relative',
    // height: 133,
    height: hp('19.49'),
    opacity: 0.8
  }
};

export default ArrowSection;