import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import { SUBRIGHTS, ORGANIZATIONS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import OrganizationBox from '../components/OrganizationBox';
import LearnMoreItem from '../components/LearnMoreItem';

const RightsDetailsScreen = props => {
    const subrightId = props.navigation.getParam('subrightId');
    const selectedSubright = SUBRIGHTS.find(subright => subright.id === subrightId);
    const relevantOrgs = ORGANIZATIONS.filter(org => (selectedSubright.organizations).includes(org.id));

    const renderGridItem = (itemData) => {
        return (
            <OrganizationBox
                title={itemData.item.title}    
                image={itemData.item.image}
            />
        )
    };

    return(
        <View style={styles.screen}>
            <ScrollView style={{marginHorizontal: 20}} showsVerticalScrollIndicator={false}>
                {/* Initial subright description */}
                <Text style={styles.section}>Description: </Text>
                <Text>{selectedSubright.description}</Text>
                
                {/* Organization section */}
                <Text style={styles.section}>Contact the following agencies for help: </Text>
                <View style={{ height: 230, marginTop: 20 }}> 
                    <FlatList
                        data={relevantOrgs}
                        renderItem={renderGridItem}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                
                {/* Learn More Section */}
                <Text style={styles.section}>Learn more:</Text>
                <LearnMoreItem
                    title="How much is overtime pay?"
                    onSelect={() => { }}
                />
                <LearnMoreItem
                    title="Which federal laws cover deductions?"
                    onSelect={() => { }}
                />
                <LearnMoreItem
                    title="How do I file a complaint?"
                    onSelect={() => { }}
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
        flex: 1
    },
    section: {
        fontSize: 16,
        fontWeight: "700",
        marginTop: 20
    }
})

export default RightsDetailsScreen;