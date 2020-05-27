import React from "react";
import {Dimensions, ScrollView, View, Text, Image, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";
import ImportedData from "../data/FetchRightsData";
import Modal from 'react-native-modal';
import ModalCloseButton from "../components/ModalCloseButton.js"

const RightsOrganizationModal = (props) => {
  const selectedOrganization = ImportedData.getOraganizations().filter(
    (organization) => organization.id === props.organizationId
  )[0];

  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;

  return (
    <Modal 
      isVisible={props.isVisible} 
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      propagateSwipe
      onBackButtonPress={props.onCloseModal}
      onBackdropPress={props.onCloseModal}
      >
      <View style={styles.modal}>
        <Text style={styles.title}>{selectedOrganization.title}</Text>
        <ModalCloseButton onCloseModal={props.onCloseModal}/>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <View style={styles.imageContainer}>
              {/* image here */}
              <Image
                resizeMode= "contain"
                source={selectedOrganization.image}
                style={styles.image}
              />
          </View>
          
          {/* Subtitles and description here */}
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
    textAlign: "center"
  },
  subtitle: {
    textAlign: "center",
    fontWeight: "bold"
  },
  subheading: {
    padding: 5
  },
  description: {
    flex:1,
    paddingHorizontal: "5%",
    textAlign: "center",
  },
  info :{
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

export default RightsOrganizationModal;
