import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { useSelector } from 'react-redux';

import EventsHomeCard from "../components/EventsHomeCard.js";
import Colors from '../constants/Colors';

const EventsHomeModule = (props) => {

  const allEvents = useSelector(state => state.events.allEvents);
  const yourEvents = useSelector(state => state.events.yourEvents);
 
  const parseDateString = (timeStr) => {
    var moment = require('moment');
    const date = moment(timeStr).format("MMMM Mo, YYYY");
    return date.toString();
  };

  let n = 0;
  const renderNum = 4;
  const filterEvents = event => {
    if(event.category === props.category && n <= renderNum) {
      n++;
      return true;
    }
    return false;
  }

  const displayedEvents = (props.category === "Your Events") ? yourEvents : allEvents.filter(filterEvents);
  const len = displayedEvents.length;
  
  // Case where there are no events
  if(len === 0 ){
    if(props.category === 'Your Events') {
      return(
      <View style={styles.noEventsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.categoryText}>{props.category}</Text>
        </View>
        <View style={styles.noEventsTextCotainer}>
          <Text style={styles.noEventsText}>There are no events in this category.</Text>
          <Text style={styles.noEventsText}>Add some by tapping on the star in each event!</Text>
        </View>
      </View>);
    } else {
      return(
        <View style={styles.noEventsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.categoryText}>{props.category}</Text>
          </View>
          <View style={styles.noEventsTextCotainer}>
            <Text style={styles.noEventsText}>There are no events in this category at this time. Come back another time to see if some are added!</Text>
          </View>
        </View>);
    }
  }

  const renderHomeCards = (itemData) => {
    return (
      <EventsHomeCard
        title={itemData.item.title}
        date={parseDateString(itemData.item.date)}
        location={itemData.item.location}
        image={itemData.item.imageUrl}
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
        data={displayedEvents}
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
    marginBottom: 20,
  },
  noEventsContainer: {
    height: 70,
    width: "100%",
    marginLeft: Dimensions.get("window").width * 0.067,
    marginBottom: 60,
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
    color: Colors.darkOrange
  },

  viewAllText: {
    fontSize: 18,
    fontFamily: "nunito-bold",
    color: "#373A42",
  },
  noEventsText: {
    fontSize: 16,
    fontFamily: "nunito-regular",
    color: Colors.darkGray
  },
  noEventsTextCotainer: {
    backgroundColor: Colors.gray,
    width: Dimensions.get("window").width * 0.866,
    padding: 5,
    paddingLeft: 10,
    justifyContent:"space-between"
  }
});

export default EventsHomeModule;
