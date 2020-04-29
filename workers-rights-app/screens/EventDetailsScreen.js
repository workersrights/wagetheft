import React, { useEffect, useCallback }from "react";
import { View, StyleSheet } from "react-native";
import EventDetails from "../components/EventDetails";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from 'react-redux';

import { setYourEvent } from '../store/actions/events';

import CustomHeaderButton from "../components/CustomHeaderButton";


const EventDetailsScreen = (props) => {

  eventId = props.navigation.getParam("eventId");
  const checkInArray = e => e.id === eventId;
  const inYourEvents = useSelector(state => state.events.yourEvents.some(checkInArray));

  const dispatch = useDispatch();

  const setYourEventHandeler = useCallback(() => {
      dispatch(setYourEvent(eventId));
  }, [dispatch, eventId]);


  useEffect(() => {
      props.navigation.setParams({setYourEvent: setYourEventHandeler})
  }, [setYourEventHandeler]);

  useEffect(() => {
      props.navigation.setParams({inYourEvents: inYourEvents});
  }, [inYourEvents]);


  return (
    <View style={styles.screen}>
      <EventDetails id={eventId} />
    </View>
  );
};

EventDetailsScreen.navigationOptions = (navigationData) => {
  const eventTitle = navigationData.navigation.getParam("eventTitle");
  const setYourEvent = navigationData.navigation.getParam('setYourEvent');
  const inYourEvents = navigationData.navigation.getParam('inYourEvents');

  return {
    headerTitle: eventTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Fav"
          iconName= {inYourEvents?'ios-star':'ios-star-outline'}
          onPress={setYourEvent}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default EventDetailsScreen;
