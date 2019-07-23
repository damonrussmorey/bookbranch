import Header from './header';
import MenuText from './MenuText';
import AttributesList from './AttributesList';
import { MenuProvider } from 'react-native-popup-menu';
import { Actions } from 'react-native-router-flux';
import RatingCard from './RatingCard';
import RatingSection from './RatingSection';
import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ArrowCard from './ArrowCard';
import ArrowSection from './ArrowSection';
import ArrowCardTwo from './ArrowCardTwo';
import ChooseAttributeList from './ChooseAttributeList';
import { Platform } from 'react-native';

class CallAttributes1 extends Component {
    renderElement(){
        if(this.props.text == 'Adventurous')
           return <Image source={require('bookbranch/img/attributes/adventurous-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Beautiful')
           return <Image source={require('bookbranch/img/attributes/beautiful-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Brainy')
           return <Image source={require('bookbranch/img/attributes/brainy-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Complex')
           return <Image source={require('bookbranch/img/attributes/complex-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Cooking')
           return <Image source={require('bookbranch/img/attributes/cooking-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Cultural')
           return <Image source={require('bookbranch/img/attributes/cultural-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Dark')
           return <Image source={require('bookbranch/img/attributes/dark-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Disaster')
           return <Image source={require('bookbranch/img/attributes/disaster-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Erotic')
           return <Image source={require('bookbranch/img/attributes/erotic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Faith')
           return <Image source={require('bookbranch/img/attributes/faith-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Family')
           return <Image source={require('bookbranch/img/attributes/family-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Fantasy')
           return <Image source={require('bookbranch/img/attributes/fantasy-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Friendship')
           return <Image source={require('bookbranch/img/attributes/friendship-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Funny')
           return <Image source={require('bookbranch/img/attributes/funny-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Heroic')
           return <Image source={require('bookbranch/img/attributes/heroic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Historical')
           return <Image source={require('bookbranch/img/attributes/historical-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Idealistic')
           return <Image source={require('bookbranch/img/attributes/idealistic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Insightful')
           return <Image source={require('bookbranch/img/attributes/insightful-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Knowledge')
           return <Image source={require('bookbranch/img/attributes/knowledge-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Mysterious')
           return <Image source={require('bookbranch/img/attributes/mysterious-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Perserverence')
           return <Image source={require('bookbranch/img/attributes/perserverence-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Power')
           return <Image source={require('bookbranch/img/attributes/power-attribute.png')} style={styles.AttributeStyle}></Image>
        if(this.props.text == 'Readable')
           return <Image source={require('bookbranch/img/attributes/readable-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Romantic')
           return <Image source={require('bookbranch/img/attributes/romantic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Scary')
           return <Image source={require('bookbranch/img/attributes/scary-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.text == 'Suspenseful')
           return <Image source={require('bookbranch/img/attributes/suspenseful-attribute.png')} style={styles.AttributeStyle}></Image>
        
        return null;
     }
    render(){
    return (
        <View>
            <MenuProvider>
                <Header headerText={'Bookbranch'} />
                <View>
                    <Text style = {{marginTop: 5,marginLeft: 87, fontWeight: 'bold', fontSize: 20, position: 'absolute'}}>{this.props.BookReview}</Text>
                    <View style = {styles.TopThreeStyle}>
                        <Text style = 
                            {{fontSize: 11 ,color: '#778899', fontWeight: 'bold'}}>
                            Choose this book's top 3 attributes:
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
                    <CardSection>{ this.renderElement() }
                        <TouchableOpacity onPress={() => Actions.chooseAttList()}>
                        </TouchableOpacity>
                    </CardSection>

                    <CardSection>
                        <TouchableOpacity onPress={() => Actions.chooseAttList2({text: this.props.text})}>
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
                <Text style = {{marginTop: 610,marginLeft: 15, fontWeight: 'bold', fontSize: 20, position: 'absolute'}}>Rating: </Text>
                <RatingCard/>

                <TouchableOpacity style = {{marginTop: 549, marginLeft: 100}}>
                    <RatingSection>
                        <Text style = {{marginLeft: 5}}>1</Text>
                    </RatingSection>
                </TouchableOpacity>

                <TouchableOpacity style = {{marginTop: 609, marginLeft: 134, position: 'absolute'}}>
                    <RatingSection>
                        <Text style = {{marginLeft: 5}}>2</Text>
                    </RatingSection>
                </TouchableOpacity>

                <TouchableOpacity style = {{marginTop: 609, marginLeft: 168, position: 'absolute'}}>
                    <RatingSection>
                        <Text style = {{marginLeft: 5}}>3</Text>
                    </RatingSection>
                </TouchableOpacity>

                <TouchableOpacity style = {{marginTop: 609, marginLeft: 201, position: 'absolute'}}>
                    <RatingSection>
                        <Text style = {{marginLeft: 5}}>4</Text>
                    </RatingSection>
                </TouchableOpacity>

                <TouchableOpacity style = {{marginTop: 609, marginLeft: 235, position: 'absolute'}}>
                    <RatingSection>
                        <Text style = {{marginLeft: 5}}>5</Text>
                    </RatingSection>
                </TouchableOpacity>

                <View style = {styles.ButtonStyle1}>
                    <TouchableOpacity /*onPress={() => alert(`Added to Database!`)}*/>
                        <Text style = {styles.TextStyle1}>Next</Text>
                    </TouchableOpacity>
                </View>

            </MenuProvider>
        </View>
    );
  }
}

const styles = {
    TopThreeStyle: {
        marginTop: 110,
        marginLeft: 87,
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
      },

    AttributeStyle: {
        marginLeft: 14, 
        marginTop: 3, 
        width: 160, 
        height: 110
    }
};

export default CallAttributes1;