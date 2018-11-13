// Import libraries for making a component
import React from 'react';
import { Text } from 'react-native';

import { styles } from '../Styles';

// Make a component
const Header = () => {
    return <Text style={styles.welcome}>Albums!</Text>;
}


// Make the component available to other parts of the app
export default Header;