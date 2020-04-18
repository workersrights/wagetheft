import React from 'react';
import { View, Text, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EventsHomeScreen from '../screens/EventsHomeScreen';
import EventCategoryScreen from '../screens/EventCategoryScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';

import Colors from '../constants/Colors';

const EventsNavigator = createStackNavigator({
  EventsHome: EventsHomeScreen,
  EventCategory: EventsHomeScreen,
  EventDetails: EventDetailsScreen
}, {
  // second argument: to configure the style of the navigator
  defaultNavigationOptions: {
    headerStyle: {
      // only color the background of the header if Android to fit the typical platform look
      backgroundColor: Platform.OS === 'android' ? Colors.lightOrange : ''
    },
    headerTintColor: Colors.darkOrange,
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
});

export default createAppContainer(EventsNavigator);