import React from "react";
import {ScrollView, View, Text, Image, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";
import ModalCloseButton from "./ModalCloseButton.js";
import {ORGANIZATIONS } from "../data/dummy-data";
import Modal from 'react-native-modal';

{/*const RightsOrganizationModal = (props) => {
  const selectedOrganization = ORGANIZATIONS.filter(
    (organization) => organization.id === props.organizationId
  )[0];

  return (
    <Modal visible={props.isVisible} transparent={true} animationType="fade">
      <View style={styles.dimOverlay}>
        <ScrollView style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.imageContainer}>
                {// image here }
                <Image
                  source={selectedOrganization.image}
                  resizeMode="contain"
                  style={styles.image}
                />
            </View>
            <ModalCloseButton onCloseModal={props.onCloseModal} />
            <Text style={styles.title}>{selectedOrganization.title}</Text>
            {// Subtitles and description here }
            <View style={styles.description}>
              {selectedOrganization.description.map(desc => (
                <View style={styles.subheading}>
                    {console.log(desc)}
                    <Text style={styles.subtitle}>{desc.title}</Text>
                    {desc.data.map(line => (
                      <Text style={styles.info}>{line}</Text>
                    ))}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: "80%",
    height: "50%",
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
    alignItems: "center",
  },
  title: {
    paddingTop: "30%",
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    textShadowColor: "#000000",
    textShadowRadius: 10
  },
  subtitle: {
    textAlign: "center",
    fontWeight: "bold"
  },
  subheading: {
    padding: 5
  },
  description: {
    padding: 15,
    textAlign: "center",
  },
  info :{
    textAlign: "center",
    fontSize: 12,
  },
  imageContainer: {
    position: "absolute",
    width: "100%",
    height: "40%",
  },
  image: {
    flex: 1, 
    width: null,
    height: null, 
    resizeMode: 'cover',
    borderRadius: 8
  },
});*/}

export default class ModalTester extends React.Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}

//export default RightsOrganizationModal;
