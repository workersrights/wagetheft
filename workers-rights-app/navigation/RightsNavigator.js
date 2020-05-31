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
import EventsHomeScreen from "../screens/EventsHomeScreen";
import FeedScren from "../screens/FeedScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//import QuizNavigator from "../navigation/QuizNavigator"; This exists, but unused till we figure out how to display quiz above bottom tabs
import QuizHomeScreen from "../screens/QuizHomeScreen";
import QuizContentScreen from "../screens/QuizContentScreen";
import QuizResultsScreen from "../screens/QuizResultsScreen";

import EventsNavigator from "./EventsNavigator";
import Colors from "../constants/Colors";
import FeedNavigator from "./FeedNavigation"; 

const RightsNavigator = createStackNavigator(
  {
    Rights: {
      screen: RightsScreen,
    },
    SubRights: SubRightsScreen,
    RightsDetails: RightsDetailsScreen,
    FavoriteRights: FavoriteRightsScreen,
    QuizHome: QuizHomeScreen,
    QuizContent: QuizContentScreen,
    QuizResults: QuizResultsScreen,
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
    Events: {
      screen: EventsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-calendar" size={25} color={tabInfo.tintColor} />
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
    // Favorites: {screen: FavoritesScreen, navigationOptions: {
    //   tabBarIcon: (tabInfo) => {
    //     return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
    //   }
    // }},
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="md-settings" size={25} color={tabInfo.tintColor} />
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
