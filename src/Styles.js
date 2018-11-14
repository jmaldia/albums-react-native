import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      // backgroundColor: '#bdc3c7',
    },
    header: {
        paddingTop: 30,
        marginBottom: 20,
        width: '100%',
        backgroundColor: '#ecf0f1',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }, 
    welcome: {
      fontSize: 25,
      marginBottom: 20,
      textAlign: 'center',
      margin: 10,
      color: '#fff'
    },
    instructions: {
      marginBottom: 5,
      textAlign: 'center',
      color: '#fff',
    },
  });

