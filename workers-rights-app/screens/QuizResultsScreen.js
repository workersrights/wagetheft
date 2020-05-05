import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuizResultsScreen = (props) => {
  const selectedQuizEndIds = props.navigation.getParam("selectedQuizEnds");
  return (
    <View style={styles.screen}>
      <Text>The QuizResults Screen!</Text>
      <Text>Selected Quiz Ends: {selectedQuizEndIds}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QuizResultsScreen;
