import React from 'react';
import { Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text style={styles.title}>{props.album.title}</Text>
            </CardSection>
            <CardSection>
                <Text>Artist: {props.album.artist}</Text>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;

const styles = {
    title: {
        fontSize: 17,
        textTransform: 'uppercase'
    }
}


// import { styles } from '../Styles';

// <Text style={styles.instructions}>{props.album.artist}</Text>
// <Button
//     onPress={console.log(props.album.title)}
//     title={`Buy ${props.album.title} Album`}
//     color="#841584"
//     accessibilityLabel="Learn more about this purple button"
// />