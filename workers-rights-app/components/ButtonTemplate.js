import React from "react";
import { TouchableHighlight, Text, StyleSheet, View } from "react-native";
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
    <TouchableHighlight onPress={onPress} style={styles.touchable}>
      <View style={{ ...styles.container, ...style }}>
        <Text style={{ ...styles.titleStyle, ...titleStyle }}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 8,
  },
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
    paddingVertical: 10,
    paddingHorizontal: 20,
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
