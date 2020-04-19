import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const EventCategoryScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Event Category Screen!</Text>
            <Button title='Go to Event Detail Screen' onPress={() => props.navigation.navigate('EventDetails')} />
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

export default EventCategoryScreen;