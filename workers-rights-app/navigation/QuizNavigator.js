/*
 * ALL CODE HERE IS UNUSED. This file simply creates a Stack Navigator out of all the Quiz-type screens.
 * Until we figure out how to portalize this entire stack and have it render the quiz screens on top of the bottom tab navigator,
 * this will remain unused. The Quiz-type screens are used directly in the top-level navigator created in RightsNavigator.js.
 */

import React from "react";
import { View, Text, Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import QuizHomeScreen from "../screens/QuizHomeScreen";
import QuizContentScreen from "../screens/QuizContentScreen";
import QuizResultsScreen from "../screens/QuizResultsScreen";
import QuizEmptyScreen from "../screens/QuizEmptyScreen";
// import some home screen;

const QuizNavigator = createStackNavigator(
  {
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
    },
  }
);

export default createAppContainer(QuizNavigator);
