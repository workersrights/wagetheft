import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import EventsHomeModule from "../components/EventsHomeModule.js";

const categoryTitles = [
  { id: "t1", title: "Your Events" },
  { id: "t2", title: "Social" },
  { id: "t3", title: "Workshops" },
];

const EventsHomeScreen = (props) => {
  const renderEventModules = (itemData) => {
    return <EventsHomeModule category={itemData.item.title} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList data={categoryTitles} renderItem={renderEventModules} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EventsHomeScreen;
