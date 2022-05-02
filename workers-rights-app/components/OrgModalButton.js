/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
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

const OrgModalButton = ({ type, exStyles }) => {
  const [image, setImage] = useState(require("../images/telephone.png"));
  const [text, setText] = useState("Call Us");

  useEffect(() => {
    let tempImg = "";
    let tempText = "";
    if (type === OrgModalButtonTypes.call) {
      tempImg = require("../images/telephone.png");
      tempText = "Call Us";
    } else if (type === OrgModalButtonTypes.directions) {
      tempImg = require("../images/placeholder.png");
      tempText = "Get Directions";
    } else if (type === OrgModalButtonTypes.contacts) {
      tempImg = require("../images/contact-book.png");
      tempText = "Add to Contacts";
    }

    setImage(tempImg);
    setText(tempText);
  }, []);

  const onPressButton = () => {
    console.log("Pressed Button");
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
