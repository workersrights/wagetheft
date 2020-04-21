import React from "react";
import { View, Text, Modal, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import ModalCloseButton from "./ModalCloseButton.js";
import { RIGHTSCATEGORIES } from "../data/dummy-data";
import ButtonTemplate from "../components/ButtonTemplate";

const RightsCategoryModal = (props) => {
  const selectedCategory = RIGHTSCATEGORIES.filter(
    (category) => category.id === props.categoryId
  )[0];
  /* 
  I can't call <Image souce={required(imageUrl)} />.
  const imageUrl = "../assets/".concat(selectedCategory.image);
  */

  return (
    <Modal visible={props.isVisible} transparent={true} animationType="fade">
      <View style={styles.dimOverlay}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <ModalCloseButton onCloseModal={props.onCloseModal} />

            <Text style={styles.title}>{selectedCategory.title}</Text>
            {/* image here */}
            <Image
              source={selectedCategory.image}
              resizeMode="contain"
              style={styles.image}
            />
            {/* Subtitle and description here */}
            <Text style={styles.title}>{selectedCategory.subtitle}</Text>
            <Text style={styles.description}>
              {selectedCategory.description}
            </Text>

            <ButtonTemplate onPress={props.onAdvance} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: "70%",
    height: "60%",
    backgroundColor: Colors.lightOrange,
    borderRadius: 0,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  dimOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.26)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  description: {
    paddingVertical: 10,
    textAlign: "center",
  },
  image: {
    width: "30%",
    height: "30%",
    marginBottom: 20,
  },
});

export default RightsCategoryModal;
