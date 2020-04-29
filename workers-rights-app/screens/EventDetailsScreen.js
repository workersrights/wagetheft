import React from "react";
import { View, StyleSheet } from "react-native";
import EventDetails from "../components/EventDetails";
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';


const EventDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <EventDetails id={props.navigation.getParam("eventId")} />
    </View>
  );
};

EventDetailsScreen.navigationOptions = (navigationData) => {
  const eventId = navigationData.navigation.getParam('eventId');
  const availableEvents = useSelector(state => state.events.allEvents);
  const event = availableEvents.find(event => event.id===eventId);
  //const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  //const isFav = navigationData.navigation.getParam('isFav');
  return{
      headerTitle: event.title,
      headerRight: () => {
        <Ionicons
          size={23} 
          color='black'
          name={'ios-star'}//isFav?'ios-star':'ios-star-outline'}
          //onPress={toggleFavorite}
        />
      }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default EventDetailsScreen;
