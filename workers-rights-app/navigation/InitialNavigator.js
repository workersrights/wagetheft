import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import IntroScreen from "../screens/IntroScreen";
import RightsScreen from "../screens/RightsScreen";
import SubRightsScreen from "../screens/SubRightsScreen";
import RightsDetailsScreen from "../screens/RightsDetailsScreen";
import Colors from "../constants/Colors";

/*
 * Creates the rights stack navigation flow. Designates
 * the screens on the rights navigation stack as well as
 * the styling for the headers of the stack.
 *
 */
const RightsNavigator = createStackNavigator(
  {
    Rights: {
      screen: RightsScreen,
    },
    SubRights: {
      screen: SubRightsScreen,
    },
    RightsDetails: {
      screen: RightsDetailsScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
      },
      headerTintColor: Colors.darkOrange,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

/*
 *
 * Creates the tab navigator for the app. Designates the intial starting
 * screen as the Rights screen and configures the look of the tab bar.
 *
 */
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
  },
  {
    initialRouteName: "Rights",
    tabBarOptions: {
      activeTintColor: Colors.darkOrange,
    },
  }
);

/*
 * We differentiate AppNavigator from InitialNavigator as follows:
 *   AppNavigator: Everything related to the app's main function; is nested inside InitialNavigator
 *   InitialNavigator: Contains AppNavigator AND introscreen as its 2 children.
 */
const AppNavigator = createAppContainer(RightsTabNavigator);
const InitialNavigator = createSwitchNavigator({
  Rights: createAppContainer(AppNavigator),
  Intro: IntroScreen
})

export default createAppContainer(InitialNavigator);
