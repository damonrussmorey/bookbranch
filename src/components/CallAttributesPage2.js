import React, {Component} from 'react';
import { View , Text , TouchableOpacity} from 'react-native';
import Header from './header';
import MenuText from './MenuText';
import AttributesList from './AttributesList';
import { MenuProvider } from 'react-native-popup-menu';
import { Actions } from 'react-native-router-flux';
import RatingCard from './RatingCard';
import RatingSection from './RatingSection';

class CallAttributes extends Component {
    render(){
    return (
        <View>
            <MenuProvider>
                <Header headerText={'Bookbranch'} />
                <View>
                <Text style = {{marginTop: 5,marginLeft: 20, fontWeight: 'bold', fontSize: 25, position: 'absolute'}}>Book #2:</Text>
                    <Text style = {{marginTop: 50,marginLeft: 87, fontWeight: 'bold', fontSize: 20, position: 'absolute'}}>{this.props.book2}</Text>
                    <View style = {styles.TopThreeStyle}>
                        <Text style = 
                            {{fontSize: 11 ,color: '#778899', fontWeight: 'bold'}}>
                            Choose this book's top 3 attributes:
                            </Text>
                    </View>
                </View>
                <AttributesList/>
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
                <TouchableOpacity onPress={() => Actions.SearchBookResults()}>
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
    }
};

export default CallAttributes;