import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import { SUBRIGHTS, ORGANIZATIONS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import OrganizationBox from '../components/OrganizationBox';

const RightsDetailsScreen = props => {
    const subrightId = props.navigation.getParam('subrightId');
    const selectedSubright = SUBRIGHTS.find(subright => subright.id === subrightId);

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
            <ScrollView style={{marginHorizontal: 20}}>
                <Text style={styles.section}>Description: </Text>
                <Text>An employer has the right to make many types of deductions from an employee’s pay. For anything that is for the employee’s benefit, the employer must first get the employee’s consent before providing the good or service and deducting the cost of the employee’s pay. However, there are limits on what employers can deduct from pay. </Text>
                <Text style={styles.section}>Organizations that can help: </Text>
                <View style={{ height: 130, marginTop: 20 }}>
                    <FlatList data={ORGANIZATIONS} renderItem={renderGridItem} horizontal={true} />
                </View>
                <Text style={styles.section}>Learn more:</Text>
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