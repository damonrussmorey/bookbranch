import React, { Component } from 'react';
import { View, Text, Image, TouchableNativeFeedback, ScrollView} from 'react-native';
import AttributesDetail from './AttributesDetail';
import Card from './Card';
import AttributeCard from './AttributeCard';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import { Platform } from 'react-native';

class ChooseAttributesList2 extends Component {
    //state = {attributes: []};
    /*
    renderAttributes(){
        //return attribute => <Text> </Text>;
    }
    */
    render () {
        return (
            <View>
                <Header headerText={'Bookbranch'} />
                <Card>
                    <ScrollView>
                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Adventurous', text: this.props.text})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/adventurous-attribute.png')}>
                            </Image>
                            <Text>Adventurous</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Beautiful'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/beautiful-attribute.png')}>
                            </Image>
                            <Text>Beautiful</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Brainy'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/brainy-attribute.png')}>
                            </Image>
                            <Text>Brainy</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                            +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Complex'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/complex-attribute.png')}>
                            </Image>
                            <Text>Complex</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Cooking'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/cooking-attribute.png')}>
                            </Image>
                            <Text>Cooking</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                        +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Cultural'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/cultural-attribute.png')}>
                            </Image>
                            <Text>Cultural</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                         +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Dark'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/dark-attribute.png')}>
                            </Image>
                            <Text>Dark</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                               +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Disaster'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/disaster-attribute.png')}>
                            </Image>
                            <Text>Disaster</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                        +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Erotic'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/erotic-attribute.png')}>
                            </Image>
                            <Text>Erotic</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                             +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Faith'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/faith-attribute.png')}>
                            </Image>
                            <Text>Faith</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                               +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Family'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/family-attribute.png')}>
                            </Image>
                            <Text>Family</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                            +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Fantasy'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/fantasy-attribute.png')}>
                            </Image>
                            <Text>Fantasy</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                          +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Friendship'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/friendship-attribute.png')}>
                            </Image>
                            <Text>Friendship</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                     +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Funny'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/funny-attribute.png')}>
                            </Image>
                            <Text>Funny</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                             +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Heroic'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/heroic-attribute.png')}>
                            </Image>
                            <Text>Heroic</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                            +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Historical'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/historical-attribute.png')}>
                            </Image>
                            <Text>Historical</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Idealistic'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/idealistic-attribute.png')}>
                            </Image>
                            <Text>Idealistic</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                        +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Insightful'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/insightful-attribute.png')}>
                            </Image>
                            <Text>Insightful</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Knowledge'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/knowledge-attribute.png')}>
                            </Image>
                            <Text>Knowledge</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                    +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Mysterious'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/mysterious-attribute.png')}>
                            </Image>
                            <Text>Mysterious</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                    +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Perserverence'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/perserverence-attribute.png')}>
                            </Image>
                            <Text>Perserverence</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>              +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Power'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/power-attribute.png')}>
                            </Image>
                            <Text>Power</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                             +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Readable'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/readable-attribute.png')}>
                            </Image>
                            <Text>Readable</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Romantic'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/romantic-attribute.png')}>
                            </Image>
                            <Text>Romantic</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Scary'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/scary-attribute.png')}>
                            </Image>
                            <Text>Scary</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                              +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => Actions.attList2({attribute2: 'Suspenseful'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/suspenseful-attribute.png')}>
                            </Image>
                            <Text>Suspenseful</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                  +</Text>
                        </AttributeCard>
                    </TouchableNativeFeedback>

                    </ScrollView>
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

export default ChooseAttributesList2;