import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const RightsCategoryTile = props => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        height: 150,
        width: 150,
        margin: 10,
        backgroundColor: Colors.lightOrange,
        borderRadius: 15,
        shadowOpacity: 0.25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default RightsCategoryTile;