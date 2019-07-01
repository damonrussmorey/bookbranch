/*
Sources I used:
https://github.com/StephenGrider/ReactNativeReduxCasts/blob/master/albums/src/components/AlbumDetail.js
*/
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AttributesDetail = () => {
    return (
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
    );
};

export default AttributesDetail;