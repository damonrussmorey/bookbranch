import Header from './header';
import { Actions } from 'react-native-router-flux';
import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ArrowCard from './ArrowCard';
import ArrowSection from './ArrowSection';
import ArrowCardTwo from './ArrowCardTwo';
import FlipCard from 'react-native-flip-card'
import AsyncStorage from '@react-native-community/async-storage';

class Book2CallAttributes2 extends Component {
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

   componentDidMount(){
      this.fetchData();
  }
  
  constructor(props) {
      super(props);
      this.state = { 
          title: '',
          description:'',
      };
    }

  fetchData = async () => {
      let bookObject = await AsyncStorage.getItem('bookObject1');
      let data = JSON.parse(bookObject);
      this.setState({
          title: data.title,
          description:data.description,
      });
  }

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
                <Header headerText={'Bookbranch'} />
                <View>
                     <View style = {{marginTop: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch'}}>
                        <Text style = {{alignItems: 'center', fontWeight: 'bold', fontSize: 20, position: 'absolute'}}>{this.trunc()}</Text>
                    </View>
                    <View style = {styles.TopThreeStyle}>
                        <Text style = 
                            {{fontSize: 12 ,color: '#778899', fontWeight: 'bold', alignSelf:'center'}}>
                            Select the next most prevalent attribute
                            </Text>
                    </View>
                </View>
                <View>
            
            <View>
                <Card>
                <FlipCard>
                        {/* Face Side */}
                        <View style={styles.face}>
                        <CardSection>{ this.renderElement() }
                              <TouchableOpacity>
                              </TouchableOpacity>
                        </CardSection>
                        </View>
                        {/* Back Side */}
                        <View style={styles.back}>
                        <Text style={styles.TopThreeStyle} >{this.props.text}</Text>
                        </View>
                     </FlipCard>

                    <CardSection>
                        <TouchableOpacity onPress={() => Actions.chooseAttList2Book2({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall, book2attributes1: this.props.text})}>
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
        </View>
    );
  }
}

const styles = {
    TopThreeStyle: {
        marginTop: 50,
        marginLeft: 78,
        position: 'absolute',
        
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

export default Book2CallAttributes2;