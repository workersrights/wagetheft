import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const ButtonTemplate = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      activeOpacity={0.6}
    >
      <Text style={styles.readMore}>Read more →</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "60%",

    backgroundColor: Colors.darkOrange,
    borderRadius: 8,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    padding: 10,

    position: "absolute",
    bottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  readMore: {
    color: "white",
  },
});

export default ButtonTemplate;
