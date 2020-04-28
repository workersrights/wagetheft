import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const FavoriteRightsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Favorite Rights Screen!</Text>
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

export default FavoriteRightsScreen;