import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Colors from "../constants/Colors";

/*
 * Functional Component Defintion: ButtonTemplate
 *
 * This component outlines a basic rounded button for
 * reuse throughout the app.
 *
 */

const ButtonTemplate = ({ style, onPress, titleStyle, title }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...style }}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text style={{ ...styles.titleStyle, ...titleStyle }}>{title}</Text>
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

ButtonTemplate.propTypes = {
  style: PropTypes.object, //eslint-disable-line
  onPress: PropTypes.func.isRequired,
  titleStyle: PropTypes.object, //eslint-disable-line
  title: PropTypes.string.isRequired,
};

export default ButtonTemplate;