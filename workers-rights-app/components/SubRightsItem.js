import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

const SubRightsItem = props => {
    return(
        <TouchableOpacity onPress={props.onSelect} style={styles.subrights}>
            <View style={styles.txtContainer}>
                <Text style = {styles.subrightstxt}>{props.emoji}</Text>
                <Text style = {styles.subrightstxt} >{props.title}</Text>
                <Text style = {styles.subrightstxt}>→</Text>
            </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    subrights: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 20,
        margin: 7,
        borderRadius: 8,
        shadowOpacity: 0.25,
        shadowOffset: {width: 2, height: 5},
        backgroundColor: Colors.lightOrange
    },
    subrightstxt: {
        fontSize: 16,
        lineHeight: 22
    },
    txtContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    }
});

export default SubRightsItem;