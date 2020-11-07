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
//import QuizNavigator from "../navigation/QuizNavigator"; This exists, but unused till we figure out how to display quiz above bottom tabs
import QuizHomeScreen from "../screens/QuizHomeScreen";
import QuizContentScreen from "../screens/QuizContentScreen";
import QuizResultsScreen from "../screens/QuizResultsScreen";
import QuizEmptyScreen from "../screens/QuizEmptyScreen";

import FeedNavigator from "./FeedNavigation";
import Colors from "../constants/Colors";

const RightsNavigator = createStackNavigator(
  {
    Rights: {
      screen: RightsScreen,
    },
    SubRights: SubRightsScreen,
    RightsDetails: RightsDetailsScreen,
    QuizHome: QuizHomeScreen,
    QuizContent: QuizContentScreen,
    QuizResults: QuizResultsScreen,
    QuizEmpty: QuizEmptyScreen,
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
    },
    Feed: {
      screen: FeedNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Icon name="forum-outline" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    initialRouteName: "Rights",
    tabBarOptions: {
      activeTintColor: Colors.darkOrange,
    },
  }
);

export default createAppContainer(RightsTabNavigator);
