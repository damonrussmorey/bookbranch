import Header from './header';
import { Actions } from 'react-native-router-flux';
import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground , Picker} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ArrowSection from './ArrowSection';
import ArrowCardTwo from './ArrowCardTwo';
import FlipCard from 'react-native-flip-card'
import AsyncStorage from '@react-native-community/async-storage';

class CallAttributes3 extends Component {
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

    state = {  
        choosenIndex: 0,
        language1: "Seven",
        language2: "Four",
        language3: "One",
        language4: "One"  
    };
    renderElement(){
        if(this.props.attribute1 == 'Adventurous')
           return <Image source={require('bookbranch/img/attributes/adventurous-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Beautiful')
           return <Image source={require('bookbranch/img/attributes/beautiful-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Brainy')
           return <Image source={require('bookbranch/img/attributes/brainy-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Complex')
           return <Image source={require('bookbranch/img/attributes/complex-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Cooking')
           return <Image source={require('bookbranch/img/attributes/cooking-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Cultural')
           return <Image source={require('bookbranch/img/attributes/cultural-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Dark')
           return <Image source={require('bookbranch/img/attributes/dark-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Disaster')
           return <Image source={require('bookbranch/img/attributes/disaster-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Erotic')
           return <Image source={require('bookbranch/img/attributes/erotic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Faith')
           return <Image source={require('bookbranch/img/attributes/faith-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Family')
           return <Image source={require('bookbranch/img/attributes/family-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Fantasy')
           return <Image source={require('bookbranch/img/attributes/fantasy-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Friendship')
           return <Image source={require('bookbranch/img/attributes/friendship-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Funny')
           return <Image source={require('bookbranch/img/attributes/funny-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Heroic')
           return <Image source={require('bookbranch/img/attributes/heroic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Historical')
           return <Image source={require('bookbranch/img/attributes/historical-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Idealistic')
           return <Image source={require('bookbranch/img/attributes/idealistic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Insightful')
           return <Image source={require('bookbranch/img/attributes/insightful-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Mysterious')
           return <Image source={require('bookbranch/img/attributes/mysterious-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Perserverence')
           return <Image source={require('bookbranch/img/attributes/perserverence-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Power')
           return <Image source={require('bookbranch/img/attributes/power-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Readable')
           return <Image source={require('bookbranch/img/attributes/readable-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Romantic')
           return <Image source={require('bookbranch/img/attributes/romantic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Scary')
           return <Image source={require('bookbranch/img/attributes/scary-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute1 == 'Suspenseful')
           return <Image source={require('bookbranch/img/attributes/suspenseful-attribute.png')} style={styles.AttributeStyle}></Image>
        
        return null;
     }

     renderElementTwo(){
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

     renderElement3(){
        if(this.props.attribute3 == 'Adventurous')
           return <Image source={require('bookbranch/img/attributes/adventurous-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Beautiful')
           return <Image source={require('bookbranch/img/attributes/beautiful-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Brainy')
           return <Image source={require('bookbranch/img/attributes/brainy-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Complex')
           return <Image source={require('bookbranch/img/attributes/complex-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Cooking')
           return <Image source={require('bookbranch/img/attributes/cooking-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Cultural')
           return <Image source={require('bookbranch/img/attributes/cultural-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Dark')
           return <Image source={require('bookbranch/img/attributes/dark-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Disaster')
           return <Image source={require('bookbranch/img/attributes/disaster-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Erotic')
           return <Image source={require('bookbranch/img/attributes/erotic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Faith')
           return <Image source={require('bookbranch/img/attributes/faith-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Family')
           return <Image source={require('bookbranch/img/attributes/family-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Fantasy')
           return <Image source={require('bookbranch/img/attributes/fantasy-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Friendship')
           return <Image source={require('bookbranch/img/attributes/friendship-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Funny')
           return <Image source={require('bookbranch/img/attributes/funny-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Heroic')
           return <Image source={require('bookbranch/img/attributes/heroic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Historical')
           return <Image source={require('bookbranch/img/attributes/historical-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Idealistic')
           return <Image source={require('bookbranch/img/attributes/idealistic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Insightful')
           return <Image source={require('bookbranch/img/attributes/insightful-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Mysterious')
           return <Image source={require('bookbranch/img/attributes/mysterious-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Perserverence')
           return <Image source={require('bookbranch/img/attributes/perserverence-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Power')
           return <Image source={require('bookbranch/img/attributes/power-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Readable')
           return <Image source={require('bookbranch/img/attributes/readable-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Romantic')
           return <Image source={require('bookbranch/img/attributes/romantic-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Scary')
           return <Image source={require('bookbranch/img/attributes/scary-attribute.png')} style={styles.AttributeStyle}></Image>

        if(this.props.attribute3 == 'Suspenseful')
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
                            {{fontSize: 11 ,color: '#778899', fontWeight: 'bold', alignSelf:'center', marginTop: -3}}>
                            Now attach some attribute ratings!
                            </Text>
                    </View>
                </View>
                <View>
            <View>
                <ArrowCardTwo>
                    <ArrowSection>
                    <View style = {styles.buttonStyle}> 
                        <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language1}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language1: itemValue, choosenIndex: itemPosition})}  
                        >  
                            {/* <Picker.Item label="1" value="One" />  
                            <Picker.Item label="2" value="Two" />  
                            <Picker.Item label="3" value="Three" />
                            <Picker.Item label="4" value="Four" />
                            <Picker.Item label="5" value="Five" />
                            <Picker.Item label="6" value="Six" /> */}
                            <Picker.Item label="7" value="Seven" />
                            <Picker.Item label="8" value="Eight" /> 
                            <Picker.Item label="9" value="Nine" />
                            <Picker.Item label="10" value="Ten" /> 
                        </Picker>  

                        </View>
                    </ArrowSection>

                    <ArrowSection>
                    <View style = {styles.buttonStyle}> 
                        <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language2}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language2: itemValue, choosenIndex: itemPosition})}  
                        >  
                            {/* <Picker.Item label="1" value="One" />  
                            <Picker.Item label="2" value="Two" />  
                            <Picker.Item label="3" value="Three" /> */}
                            <Picker.Item label="4" value="Four" />
                            <Picker.Item label="5" value="Five" />
                            <Picker.Item label="6" value="Six" />
                            <Picker.Item label="7" value="Seven" />
                            {/* <Picker.Item label="8" value="Eight" /> 
                            <Picker.Item label="9" value="Nine" />
                            <Picker.Item label="10" value="Ten" />  */}
                        </Picker>  

                        </View>
                    </ArrowSection>

                    <ArrowSection>
                    <View style = {styles.buttonStyle}> 
                        <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language3}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language3: itemValue, choosenIndex: itemPosition})}  
                        >  
                            <Picker.Item label="1" value="One" />  
                            <Picker.Item label="2" value="Two" />  
                            <Picker.Item label="3" value="Three" />
                            <Picker.Item label="4" value="Four" />
                            {/* <Picker.Item label="5" value="Five" />
                            <Picker.Item label="6" value="Six" />
                            <Picker.Item label="7" value="Seven" />
                            <Picker.Item label="8" value="Eight" /> 
                            <Picker.Item label="9" value="Nine" />
                            <Picker.Item label="10" value="Ten" />  */}
                        </Picker>  

                        </View>
                    </ArrowSection>
                </ArrowCardTwo>
            </View>
            
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
                        <Text style={styles.TopThreeStyle} >{this.props.attribute1}</Text>
                        </View>
                     </FlipCard>

                     <FlipCard>
                        {/* Face Side */}
                        <View style={styles.face}>
                        <CardSection>{ this.renderElementTwo() }
                              <TouchableOpacity>
                              </TouchableOpacity>
                        </CardSection>
                        </View>
                        {/* Back Side */}
                        <View style={styles.back}>
                        <Text style={styles.TopThreeStyle} >{this.props.attribute2}</Text>
                        </View>
                     </FlipCard>

                     <FlipCard>
                        {/* Face Side */}
                        <View style={styles.face}>
                        <CardSection>{ this.renderElement3() }
                              <TouchableOpacity>
                              </TouchableOpacity>
                        </CardSection>
                        </View>
                        {/* Back Side */}
                        <View style={styles.back}>
                        <Text style={styles.TopThreeStyle} >{this.props.attribute3}</Text>
                        </View>
                     </FlipCard>
                </Card>
            </View>
        </View>

        <View style = {styles.ButtonStyle1}>
                <TouchableOpacity onPress={() => Actions.CallAttributesPage2({BookOne: this.props.textOne, BookTwo: this.props.textTwo, Book1Attribute1: this.props.attribute1, Book1Attribute2: this.props.attribute2, Book1Attribute3: this.props.attribute3, Book1Rank1: this.state.language1, Book1Rank2: this.state.language2, Book1Rank3: this.state.language3, Book1RankOverall: this.state.language4})}>
                        <Text style = {styles.TextStyle1}>Next</Text>
                    </TouchableOpacity>
                </View>

         <Text style = {{marginTop: 570,alignSelf: 'center', fontWeight: 'bold', fontSize: 20, position: 'absolute'}}>Overall Rating: </Text>
        <View style = {{marginTop: 550, alignSelf: 'center'}}> 
                        <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language4}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language4: itemValue, choosenIndex: itemPosition})}  
                        >  
                            <Picker.Item label="1" value="One" />  
                            <Picker.Item label="2" value="Two" />  
                            <Picker.Item label="3" value="Three" />
                            <Picker.Item label="4" value="Four" />
                            <Picker.Item label="5" value="Five" />
                        </Picker>  

                        </View>
        </View>
    );
  }
}

const styles = {

    textStyle:{  
        marginTop: 50,
        marginLeft: 78,
        position: 'absolute'  
    },  
    pickerStyle:{  
        height: 23,  
        width: 40,  
        color: '#344953',  
        justifyContent: 'center',
        marginTop: 5  
    },  

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
        width: 80,
        elevation: 1,
        marginLeft: 280,
        marginRight: 5,
        marginTop: 580,
        position: 'absolute'       
    },

    TextStyle1: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5,
        alignSelf: 'center',
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

export default CallAttributes3;