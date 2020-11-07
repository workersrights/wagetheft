import React from "react";
import { View, Text, Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import RightsScreen from "../screens/RightsScreen";
import SubRightsScreen from "../screens/SubRightsScreen";
import RightsDetailsScreen from "../screens/RightsDetailsScreen";
import FavoriteRightsScreen from "../screens/FavoriteRightsScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Colors from "../constants/Colors";

const RightsNavigator = createStackNavigator(
  {
    Rights: {
      screen: RightsScreen,
    },
    SubRights: SubRightsScreen,
    RightsDetails: RightsDetailsScreen,
  },
  {
    // second argument: to configure the style of the navigator
    defaultNavigationOptions: {
      headerStyle: {
        // only color the background of the header if Android to fit the typical platform look
        backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
      },
      headerTintColor: Colors.darkOrange,
      headerTitleStyle: {
        fontWeight: "bold",
      },
      //cardStyle: {backgroundColor: 'white'}
    },
  }
);

// have 1 stack per tab
const RightsTabNavigator = createBottomTabNavigator(
  {
    Rights: {
      screen: RightsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-book" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    }
  },
  {
    initialRouteName: "Rights",
    tabBarOptions: {
      activeTintColor: Colors.darkOrange,
    },
  }
);

export default createAppContainer(RightsTabNavigator);
