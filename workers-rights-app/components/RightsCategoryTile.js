import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../constants/Colors';

const RightsCategoryTile = props => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View>
                <Image style={styles.imageStyle} source={props.image} />
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
    },
    imageStyle: { // TODO: fix this. Make the image appear higher in the tile/box.
        justifyContent: 'center'
    }
});

export default RightsCategoryTile;