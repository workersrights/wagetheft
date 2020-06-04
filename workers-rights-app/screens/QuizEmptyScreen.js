import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import QuizHomeScreen from "./QuizHomeScreen";

const QuizEmptyScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/question.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ textAlign: "center" }}>
            Oops! Looks like you didn't select any options in the quiz! Go back
            and try again?
          </Text>
        </View>
      </View>
    </View>
  );
};

QuizEmptyScreen.navigationOptions = (props) => {
  return {
    headerTitle: "No Selections",
    headerStyle: {
      // only color the background of the header if Android to fit the typical platform look
      backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
    },
    headerTintColor: Colors.darkOrange,
    headerTitleStyle: {
      fontWeight: "bold",
    },

    headerRight: () => (
      <TouchableOpacity
        style={{ paddingHorizontal: 15 }}
        onPress={() => props.navigation.navigate("Rights")}
      >
        <Text style={styles.doneButton}>Quit</Text>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    width: "80%",
  },
  imageContainer: {
    margin: 10,
    height: 50,
    width: 50,
  },
  textContainer: {
    margin: 10,
  },
  doneButton: {
    fontSize: 17,
    color: Colors.darkOrange,
  },
});

export default QuizEmptyScreen;
