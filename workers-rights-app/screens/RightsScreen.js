import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Touchable, TouchableOpacity, Platform} from 'react-native';
import { RIGHTSCATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import RightsCategoryTile from '../components/RightsCategoryTile';
//import Modal from 'react-native-modal';
import RightsModalFirstAttempt from '../components/RightsModalFirstAttempt';
import RightsModal from '../components/RightsModal';
//var globalProps = null



const RightsScreen = props => {
    //globalProps = props

    const renderGridItem = (itemData) => {
        return (
            <RightsCategoryTile title={itemData.item.title} onSelect={() => {
                props.navigation.navigate({routeName: 'SubRights', params: {
                    categoryId: itemData.item.id // sending the rights category to the new screen
                }});
            }} />
            )
    };

    return(
        <View style={styles.screen}>
            <RightsModal />
            <FlatList data={RIGHTSCATEGORIES} renderItem={renderGridItem} numColumns={2} />

            

        </View>
    );
};

RightsScreen.navigationOptions = {
    headerTitle: 'Rights Information',
    headerStyle: {
        // only color the background of the header if Android to fit the typical platform look
        backgroundColor: Platform.OS === 'android' ? Colors.lightOrange : ''
    },
    headerTintColor: Colors.darkOrange,
    headerTitleStyle: {
        fontWeight: 'bold',
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        margin: 10
    },
    modalStyle: {
        backgroundColor: 'white',
        width: '80%',
        height: '65%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10%'
    }
})

export default RightsScreen;