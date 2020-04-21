import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import Colors from '../constants/Colors';

const OrganizationBox = props => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.box}>
                <View style={{ flex: 4 }}>
                    <Image source={props.image}
                        style={styles.imgStyle}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text numberOfLines={2} style={styles.orgTitle}>{props.title}</Text>
                </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    box: {
        height: 130,
        width: 162,
        marginRight: 15,
        borderRadius: 15,
        shadowOpacity: 0.25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6
    },
    orgTitle: {
        fontWeight: "600"
    },
    imgStyle: {
        flex: 1, 
        width: null,
        height: null, 
        resizeMode: 'cover',
        borderRadius: 8
    }
});

export default OrganizationBox;