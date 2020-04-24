import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import EventDetails from "../components/EventDetails";

const EventDetailsScreen = (props) => {
    return(
        <EventDetails id={props.navigation.getParam('eventId')}/>
    );
};

export default EventDetailsScreen;