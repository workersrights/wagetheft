import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RightsNavigator from "./navigation/RightsNavigator";
import { enableScreens } from "react-native-screens";

enableScreens();

export default function App() {
  return <RightsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
