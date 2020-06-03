import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/Colors";
import ModalCloseButton from "./ModalCloseButton.js";
import Modal from "react-native-modal"

const FeedModal = (props) => {
  
  return (
    <Modal 
      isVisible={props.isVisible} 
      onBackButtonPress={props.onCloseModal}
      onBackdropPress={props.onCloseModal}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <ModalCloseButton onCloseModal={props.onCloseModal}/>
            <Text style={styles.title}>Rights Twitter Feed</Text>
            {/* image here */}
            <Image
              source={ require("../images/twitter-outline.png")}
              resizeMode="contain"
              style={styles.image}
            />
            {/* Subtitle and description here */}
            <Text style={styles.title}>What is this for?</Text>
            <Text style={styles.description}>
              This section has twitter posts from different Worker's Rights groups and organization. 
            </Text>
          </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: "80%",
    height: "80%", // Hard-coded value to fit iPhone 6/7/8. Dynamic sizing, anyone?
    backgroundColor: Colors.lightOrange,
    borderRadius: 8,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    alignSelf: "center"
  },
  modalContent: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
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

export default FeedModal;
