import React, {Component} from 'react';
import { View , Text , TouchableOpacity, Image} from 'react-native';
import Header from './header';
import MenuText from './MenuText';
import AttributesList from './AttributesList';
import { MenuProvider } from 'react-native-popup-menu';
import { Actions } from 'react-native-router-flux';
import RatingCard from './RatingCard';
import RatingSection from './RatingSection';
import Card from './Card';
import CardSection from './CardSection';
import ArrowCard from './ArrowCard';
import ArrowSection from './ArrowSection';
import ArrowCardTwo from './ArrowCardTwo';
import ChooseAttributeList from './ChooseAttributeList';

class CallAttributes extends Component {
    render(){
    return (
        <View>
            <MenuProvider>
                <Header headerText={'Bookbranch'} />
                <View>
                    <Text style = {{marginTop: 5,marginLeft: 20, fontWeight: 'bold', fontSize: 25, position: 'absolute'}}>Book #1:</Text>
                    <Text style = {{marginTop: 50,marginLeft: 87, fontWeight: 'bold', fontSize: 20, position: 'absolute'}}>{this.props.textOne}</Text>
                    <View style = {styles.TopThreeStyle}>
                        <Text style = 
                            {{fontSize: 12 ,color: '#778899', fontWeight: 'bold', alignSelf:'center'}}>
                            Choose this book's top 3 attributes
                            </Text>
                    </View>
                </View>
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
                        <TouchableOpacity onPress={() => Actions.chooseAttList({textOne: this.props.textOne, textTwo: this.props.textTwo})}>
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
            </View>
        </View>
            </MenuProvider>
        </View>
    );
  }
}

const styles = {
    TopThreeStyle: {
        marginTop: 100,
        marginLeft: 78,
        position: 'absolute'
    },
    BookNumStyle: {
        marginTop: 10,
        marginLeft: 87,
        fontWeight: 'bold',
        fontSize: 20,
        position: 'absolute'        
    },

    ButtonStyle1: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#D3D3D3',
        height: 30,
        width: 70,
        elevation: 1,
        marginLeft: 200,
        marginRight: 5,
        marginTop: 650,
        position: 'absolute'       
    },

    TextStyle1: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 18,
        position: 'absolute'
    },

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

export default CallAttributes;