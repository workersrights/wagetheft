import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Colors from '../constants/Colors';

const LearnMoreItem = props => {
    return(
        <TouchableOpacity onPress={props.onSelect} style={styles.box}>
            <View style={styles.txtContainer}>
                <Image source={require("../images/question.png")} />
                <Text numberOfLines={2} style = {styles.subrightstxt} >{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        padding: 10,
        margin: 7,
        borderRadius: 8,
        shadowOpacity: 0.25,
        shadowOffset: {width: 2, height: 5},
        backgroundColor: Colors.lightOrange
    },
    subrightstxt: {
        fontSize: 15,
        paddingHorizontal: 15
    },
    txtContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 5
    }
});

export default LearnMoreItem;