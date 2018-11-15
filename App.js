/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

// import { styles } from './src/Styles';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      headerText: 'Album!'
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.state} />
        <AlbumList />
      </View>
    );
  };
};

// style={styles.container}
// <Text style={styles.instructions}>To get started, edit App.js</Text>
// <Text style={styles.instructions}>{instructions}</Text>
// <Text style={styles.instructions}>This is pretty awesome!!!</Text>