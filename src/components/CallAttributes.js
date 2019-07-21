import React, {Component} from 'react';
import { View , Text , TouchableOpacity} from 'react-native';
import Header from './header';
import MenuText from './MenuText';
import AttributesList from './AttributesList';
import { MenuProvider } from 'react-native-popup-menu';
import { Actions } from 'react-native-router-flux';
import RatingCard from './RatingCard';
import RatingSection from './RatingSection';

class Attributes extends Component {
    render(){
    return (
        <View>
            <Text>{this.props.text}</Text>
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
                <AttributesList/>
                <Text style = {{marginTop: 640,marginLeft: 15, fontWeight: 'bold', fontSize: 20, position: 'absolute'}}>Rating: </Text>
                <RatingCard/>

                <TouchableOpacity style = {{marginTop: 579, marginLeft: 100}}>
                    <RatingSection>
                        <Text style = {{marginLeft: 5}}>1</Text>
                    </RatingSection>
                </TouchableOpacity>

                <TouchableOpacity style = {{marginTop: 639, marginLeft: 134, position: 'absolute'}}>
                    <RatingSection>
                        <Text style = {{marginLeft: 5}}>2</Text>
                    </RatingSection>
                </TouchableOpacity>

                <TouchableOpacity style = {{marginTop: 639, marginLeft: 168, position: 'absolute'}}>
                    <RatingSection>
                        <Text style = {{marginLeft: 5}}>3</Text>
                    </RatingSection>
                </TouchableOpacity>

                <TouchableOpacity style = {{marginTop: 639, marginLeft: 201, position: 'absolute'}}>
                    <RatingSection>
                        <Text style = {{marginLeft: 5}}>4</Text>
                    </RatingSection>
                </TouchableOpacity>

                <TouchableOpacity style = {{marginTop: 639, marginLeft: 235, position: 'absolute'}}>
                    <RatingSection>
                        <Text style = {{marginLeft: 5}}>5</Text>
                    </RatingSection>
                </TouchableOpacity>

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
};

export default Attributes;