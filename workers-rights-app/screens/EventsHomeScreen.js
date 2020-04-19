import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const EventsHomeScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Events Home Screen!</Text>
            <Button title='Go to Event Category Screen' onPress={() => props.navigation.navigate('EventCategory')} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EventsHomeScreen;