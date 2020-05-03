import React from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const LaunchQuizButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      activeOpacity={0.6}
    >
      <View style={styles.buttonContent}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/question-white.png")}
            style={styles.iconStyle}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Don't know where to look? Take Quiz!</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "60%",

    backgroundColor: Colors.darkOrange,
    borderRadius: 100,
    shadowOpacity: 0.35,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,

    position: "absolute",
    bottom: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imageContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    shadowOpacity: 0.4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    overflow: "visible",
  },
  textContainer: {
    width: "70%",
    margin: 10,
  },
  text: {
    width: "100%",
    color: "white",
    textAlign: "center",
  },
});

export default LaunchQuizButton;
