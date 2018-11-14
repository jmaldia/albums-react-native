// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../Styles';

// Make a component
const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.welcome}>{props.headerText}</Text>
        </View>
    )
}


// Make the component available to other parts of the app
export default Header;