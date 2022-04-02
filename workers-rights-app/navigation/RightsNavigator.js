import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RightsScreen from "../screens/RightsScreen";
import SubRightsScreen from "../screens/SubRightsScreen";
import RightsDetailsScreen from "../screens/RightsDetailsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../constants/Colors";
import ImportedData from "../data/FetchRightsData"; //eslint-disable-line

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/*
 *
 * Creates the rights stack navigation flow. Designates
 * the screens on the rights navigation stack as well as
 * the styling for the headers of the stack.
 *
 */
const RightsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
        },
        headerTintColor: Colors.darkOrange,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Rights"
        component={RightsScreen}
        options={{ title: "Rights Information" }}
      />
      <Stack.Screen
        name="SubRights"
        component={SubRightsScreen}
        options={({ route }) => {
          const catId = route.params.categoryId;
          const selectedCategory = ImportedData.getRightsCategories().find(
            (cat) => cat.id === catId
          );
          return {
            title: selectedCategory.title,
          };
        }}
      />
      <Stack.Screen
        name="RightsDetails"
        component={RightsDetailsScreen}
        options={({ route }) => {
          const { subrightId } = route.params;
          const parentSubRight = ImportedData.getSubRights().find(
            (subright) => subright.id === subrightId
          );

          if (parentSubRight.title.length > 25) {
            return {
              title: `${parentSubRight.title.substring(0, 21)}...`,
              headerBackTitle: "Back",
            };
          }
          return { title: parentSubRight.title, headerBackTitle: "Back" };
        }}
      />
    </Stack.Navigator>
  );
};

/*
 *
 * Creates the settings stack navigation flow. Designates
 * the screens on the settings navigation stack as well as
 * the styling for the headers of the stack.
 *
 */
const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
        },
        headerTintColor: Colors.darkOrange,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

/*
 *
 * Creates the tab navigator for the app. Designates the intial starting
 * screen as the Rights screen and configures the look of the tab bar.
 *
 */
const RightsTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        initialRouteName: "Rights",
      }}
      tabBarOptions={{ activeTintColor: Colors.darkOrange }}
    >
      <Tab.Screen
        name="Rights"
        component={RightsNavigator}
        options={{
          tabBarLabel: "Rights",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-book" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigator = () => (
  <NavigationContainer>
    <RightsTabNavigator />
  </NavigationContainer>
);

export default RootNavigator;
