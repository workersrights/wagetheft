import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import EventsHomeCard from "../components/EventsHomeCard.js";

const EventsHomeModule = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>{props.category}</Text>
        <TouchableOpacity>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
      <EventsHomeCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 192,
    width: "100%",
    flexDirection: "column",
  },

  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default EventsHomeModule;
