import React from "react";
import { TouchableHighlight, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import Colors from "../constants/Colors";

/*
 * Functional Component Defintion: ModalCloseButton
 *
 * This component outlines a basic "x" button to be used
 * to dismiss modals.
 *
 */

const ModalCloseButton = ({ onCloseModal }) => {
  return (
    <TouchableHighlight
      style={styles.modalCloseButton}
      underlayColor="transparent"
      u
      onPress={onCloseModal}
    >
      <Ionicons name="md-close" size={30} color={Colors.darkOrange} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  modalCloseButton: {
    position: "absolute",
    top: 5,
    right: 10,
  },
});

ModalCloseButton.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default ModalCloseButton;
