import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import PropTypes from "prop-types";
import Colors from "../constants/Colors";
import ModalCloseButton from "./ModalCloseButton";
import ImportedData from "../data/FetchRightsData"; //eslint-disable-line
import ButtonTemplate from "./ButtonTemplate";

/*
 * Functional Component Defintion: RightsCategoryModal
 *
 * This component outlines the look for the Modal presented
 * on the RightsScreen whenever a RightsCategoryTile is
 * tapped.
 *
 */

const RightsCategoryModal = ({
  categoryId,
  isVisible,
  onCloseModal,
  onAdvance,
}) => {
  const selectedCategory = ImportedData.getRightsCategories().filter(
    (category) => category.id === categoryId
  )[0];

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onCloseModal}
      onBackdropPress={onCloseModal}
    >
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <ModalCloseButton onCloseModal={onCloseModal} />
          <Text style={styles.title}>{selectedCategory.title}</Text>
          <Image
            source={selectedCategory.image}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.title}>{selectedCategory.subtitle}</Text>
          <Text style={styles.description}>{selectedCategory.description}</Text>

          <ButtonTemplate onPress={onAdvance} title="Read more →" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: "80%",
    height: "80%",
    maxHeight: 450,
    backgroundColor: Colors.lightOrange,
    borderRadius: 8,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    alignSelf: "center",
  },
  modalContent: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  description: {
    padding: 10,
    textAlign: "center",
  },
  image: {
    width: "30%",
    height: "30%",
  },
});

RightsCategoryModal.propTypes = {
  categoryId: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAdvance: PropTypes.func.isRequired,
};

export default RightsCategoryModal;
