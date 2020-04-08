import React from 'react';
import { View, Text, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RightsScreen from '../screens/RightsScreen';
import SubRightsScreen from '../screens/SubRightsScreen';
import RightsDetailsScreen from '../screens/RightsDetailsScreen';

import Colors from '../constants/Colors';

const RightsNavigator = createStackNavigator({
  Rights: {
    screen: RightsScreen
  },
  SubRights: SubRightsScreen,
  RightsDetails: RightsDetailsScreen
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


export default createAppContainer(RightsNavigator);