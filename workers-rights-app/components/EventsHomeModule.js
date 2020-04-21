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
        pressAction={props.cardPress}
        id={itemData.item.id}
      />
    );
  };

  return (
    <View style={props.lastIndex ? styles.containerLast : styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.categoryText}>{props.category}</Text>
        <TouchableOpacity onPress={props.viewPress}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        data={EVENTS}
        renderItem={renderHomeCards}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 192,
    width: "100%",
    marginLeft: Dimensions.get("window").width * 0.067,
    marginBottom: 40,
  },
  containerLast: {
    height: 192,
    width: "100%",
    marginLeft: Dimensions.get("window").width * 0.067,
    marginBottom: 50,
  },
  titleContainer: {
    width: Dimensions.get("window").width * 0.866,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  categoryText: {
    fontSize: 18,
    fontFamily: "nunito-bold",
    color: "#A1A1A1",
  },

  viewAllText: {
    fontSize: 18,
    fontFamily: "nunito-bold",
    color: "#373A42",
  },
});

export default EventsHomeModule;
