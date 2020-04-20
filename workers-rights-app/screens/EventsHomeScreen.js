import React from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import EventsHomeModule from "../components/EventsHomeModule.js";

const EventsHomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <EventsHomeModule category={"Your Events"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: Dimensions.get("window").width * 0.866,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EventsHomeScreen;
