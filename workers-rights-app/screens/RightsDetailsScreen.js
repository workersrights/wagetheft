import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { SUBRIGHTS } from '../data/dummy-data';

const RightsDetailsScreen = props => {
    const subrightId = props.navigation.getParam('subrightId');
    const selectedSubright = SUBRIGHTS.find(subright => subright.id === subrightId);

    return(
        <View style={styles.screen}>
            <Text>The Rights Details Screen!</Text>
            <Text>{selectedSubright.title}</Text>
        </View>
    );
};

RightsDetailsScreen.navigationOptions = navigationData => {
    const subrightId = navigationData.navigation.getParam('subrightId');
    const selectedSubright = SUBRIGHTS.find(subright => subright.id === subrightId);
    return {
        headerTitle: selectedSubright.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default RightsDetailsScreen;