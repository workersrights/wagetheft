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

const RightsCategoryModal = ({ categoryId, onCloseModal, onAdvance }) => {
  const selectedCategory = ImportedData.getRightsCategories().filter(
    (category) => category.id === categoryId
  )[0];

  return (
    <Modal
      isVisible
      onBackButtonPress={onCloseModal}
      onBackdropPress={onCloseModal}
    >
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <ModalCloseButton onCloseModal={onCloseModal} />
          <View style={styles.imageContainer}>
            <Image
              source={selectedCategory.image}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <Text style={styles.subtitle}>{selectedCategory.subtitle}</Text>
          <Text style={styles.description}>{selectedCategory.description}</Text>
          <ButtonTemplate onPress={onAdvance} title="Read more" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: "85%",
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
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: "center",
  },
  description: {
    fontFamily: "nunito-semibold",
    fontSize: 16,
    marginBottom: 20,
    color: "#424C55",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "nunito-extrabold",
    fontSize: 16,
    marginBottom: 20,
    color: "#424C55",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 90,
    height: 90,
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

RightsCategoryModal.propTypes = {
  categoryId: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAdvance: PropTypes.func.isRequired,
};

export default RightsCategoryModal;
