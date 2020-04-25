import React from "react";
import { View, StyleSheet } from "react-native";
import EventDetails from "../components/EventDetails";

const EventDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <EventDetails id={props.navigation.getParam("eventId")} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default EventDetailsScreen;
