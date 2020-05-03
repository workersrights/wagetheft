import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const ButtonTemplate = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...props.style }}
      onPress={props.onPress}
      activeOpacity={0.6}
    >
      <Text style={{ ...styles.titleStyle, ...props.titleStyle }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "60%",

    backgroundColor: Colors.darkOrange,
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: Colors.darkOrange,
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
  titleStyle: {
    color: "white",
  },
});

export default ButtonTemplate;
