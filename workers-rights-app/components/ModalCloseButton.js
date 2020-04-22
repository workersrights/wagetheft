import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const ModalCloseButton = (props) => {
  return (
    <TouchableHighlight
      style={styles.modalCloseButton}
      underlayColor="transparent"
      u
      onPress={props.onCloseModal}
    >
      <Ionicons name="md-close" size={30} color={Colors.darkOrange}></Ionicons>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  modalCloseButton: {
    position: "absolute",
    paddingTop: 15,
    paddingRight: 20,
    top: 0,
    right: 0,
  },
});

export default ModalCloseButton;
