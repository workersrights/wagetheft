import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { SUBRIGHTS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import OrganizationBox from '../components/OrganizationBox';

const RightsDetailsScreen = props => {
    const subrightId = props.navigation.getParam('subrightId');
    const selectedSubright = SUBRIGHTS.find(subright => subright.id === subrightId);

    return(
        <View style={{ height: 130, marginTop: 20 }}>
            <Text>The Rights Details Screen!</Text>
            <Text>{selectedSubright.title}</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <OrganizationBox image={require('../images/wage-theft-coalition-logo.png')}
                    title="The Wage Theft Coalition"
                />
                <OrganizationBox image={require('../images/osha-logo.png')}
                    title="OSHA"
                />
                <OrganizationBox image={require('../images/NLRB-logo.png')}
                    title="PAWIS"
                />
            </ScrollView>

        </View>
    )
};

RightsDetailsScreen.navigationOptions = navigationData => {
    const subrightId = navigationData.navigation.getParam('subrightId');
    const selectedSubright = SUBRIGHTS.find(subright => subright.id === subrightId);
    return {
        headerTitle: selectedSubright.title,
        headerRight: () =>
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
            <Item
                title='Fav'
                iconName='ios-star-outline'
                onPress={() => {
                    console.log("mark as favorite!")
                }}
            />

        </HeaderButtons>
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