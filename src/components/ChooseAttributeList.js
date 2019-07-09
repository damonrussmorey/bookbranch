import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import AttributesDetail from './AttributesDetail';
import Card from './Card';
import AttributeCard from './AttributeCard';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';

class AttributesList extends Component {
    //state = {attributes: []};
    /*
    renderAttributes(){
        //return attribute => <Text> </Text>;
    }
    */
    render () {
        return (
            <View>
                <Card>
                    <ScrollView>

                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/adventurous-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Adventurous' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/beautiful-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Beautiful' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/brainy-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Brainy' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                            +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/complex-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Complex' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/cooking-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Cooking' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                        +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/cultural-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Cultural' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                         +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/dark-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Dark' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                               +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/disaster-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Disaster' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                        +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/erotic-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Erotic' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                             +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/faith-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Faith' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                               +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/family-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Family' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                            +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/fantasy-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Fantasy' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                          +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/friendship-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Friendship' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                     +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/funny-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Funny' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                             +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/heroic-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Heroic' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                            +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/historical-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Historical' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/idealistic-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Idealistic' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                        +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/insightful-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Insightful' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/knowledge-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Knowledge' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                    +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/mysterious-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Mysterious' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                    +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/perserverence-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Perserverence' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>              +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/power-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Power' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                             +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/readable-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Readable' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/romantic-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Romantic' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                       +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/scary-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Scary' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                              +</Text>
                        </AttributeCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AttributeCard>
                            <Image
                                style={styles.imageStyle}
                                source={require('bookbranch/img/attributes/suspenseful-attribute.png')}>
                            </Image>
                            <Menu>
                                <MenuTrigger text='Suspenseful' />
                                <MenuOptions>
                                    <MenuOption onSelect={() => alert(`Not a valid option`)} text='Choose a ranking' />
                                    <MenuOption onSelect={() => alert('You ranked this attribute as 1')} text='1' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 2`)} text='2' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 3`)} text='3' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 4`)} text='4' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 5`)} text='5' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 6`)} text='6' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 7`)} text='7' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 8`)} text='8' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 9`)} text='9' />
                                    <MenuOption onSelect={() => alert(`You ranked this attribute as 10`)} text='10' /> 
                                </MenuOptions>
                            </Menu>
                            <Text style = {{fontWeight: 'bold', color: '#499920'}}>                  +</Text>
                        </AttributeCard>
                    </TouchableOpacity>

                    </ScrollView>
                </Card>
            </View>
        );
    }
}

const styles = {

    imageStyle: {
      height: 20,
      width: 20,
      paddingTop: 20,
      margin: 10,
      marginTop: 1,
      marginLeft: -3,
      alignSelf: 'flex-start',
      borderRadius: 8
    }
  };

export default AttributesList;