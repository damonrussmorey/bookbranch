import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import AttributesDetail from './AttributesDetail';
import Card from './Card';
import AttributeCard from './AttributeCard';

class AttributesList extends Component {
    //state = {attributes: []};
    /*
    renderAttributes(){
        //return attribute => <Text> </Text>;
    }
    */
    render () {
        return (
            <View>
                <Card>
                    <AttributeCard>
                        <Image
                             style={styles.imageStyle}
                             source={require('bookbranch/img/adventurous-attribute.png')}>
                        </Image>
                    </AttributeCard>
                </Card>
            </View>
        );
    }
}

const styles = {

    imageStyle: {
      height: 20,
      width: 20,
      paddingTop: 20,
      margin: 10,
      marginTop: 1,
      marginLeft: -3,
      alignSelf: 'flex-start',
      borderRadius: 8
    }
  };

export default AttributesList;