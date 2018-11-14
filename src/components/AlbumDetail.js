import React, { Component } from 'react';
import { Text } from 'react-native';

import Card from './Card';

import { styles } from '../Styles';

const AlbumDetail = (props) => {
    return (
        <Card>
            <Text style={styles.welcome}>{props.album.title}</Text>
        </Card>
    );
};

export default AlbumDetail;


// <Text style={styles.instructions}>{props.album.artist}</Text>
// <Button
//     onPress={console.log(props.album.title)}
//     title={`Buy ${props.album.title} Album`}
//     color="#841584"
//     accessibilityLabel="Learn more about this purple button"
// />