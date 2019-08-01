import React, {Component} from 'react';
import { View , Text , TouchableOpacity, Image} from 'react-native';
import Header from './header';
import { Actions } from 'react-native-router-flux';
import Card from './Card';
import CardSection from './CardSection';
import ArrowCard from './ArrowCard';
import ArrowSection from './ArrowSection';
import ArrowCardTwo from './ArrowCardTwo';

class CallAttributesPage2 extends Component {
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
                            Choose this book's top 3 attributes
                            </Text>
                    </View>
                </View>
                <View>
            <View>
                <Card>
                    <CardSection>
                        <TouchableOpacity onPress={() => Actions.chooseAttListBook2({BookOne: this.props.BookOne, BookTwo: this.props.BookTwo, Book1Attribute1: this.props.Book1Attribute1, Book1Attribute2: this.props.Book1Attribute2, Book1Attribute3: this.props.Book1Attribute3, Book1Rank1: this.props.Book1Rank1, Book1Rank2: this.props.Book1Rank2, Book1Rank3: this.props.Book1Rank3, Book1RankOverall: this.props.Book1RankOverall})}>
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
      }
};

export default CallAttributesPage2;