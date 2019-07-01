/*
Sources I used:
https://github.com/StephenGrider/ReactNativeReduxCasts/blob/master/albums/src/components/AlbumDetail.js
*/
import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ArrowCard from './ArrowCard';
import ArrowSection from './ArrowSection';
import ArrowCardTwo from './ArrowCardTwo';

const AttributesDetail = () => {
    return (
        <View>

                <View>
                <ArrowCardTwo>
                    <ArrowSection>
                        <Text>Button 1</Text>
                    </ArrowSection>

                    <ArrowSection>
                        <Text>Button 2</Text>
                    </ArrowSection>

                    <ArrowSection>
                        <Text>Button 3</Text>
                    </ArrowSection>
                </ArrowCardTwo>
            </View>

            <View>
                <ArrowCard>
                    <ArrowSection>
                        <Text>Button 1</Text>
                    </ArrowSection>

                    <ArrowSection>
                        <Text>Button 2</Text>
                    </ArrowSection>

                    <ArrowSection>
                        <Text>Button 3</Text>
                    </ArrowSection>
                </ArrowCard>
            </View>

            <View>
                <Card>
                    <CardSection>
                        <Text>Attributes 1</Text>
                    </CardSection>

                    <CardSection>
                        <Text>Attributes 2</Text>
                    </CardSection>

                    <CardSection>
                        <Text>Attributes 3</Text>
                    </CardSection>
                </Card>
                    <Text style = {styles.RatingStyle}>Your Rating: </Text>
            </View>
        </View>
    );
};

const styles = {
    RatingStyle: {
        marginTop: 450,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30
    }
};

export default AttributesDetail;