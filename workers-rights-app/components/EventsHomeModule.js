import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import EventsHomeCard from "../components/EventsHomeCard.js";
import { EVENTS } from "../data/dummy-data";

const EventsHomeModule = (props) => {
  const renderHomeCards = (itemData) => {
    return (
      <EventsHomeCard
        title={itemData.item.title}
        date={itemData.item.date}
        image={itemData.item.image}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>{props.category}</Text>
        <TouchableOpacity>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList horizontal={true} data={EVENTS} renderItem={renderHomeCards} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 192,
    width: "100%",
    marginLeft: Dimensions.get("window").width * 0.067,
    marginTop: 40,
  },

  titleContainer: {
    width: Dimensions.get("window").width * 0.866,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default EventsHomeModule;
