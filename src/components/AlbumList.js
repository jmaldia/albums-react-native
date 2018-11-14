import React, { Component } from 'react';
import { View } from 'react-native';

import axios from 'axios'

import AlbumDetail from './AlbumDetail';

// Make a component
class AlbumList extends Component {
    state = {
        albums: []
    };
      
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    };

    renderAlbums() {
        return this.state.albums.map((album, index) => 
                <AlbumDetail key={index} album={album}/>
        );
    };

    render() {
        console.log(this.state);
        
        return (
            <View>
                { this.renderAlbums() }
            </View>
        );
    };
};

// Make the component available to other parts of the app
export default AlbumList;



// fetch('http://rallycoding.herokuapp.com/api/music_albums').then(data => {
//     return data.json()
// }).then(albums => {
//     this.setState({ albums })
// })