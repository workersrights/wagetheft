import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import PropTypes from "prop-types";
import Colors from "../constants/Colors";
import ModalCloseButton from "./ModalCloseButton";
import ButtonTemplate from "./ButtonTemplate";

/*
 * Functional Component Defintion: IntroConfirmationModal
 *
 */

const IntroConfirmationModal = ({
  language,
  isWorker,
  isVisible,
  onCloseModal,
  onAdvance,
}) => {
  const role = isWorker ? "worker" : "business owner";

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onCloseModal}
      onBackdropPress={onCloseModal}
    >
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <ModalCloseButton onCloseModal={onCloseModal} />
          <Text style={styles.title}>Confirm?</Text>
          <Text style={styles.description}>Language: {language}</Text>
          <Text style={styles.description}>Role: {role}</Text>

          <ButtonTemplate onPress={onAdvance} title="Confirm" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: "80%",
    height: 250,
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
    marginBottom: 30,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  description: {
    padding: 5,
    textAlign: "center",
  },
  image: {
    width: "30%",
    height: "30%",
  },
});

IntroConfirmationModal.propTypes = {
  language: PropTypes.string.isRequired,
  isWorker: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAdvance: PropTypes.func.isRequired,
};

export default IntroConfirmationModal;
