import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuizResultsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The QuizResults Screen!</Text>
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
