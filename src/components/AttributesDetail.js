/*
Sources I used:
https://github.com/StephenGrider/ReactNativeReduxCasts/blob/master/albums/src/components/AlbumDetail.js
*/
import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ArrowCard from './ArrowCard';
import ArrowSection from './ArrowSection';
import ArrowCardTwo from './ArrowCardTwo';
import RatingCard from './RatingCard';
import RatingSection from './RatingSection';
import { Actions } from 'react-native-router-flux';
import ChooseAttributeList from './ChooseAttributeList';
class AttributesDetail extends Component {
    //componentDidMount = () => {
    //    setTimeout(() => {
    //        Actions.refresh(this.props.text);
    //    },1000)
    //}
    render(){
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
                        <TouchableOpacity onPress={() => Actions.chooseAttList()}>
                            <Text style= {{fontSize: 50, fontWeight: 'bold' , marginLeft: 76, marginTop: 31}}>+</Text>
                        </TouchableOpacity>
                    </CardSection>

                    <CardSection>
                        <TouchableOpacity onPress={() => Actions.chooseAttList()}>
                            <Text style= {{fontSize: 50, fontWeight: 'bold' , marginLeft: 76, marginTop: 31}}>+</Text>
                        </TouchableOpacity>
                    </CardSection>

                    <CardSection>
                        <TouchableOpacity onPress={() => Actions.chooseAttList()}>
                            <Text style= {{fontSize: 50, fontWeight: 'bold' , marginLeft: 76, marginTop: 31}}>+</Text>
                        </TouchableOpacity>
                    </CardSection>
                </Card>
            </View>
        </View>
    );
    }
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