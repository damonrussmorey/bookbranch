import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Card from './Card';
import AttributeCard from './AttributeCard';
import { Actions } from 'react-native-router-flux';
import Header from './header';

class Book2ChooseAttributesList extends Component {
    //state = {attributes: []};
    /*
    renderAttributes(){
        //return attribute => <Text> </Text>;
    }
    */
   trunc(){
    var textbook2 = this.props.BookTwo;
    var len = textbook2.length;

    if(len > 30){
        textbook2 = textbook2.substring(0, 30) + '...'
        return textbook2;
    }

    else{
        return textbook2;
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
                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Adventurous'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/adventurous-attribute.png')}>
                            </Image>
                            <Text>Adventurous</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Beautiful'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/beautiful-attribute.png')}>
                            </Image>
                            <Text>Beautiful</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Brainy'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/brainy-attribute.png')}>
                            </Image>
                            <Text>Brainy</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                            +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Complex'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/complex-attribute.png')}>
                            </Image>
                            <Text>Complex</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Cooking'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/cooking-attribute.png')}>
                            </Image>
                            <Text>Cooking</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                        +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Cultural'})}>
                        <AttributeCard>
                            <Image 
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/cultural-attribute.png')}>
                            </Image>
                            <Text>Cultural</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                         +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Dark'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/dark-attribute.png')}>
                            </Image>
                            <Text>Dark</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                               +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Disaster'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/disaster-attribute.png')}>
                            </Image>
                            <Text>Disaster</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                        +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Erotic'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/erotic-attribute.png')}>
                            </Image>
                            <Text>Erotic</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                             +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Faith'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/faith-attribute.png')}>
                            </Image>
                            <Text>Faith</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                               +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Family'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/family-attribute.png')}>
                            </Image>
                            <Text>Family</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                            +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Fantasy'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/fantasy-attribute.png')}>
                            </Image>
                            <Text>Fantasy</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                          +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Friendship'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/friendship-attribute.png')}>
                            </Image>
                            <Text>Friendship</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                     +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Funny'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/funny-attribute.png')}>
                            </Image>
                            <Text>Funny</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                             +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Heroic'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/heroic-attribute.png')}>
                            </Image>
                            <Text>Heroic</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                            +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Historical'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/historical-attribute.png')}>
                            </Image>
                            <Text>Historical</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Idealistic'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/idealistic-attribute.png')}>
                            </Image>
                            <Text>Idealistic</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                        +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Insightful'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/insightful-attribute.png')}>
                            </Image>
                            <Text>Insightful</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Mysterious'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/mysterious-attribute.png')}>
                            </Image>
                            <Text>Mysterious</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                    +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Perserverence'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/perserverence-attribute.png')}>
                            </Image>
                            <Text>Perserverence</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>              +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Power'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/power-attribute.png')}>
                            </Image>
                            <Text>Power</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                             +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Readable'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/readable-attribute.png')}>
                            </Image>
                            <Text>Readable</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Romantic'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/romantic-attribute.png')}>
                            </Image>
                            <Text>Romantic</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Scary'})}>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/scary-attribute.png')}>
                            </Image>
                            <Text>Scary</Text>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                              +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.Book2attList1({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, text: 'Suspenseful'})}>
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

export default Book2ChooseAttributesList;