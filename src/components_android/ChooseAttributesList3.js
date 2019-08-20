import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Card from './Card';
import AttributeCard from './AttributeCard';
import { Actions } from 'react-native-router-flux';
import Header from './header';

class ChooseAttributesList3 extends Component {
    trunc(){
        var textbook1 = this.props.textOne;
        var len = textbook1.length;

        if(len > 30){
            textbook1 = textbook1.substring(0, 30) + '...'
            return textbook1;
        }

        else{
            return textbook1;
        }
    }
    render () {
        return (
            <View>
                <Header headerText={'Bookbranch'} />
                    <View style = {{marginTop: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch'}}>
                        <Text style = {{alignItems: 'center', fontWeight: 'bold', fontSize: 20, position: 'absolute'}}>{this.trunc()}</Text>
                    </View>
                <Card>
                    <ScrollView>
                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Adventurous' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/adventurous-attribute.png')}>
                            </Image>
                            <Text>Adventurous</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Beautiful' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/beautiful-attribute.png')}>
                            </Image>
                            <Text>Beautiful</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Brainy' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/brainy-attribute.png')}>
                            </Image>
                            <Text>Brainy</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                            +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.tattribute1, attribute2: this.props.attribute2, attribute3: 'Complex' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/complex-attribute.png')}>
                            </Image>
                            <Text>Complex</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Cooking' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/cooking-attribute.png')}>
                            </Image>
                            <Text>Cooking</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                        +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Cultural' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/cultural-attribute.png')}>
                            </Image>
                            <Text>Cultural</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                         +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Dark' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/dark-attribute.png')}>
                            </Image>
                            <Text>Dark</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                               +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Disaster' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/disaster-attribute.png')}>
                            </Image>
                            <Text>Disaster</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                        +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Erotic' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/erotic-attribute.png')}>
                            </Image>
                            <Text>Erotic</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                             +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Faith' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/faith-attribute.png')}>
                            </Image>
                            <Text>Faith</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                               +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Family' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/family-attribute.png')}>
                            </Image>
                            <Text>Family</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                            +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Fantasy' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/fantasy-attribute.png')}>
                            </Image>
                            <Text>Fantasy</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                          +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Friendship' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/friendship-attribute.png')}>
                            </Image>
                            <Text>Friendship</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                     +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Funny' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/funny-attribute.png')}>
                            </Image>
                            <Text>Funny</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                             +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Heroic' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/heroic-attribute.png')}>
                            </Image>
                            <Text>Heroic</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                            +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Historical' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/historical-attribute.png')}>
                            </Image>
                            <Text>Historical</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Idealistic' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/idealistic-attribute.png')}>
                            </Image>
                            <Text>Idealistic</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                        +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Insightful' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/insightful-attribute.png')}>
                            </Image>
                            <Text>Insightful</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Mysterious' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/mysterious-attribute.png')}>
                            </Image>
                            <Text>Mysterious</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                    +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Perserverence' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/perserverence-attribute.png')}>
                            </Image>
                            <Text>Perserverence</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>              +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Power' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/power-attribute.png')}>
                            </Image>
                            <Text>Power</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                             +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Readable' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/readable-attribute.png')}>
                            </Image>
                            <Text>Readable</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Romantic' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/romantic-attribute.png')}>
                            </Image>
                            <Text>Romantic</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Scary' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/scary-attribute.png')}>
                            </Image>
                            <Text>Scary</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                              +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.attList3({textOne: this.props.textOne, textTwo: this.props.textTwo, attribute1: this.props.attribute1, attribute2: this.props.attribute2, attribute3: 'Suspenseful' })}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/suspenseful-attribute.png')}>
                            </Image>
                            <Text>Suspenseful</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                  +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

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

export default ChooseAttributesList3;