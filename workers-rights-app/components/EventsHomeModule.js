import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import EventsHomeCard from "../components/EventsHomeCard.js";
import { EVENTS } from "../data/dummy-data";

const EventsHomeModule = (props) => {
  const renderHomeCards = (itemData) => {
    return (
      <EventsHomeCard
        title={itemData.item.title}
        date={itemData.item.date}
        image={
          "https://previews.123rf.com/images/belchonock/belchonock1802/belchonock180286505/96155278-word-law-with-judges-gavel-and-legal-books-on-wooden-background.jpg"
        }
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
      <FlatList
        style={styles.list}
        horizontal
        data={EVENTS}
        renderItem={renderHomeCards}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 192,
    width: "100%",
  },

  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  list: {
    backgroundColor: "red",
  },
});

export default EventsHomeModule;
