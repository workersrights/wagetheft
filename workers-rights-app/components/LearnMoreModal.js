import React from "react";
import { View, Text, Modal, Image, FlatList, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import ModalCloseButton from "./ModalCloseButton.js";
import { RIGHTSCATEGORIES } from "../data/dummy-data";

const LearnMoreModal = (props) => {
  return (
    <Modal visible={props.isVisible} transparent={true} animationType="fade">
      <View style={styles.dimOverlay}>
        <View style={styles.modal}>
          <ModalCloseButton onCloseModal={props.onCloseModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  dimOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.26)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "80%",
    height: "50%",
    minHeight: 420,
    backgroundColor: Colors.lightOrange,
    borderRadius: 0,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
});

export default LearnMoreModal;
