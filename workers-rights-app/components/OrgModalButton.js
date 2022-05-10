/* eslint-disable react/prop-types */
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";
import Colors from "../constants/Colors";
import OrgModalButtonTypes from "../constants/OrgModalButtonTypes";

const OrgModalButton = ({ type, exStyles, address, locationGranted }) => {
  let image = "";
  let text = "";
  if (type === OrgModalButtonTypes.call) {
    image = require("../images/telephone.png");
    text = "Call Us";
  } else if (type === OrgModalButtonTypes.directions) {
    image = require("../images/placeholder.png");
    text = "Get Directions";
  } else if (type === OrgModalButtonTypes.contacts) {
    image = require("../images/contact-book.png");
    text = "Add to Contacts";
  }

  const grantedLocationAction = () => {
    if (type === OrgModalButtonTypes.call) {
      console.log(address.phone);
    } else if (type === OrgModalButtonTypes.directions) {
      console.log(address);
    } else if (type === OrgModalButtonTypes.contacts) {
      console.log("Add to Contacts");
    }
  };

  const rejectedLocationAction = () => {
    if (type === OrgModalButtonTypes.call) {
      console.log("Location Denied: Phone");
    } else if (type === OrgModalButtonTypes.directions) {
      console.log("Location denied: Directions");
    } else if (type === OrgModalButtonTypes.contacts) {
      console.log("Location Denied: Contacts");
    }
  };

  const onPressButton = () => {
    if (locationGranted) {
      grantedLocationAction();
    } else {
      rejectedLocationAction();
    }
  };

  return (
    <TouchableHighlight
      style={{ ...styles.touchable, ...exStyles }}
      onPress={onPressButton}
    >
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={image} />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 10,
  },
  container: {
    height: 80,
    width: 100,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontFamily: "nunito-bold",
    fontSize: 11,
    color: Colors.darkOrange,
    marginTop: 5,
  },
  imgContainer: {
    width: 30,
    height: 30,
    marginTop: 15,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

OrgModalButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default OrgModalButton;
