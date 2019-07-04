/*
Sources I used:
https://github.com/StephenGrider/ReactNativeReduxCasts/blob/master/albums/src/components/AlbumDetail.js
*/
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ArrowCard from './ArrowCard';
import ArrowSection from './ArrowSection';
import ArrowCardTwo from './ArrowCardTwo';
import RatingCard from './RatingCard';
import RatingSection from './RatingSection';

const AttributesDetail = () => {
    return (
        <View>

                <View>
                <ArrowCardTwo>
                    <ArrowSection>
                        <TouchableOpacity style = {styles.buttonStyle}>
                             <Image
                                style={{height: 60, width: 30, marginRight: 3, marginTop:-15}}
                                source={require('bookbranch/img/arrow_right.png')}>
                            </Image>
                        </TouchableOpacity>
                    </ArrowSection>

                    <ArrowSection>
                        <TouchableOpacity style = {styles.buttonStyle}>
                             <Image
                                style={{height: 60, width: 30, marginRight: 3, marginTop:-15}}
                                source={require('bookbranch/img/arrow_right.png')}>
                            </Image>
                        </TouchableOpacity>
                    </ArrowSection>

                    <ArrowSection>
                    <TouchableOpacity style = {styles.buttonStyle}>
                             <Image
                                style={{height: 60, width: 30, marginRight: 3, marginTop:-15}}
                                source={require('bookbranch/img/arrow_right.png')}>
                            </Image>
                        </TouchableOpacity>
                    </ArrowSection>
                </ArrowCardTwo>
            </View>

            <View>
                <ArrowCard>
                    <ArrowSection>
                        <TouchableOpacity style = {styles.buttonStyle}>
                             <Image
                                style={{height: 60, width: 30, marginLeft: 8, marginTop:-15}}
                                source={require('bookbranch/img/arrow_left.png')}>
                            </Image>
                        </TouchableOpacity>
                    </ArrowSection>

                    <ArrowSection>
                        <TouchableOpacity style = {styles.buttonStyle}>
                             <Image
                                style={{height: 60, width: 30, marginLeft: 8, marginTop:-15}}
                                source={require('bookbranch/img/arrow_left.png')}>
                            </Image>
                        </TouchableOpacity>
                    </ArrowSection>

                    <ArrowSection>
                        <TouchableOpacity style = {styles.buttonStyle}>
                             <Image
                                style={{height: 60, width: 30, marginLeft: 8, marginTop:-15}}
                                source={require('bookbranch/img/arrow_left.png')}>
                            </Image>
                        </TouchableOpacity>
                    </ArrowSection>
                </ArrowCard>
            </View>

            <View>
                <Card>
                    <CardSection>
                        <TouchableOpacity>
                            <Text style= {{fontSize: 50, fontWeight: 'bold' , marginLeft: 76, marginTop: 31}}>+</Text>
                        </TouchableOpacity>
                    </CardSection>

                    <CardSection>
                        <TouchableOpacity>
                            <Text style= {{fontSize: 50, fontWeight: 'bold' , marginLeft: 76, marginTop: 31}}>+</Text>
                        </TouchableOpacity>
                    </CardSection>

                    <CardSection>
                        <TouchableOpacity>
                            <Text style= {{fontSize: 50, fontWeight: 'bold' , marginLeft: 76, marginTop: 31}}>+</Text>
                        </TouchableOpacity>
                    </CardSection>
                </Card>
                    <Text style = {styles.RatingStyle}> Your Rating: </Text>

                    <RatingCard>
                        
                        <RatingSection style = {{}}>
                            <TouchableOpacity>
                                 <Text style={{marginLeft: 5}}>1</Text> 
                            </TouchableOpacity>
                        </RatingSection>

                    </RatingCard>
            </View>
        </View>
    );
};

const styles = {
    RatingStyle: {
        marginTop: 450,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30
    },

    buttonStyle: {
        width: 40,
        height: 23,
        //paddingTop: 2,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ffffff',
        alignSelf: 'center',
      }
};

export default AttributesDetail;