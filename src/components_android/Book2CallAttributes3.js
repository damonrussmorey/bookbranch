import Header from './header';
import { Actions } from 'react-native-router-flux';
import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ArrowCard from './ArrowCard';
import ArrowSection from './ArrowSection';
import ArrowCardTwo from './ArrowCardTwo';

class Book2CallAttributes3 extends Component {
    renderElement(){
        if(this.props.book2attributes1 == 'Adventurous')
           return <Image source={require('bookbranch/img/attributes/adventurous-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Beautiful')
           return <Image source={require('bookbranch/img/attributes/beautiful-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Brainy')
           return <Image source={require('bookbranch/img/attributes/brainy-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Complex')
           return <Image source={require('bookbranch/img/attributes/complex-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Cooking')
           return <Image source={require('bookbranch/img/attributes/cooking-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Cultural')
           return <Image source={require('bookbranch/img/attributes/cultural-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Dark')
           return <Image source={require('bookbranch/img/attributes/dark-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Disaster')
           return <Image source={require('bookbranch/img/attributes/disaster-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Erotic')
           return <Image source={require('bookbranch/img/attributes/erotic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Faith')
           return <Image source={require('bookbranch/img/attributes/faith-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Family')
           return <Image source={require('bookbranch/img/attributes/family-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Fantasy')
           return <Image source={require('bookbranch/img/attributes/fantasy-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Friendship')
           return <Image source={require('bookbranch/img/attributes/friendship-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Funny')
           return <Image source={require('bookbranch/img/attributes/funny-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Heroic')
           return <Image source={require('bookbranch/img/attributes/heroic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Historical')
           return <Image source={require('bookbranch/img/attributes/historical-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Idealistic')
           return <Image source={require('bookbranch/img/attributes/idealistic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Insightful')
           return <Image source={require('bookbranch/img/attributes/insightful-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Mysterious')
           return <Image source={require('bookbranch/img/attributes/mysterious-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Perserverence')
           return <Image source={require('bookbranch/img/attributes/perserverence-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Power')
           return <Image source={require('bookbranch/img/attributes/power-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Readable')
           return <Image source={require('bookbranch/img/attributes/readable-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Romantic')
           return <Image source={require('bookbranch/img/attributes/romantic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Scary')
           return <Image source={require('bookbranch/img/attributes/scary-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.book2attributes1 == 'Suspenseful')
           return <Image source={require('bookbranch/img/attributes/suspenseful-attribute.png')} style={styles.AttributeStyle}></Image>
        
        return null;
     }

     renderElement2(){
        if(this.props.attribute2 == 'Adventurous')
           return <Image source={require('bookbranch/img/attributes/adventurous-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Beautiful')
           return <Image source={require('bookbranch/img/attributes/beautiful-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Brainy')
           return <Image source={require('bookbranch/img/attributes/brainy-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Complex')
           return <Image source={require('bookbranch/img/attributes/complex-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Cooking')
           return <Image source={require('bookbranch/img/attributes/cooking-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Cultural')
           return <Image source={require('bookbranch/img/attributes/cultural-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Dark')
           return <Image source={require('bookbranch/img/attributes/dark-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Disaster')
           return <Image source={require('bookbranch/img/attributes/disaster-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Erotic')
           return <Image source={require('bookbranch/img/attributes/erotic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Faith')
           return <Image source={require('bookbranch/img/attributes/faith-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Family')
           return <Image source={require('bookbranch/img/attributes/family-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Fantasy')
           return <Image source={require('bookbranch/img/attributes/fantasy-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Friendship')
           return <Image source={require('bookbranch/img/attributes/friendship-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Funny')
           return <Image source={require('bookbranch/img/attributes/funny-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Heroic')
           return <Image source={require('bookbranch/img/attributes/heroic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Historical')
           return <Image source={require('bookbranch/img/attributes/historical-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Idealistic')
           return <Image source={require('bookbranch/img/attributes/idealistic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Insightful')
           return <Image source={require('bookbranch/img/attributes/insightful-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Mysterious')
           return <Image source={require('bookbranch/img/attributes/mysterious-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Perserverence')
           return <Image source={require('bookbranch/img/attributes/perserverence-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Power')
           return <Image source={require('bookbranch/img/attributes/power-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Readable')
           return <Image source={require('bookbranch/img/attributes/readable-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Romantic')
           return <Image source={require('bookbranch/img/attributes/romantic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Scary')
           return <Image source={require('bookbranch/img/attributes/scary-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute2 == 'Suspenseful')
           return <Image source={require('bookbranch/img/attributes/suspenseful-attribute.png')} style={styles.AttributeStyle}></Image>
        
        return null;
     }
    render(){
    return (
        <View>
                <Header headerText={'Bookbranch'} />
                <View>
                    <Text style = {{marginTop: 5,marginLeft: 20, fontWeight: 'bold', fontSize: 25, position: 'absolute'}}>Book #2:</Text>
                    <Text style = {{marginTop: 8,marginLeft: 150, fontWeight: 'bold', fontSize: 20, position: 'absolute'}}>{this.props.BookTwo}</Text>
                    <View style = {styles.TopThreeStyle}>
                        <Text style = 
                            {{fontSize: 12 ,color: '#778899', fontWeight: 'bold', alignSelf:'center'}}>
                            Select the least prevalent attribute
                            </Text>
                    </View>
                </View>
                <View>
            
            <View>
                <Card>
                    <CardSection>{ this.renderElement() }
                        <TouchableOpacity>
                        </TouchableOpacity>
                    </CardSection>

                    <CardSection>{this.renderElement2()}
                        <TouchableOpacity>
                        </TouchableOpacity>
                    </CardSection>

                    <CardSection>
                        <TouchableOpacity onPress={() => Actions.chooseAttList3Book2({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, book2attributes1: this.props.book2attributes1, book2attributes2: this.props.attribute2})}>
                            <Text style= {{fontSize: 50, fontWeight: 'bold' , marginLeft: 76, marginTop: 31}}>+</Text>
                        </TouchableOpacity>
                    </CardSection>
                </Card>
            </View>
        </View>
        </View>
    );
  }
}

const styles = {
    TopThreeStyle: {
      marginTop: 50,
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
      },

    AttributeStyle: {
        marginLeft: 14, 
        marginTop: 3, 
        width: 160, 
        height: 110
    }
};

export default Book2CallAttributes3;