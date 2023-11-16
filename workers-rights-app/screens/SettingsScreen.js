import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as Linking from "expo-linking";
import Colors from "../constants/Colors";

/*
 *
 * Function Component Definiton: Settings Screen
 *
 */
const SettingsScreen = () => {
  const onPressPrivacyPolicy = () => {
    Linking.openURL(
      "https://workers-rights-portal.herokuapp.com/privacy-policy"
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressPrivacyPolicy}>
        <Text style={styles.text}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
};

/*
 *
 * Set up the layout of the navigation header. Provides the header title.
 *
 */
SettingsScreen.navigationOptions = {
  headerTitle: "Settings",
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  button: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: Colors.darkGray,
    fontSize: 18,
  },
});

export default SettingsScreen;
