import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const EventsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Events Screen!</Text>
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

export default EventsScreen;