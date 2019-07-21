import React, {Component} from 'react';
import { View , Text } from 'react-native';
import { MenuProvider} from 'react-native-popup-menu';
import { Actions } from 'react-native-router-flux';
import Header from './header';
import MenuText from './MenuText';
import ChooseAttributeList from './ChooseAttributeList';

class CallChooseAttributeList extends Component {

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
                <ChooseAttributeList/>
            </MenuProvider>
        </View>
    );
   }
};
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
export default CallChooseAttributeList;