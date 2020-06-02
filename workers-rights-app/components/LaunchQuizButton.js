import React from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const LaunchQuizButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/question-white.png")}
            style={styles.iconStyle}
          />
        </View>
        <Text style={styles.text}>Don't know where to look? Take a Quiz!</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 320,
    height: 80,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: Colors.darkOrange,
    borderRadius: 50,
    shadowOpacity: 0.35,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  imageContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    width: "100%",
    height: "100%",
  },
  text: {
    flex: 1,
    fontSize: 16,
    width: "100%",
    color: "white",
  },
});

export default LaunchQuizButton;
