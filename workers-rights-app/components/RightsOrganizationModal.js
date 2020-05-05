import React from "react";
import {Dimensions, ScrollView, View, Text, Image, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";
import {ORGANIZATIONS } from "../data/dummy-data";
import Modal from 'react-native-modal';

const RightsOrganizationModal = (props) => {
  const selectedOrganization = ORGANIZATIONS.filter(
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
        <ScrollView contentContainerStyle={styles.scroll} >
          <Text style={styles.title}>{selectedOrganization.title}</Text>
          <View style={styles.imageContainer}>
              {/* image here */ }
              <Image
                source={selectedOrganization.image}
                resizeMode="contain"
                style={styles.image}
              />
          </View>
          
          {/* Subtitles and description here */ }
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
    paddingBottom: 400   // scroll view doesn't show everything for some reason this is added as a placeholder to see content
  },
  title: {
    padding: 10,
    paddingBottom: 0,
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
    padding: 10,
    paddingTop: 0,
    textAlign: "center",
  },
  info :{
    textAlign: "center",
    fontSize: 12,
  },
  imageContainer: {
    height: "50%",
    padding: 5
  },
  image: {
    flex: 1, 
    width: "100%",
    height: "100%", 
    resizeMode: "contain",
    borderRadius: 8
  },
});

export default RightsOrganizationModal;
