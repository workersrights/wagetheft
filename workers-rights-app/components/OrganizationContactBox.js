import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";
import openMap from "react-native-open-maps";
import * as Linking from "expo-linking";
import * as Contacts from "expo-contacts";
import Colors from "../constants/Colors";
import { isPhone } from "../data/AddressUtils";

const OrganizationContactBox = ({
  count,
  distance,
  address,
  contactAccess,
  orgName,
}) => {
  const onPressDirections = () => {
    if (
      address.lat == null ||
      address.long == null ||
      address.lat === "" ||
      address.long === ""
    ) {
      return;
    }
    const lat = parseFloat(address.lat);
    const long = parseFloat(address.long);
    openMap({
      latitude: lat,
      longitude: long,
      query: orgName,
    });
  };

  const onPressCallUs = () => {
    if (address.phone == null || address.phone === "") {
      return;
    }
    Linking.openURL(`tel:${address.phone}`);
  };

  const onPressAddToContacts = async () => {
    const phoneNumbersToAdd = [];
    if (address.phone != null && address.phone !== "") {
      phoneNumbersToAdd.push({ number: address.phone });
    }
    const addressesToAdd = [];
    if (address.street !== "" && address.street !== "%phone%") {
      const addressToAdd = {
        street: address.street,
        city: address.city,
        country: "United States of America",
        region: address.state,
        postalCode: address.zip,
        label: orgName,
      };
      addressesToAdd.push(addressToAdd);
    }

    const newContact = {
      firstName: orgName,
      addresses: addressesToAdd,
      phoneNumbers: phoneNumbersToAdd,
    };

    Contacts.presentFormAsync(null, newContact, { isNew: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Text style={styles.counterText}>{count}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          {!isPhone(address) ? `${address.city}` : orgName}
        </Text>
        {!isPhone(address) ? (
          <Text style={styles.addressText}>
            {`${address.street !== "" ? address.street : ""}\n${
              address.city
            }, ${address.state}\n${address.zip}`}
          </Text>
        ) : null}
      </View>
      <View style={styles.contactContainer}>
        {!isPhone(address) ? (
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
            <Text style={styles.iconSubtitleText}>
              {distance != null ? `${distance.toFixed(1)} mi` : "Directions"}
            </Text>
          </View>
        ) : null}
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
        {contactAccess ? (
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
        ) : null}
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
    marginBottom: 15,
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

OrganizationContactBox.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    lat: PropTypes.string.isRequired,
    long: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  contactAccess: PropTypes.bool.isRequired,
  distance: PropTypes.number,
  count: PropTypes.number.isRequired,
  orgName: PropTypes.string.isRequired,
};

OrganizationContactBox.defaultProps = {
  distance: null,
};

export default OrganizationContactBox;
