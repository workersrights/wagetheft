import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { EVENTS } from "../data/dummy-data";

const EventDetails = (props) => {
    const event = EVENTS.filter(event=>event.id === props.id)[0];
    return (
        <View>
            <View style = {styles.landingContainer}>
                <Image
                    source={{uri: event.image}}
                    style={styles.image}
                />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.info}>{event.date}</Text>
                <Text style={styles.title}>{event.title}</Text>

                <View style={styles.rowContainer}>
                
                    <View style={styles.iconContainer}>
                        <Image
                            style={styles.icon}
                            source={require("../images/place.png")}
                        />
                        <Text style={styles.info}>{event.location}</Text>
                    </View>

                    <View style={styles.iconContainer}>
                        <Image
                            style={styles.icon}
                            source={require("../images/clock.png")}
                        />
                        <Text style={styles.info}>{event.time}</Text>
                    </View>
                </View>
                
            </View>
            <Text style={styles.subheading}>Description:</Text>
            <Text style={styles.text}>{event.description}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize : 20,
        fontWeight: "bold",
    },

    infoContainer : {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    },

    iconTextContainer: {
        flexDirection: "row",
    },

    landingContainer: {
        height: "40%",
        width: "100%",
        paddingTop:5
    },

    info: {
        fontStyle: "italic",
    },

    subheading: {
        paddingHorizontal:5,
    },

    text: {
        paddingHorizontal:15,

    },

    image: {
        resizeMode: "contain",
        height: "100%",
        width: "100%",
    },

    rowContainer: {
        flexDirection: "row",
        margin: 5
    },

    iconContainer: {
        flexDirection:"row",
        paddingRight: 50 
      },
      icon: {
        height:14,
        width: 14,
        marginRight: 5,
      },
});

export default EventDetails
    