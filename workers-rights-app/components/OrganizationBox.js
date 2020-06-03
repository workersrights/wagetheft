import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
import Colors from '../constants/Colors';

const OrganizationBox = props => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.box}>
                <View style={{ flex: 4 }}>
                    <Image source={{uri: props.image}} style={styles.imgStyle}/>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginLeft: 25}}>
                    <Text numberOfLines={2} style={styles.orgTitle}>{props.title}</Text>
                </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    box: {
        height: 229,
        width: 284,
        marginRight: 15,
        borderRadius: 6,
        shadowOpacity: 0.25,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
    },
    orgTitle: {
        fontSize: 16,
        fontFamily: 'nunito-semibold'
    },
    imgStyle: {
        flex: 1, 
        width: null,
        height: null, 
        resizeMode: 'cover',
        borderRadius: 6
    }
});

export default OrganizationBox;