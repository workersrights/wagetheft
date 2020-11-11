import React from "react";
import {
  Dimensions,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import PropTypes from "prop-types";
import Colors from "../constants/Colors";
import ImportedData from "../data/FetchRightsData"; //eslint-disable-line
import ModalCloseButton from "./ModalCloseButton";

/*
 * Functional Component Defintion: RightsOrganizationModal
 *
 * This component outlines the look and feel of the Modal that is
 * presented whenever an OrganizationBox is pressed on the
 * RightsDetailScreen.
 *
 */

const RightsOrganizationModal = ({ id, isVisible, onCloseModal }) => {
  const selectedOrganization = ImportedData.getOraganizations().filter(
    (organization) => organization.id === id
  )[0];
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;

  return (
    <Modal
      isVisible={isVisible}
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      propagateSwipe
      onBackButtonPress={onCloseModal}
      onBackdropPress={onCloseModal}
    >
      <View style={styles.modal}>
        <Text style={styles.title}>{selectedOrganization.abbrev}</Text>
        <ModalCloseButton onCloseModal={onCloseModal} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: selectedOrganization.image }}
              style={styles.image}
            />
          </View>

          <View style={styles.description}>
            {selectedOrganization.description.map((desc) => (
              <View style={styles.subheading}>
                <Text style={styles.subtitle}>{desc.title}</Text>
                {desc.data.map((line) => (
                  <Text style={styles.info}>{line}</Text>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: "80%",
    height: "80%",
    backgroundColor: Colors.lightOrange,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    alignSelf: "center",
    borderRadius: 8,
  },
  scroll: {
    paddingBottom: 10,
  },
  title: {
    padding: "2%",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  subheading: {
    padding: 5,
  },
  description: {
    flex: 1,
    paddingHorizontal: "1%",
    textAlign: "center",
  },
  info: {
    textAlign: "center",
    fontSize: 12,
  },
  imageContainer: {
    paddingTop: "2%",
    width: "100%",
    height: 170,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: null,
    height: null,
  },
});

RightsOrganizationModal.propTypes = {
  id: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default RightsOrganizationModal;
