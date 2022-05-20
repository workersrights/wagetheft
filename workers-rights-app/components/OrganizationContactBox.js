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

const OrganizationContactBox = () => {
  const onPressDirections = () => {
    console.log("Pressed direction button");
  };

  const onPressCallUs = () => {
    console.log("Pressed call us");
  };

  const onPressAddToContacts = () => {
    console.log("Pressed add to contacts");
  };

  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Text style={styles.counterText}>1</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>San Francisco</Text>
        <Text style={styles.addressText}>
          {`123 Sesame St\nSan Francisco, CA\n123456`}
        </Text>
      </View>
      <View style={styles.contactContainer}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.iconTouchable}
            onPress={onPressDirections}
            underlayColor="none"
            activeOpacity={0.5}
          >
            <View style={styles.iconContainer}>
              <Image
                style={styles.iconImage}
                source={require("../images/placeholder.png")}
              />
            </View>
          </TouchableHighlight>
          <Text style={styles.iconSubtitleText}>4.6 mi</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.iconTouchable}
            onPress={onPressCallUs}
            underlayColor="none"
            activeOpacity={0.5}
          >
            <View style={styles.iconContainer}>
              <Image
                style={styles.iconImage}
                source={require("../images/telephone.png")}
              />
            </View>
          </TouchableHighlight>
          <Text style={styles.iconSubtitleText}>Call Us</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.iconTouchable}
            onPress={onPressAddToContacts}
            underlayColor="none"
            activeOpacity={0.5}
          >
            <View style={styles.iconContainer}>
              <Image
                style={styles.iconImage}
                source={require("../images/contact-book.png")}
              />
            </View>
          </TouchableHighlight>
          <Text style={styles.iconSubtitleText}>Save</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
    borderColor: "rgba(180, 180, 180, 0.50)",
    borderWidth: 1,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  counter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    position: "absolute",
    top: -12,
    left: -12,
    backgroundColor: Colors.darkOrange,
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontFamily: "nunito-regular",
    fontSize: 12,
    color: "#fff",
  },
  textContainer: {
    flex: 1,
    height: "100%",
    alignItems: "flex-start",
  },
  titleText: {
    fontFamily: "nunito-semibold",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 5,
  },
  addressText: {
    fontFamily: "nunito-light",
    fontSize: 14,
    textAlign: "left",
  },
  contactContainer: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  iconContainer: {
    height: 25,
    width: 25,
  },
  iconSubtitleText: {
    fontFamily: "nunito-light",
    fontSize: 10,
    textAlign: "center",
    textAlignVertical: "bottom",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconTouchable: {
    marginBottom: 8,
  },
  iconImage: {
    width: 25,
    height: 25,
  },
});

OrganizationContactBox.propTypes = {};

export default OrganizationContactBox;
