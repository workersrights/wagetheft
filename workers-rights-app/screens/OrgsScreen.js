import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import * as Linking from "expo-linking";
import PropTypes from "prop-types";
import * as Location from "expo-location";
import Colors from "../constants/Colors";
import OrgModalButtonTypes from "../constants/OrgModalButtonTypes";
import OrgModalButton from "../components/OrgModalButton";
import { findNearestAddress, isPhone } from "../data/AddressUtils";

const OrgsScreen = ({ route }) => {
  const [buttonList, setButtonList] = useState([]);

  const createModalButtons = useCallback(
    (currLocation, addresses, locationGranted) => {
      const closestAddress = findNearestAddress(
        addresses,
        currLocation.coords.latitude,
        currLocation.coords.longitude
      );

      const buttons = [];
      if (!isPhone(addresses)) {
        buttons.push(
          <OrgModalButton
            key={OrgModalButtonTypes.call}
            type={OrgModalButtonTypes.call}
            locationGranted={locationGranted}
            address={closestAddress}
          />
        );
        buttons.push(
          <OrgModalButton
            key={OrgModalButtonTypes.contacts}
            type={OrgModalButtonTypes.contacts}
            exStyles={{ marginLeft: 15 }}
            locationGranted={locationGranted}
            address={closestAddress}
          />
        );
      } else {
        buttons.push(
          <OrgModalButton
            key={OrgModalButtonTypes.call}
            type={OrgModalButtonTypes.call}
            locationGranted={locationGranted}
            address={closestAddress}
          />
        );
        buttons.push(
          <OrgModalButton
            key={OrgModalButtonTypes.directions}
            type={OrgModalButtonTypes.directions}
            exStyles={{ marginHorizontal: 15 }}
            locationGranted={locationGranted}
            address={closestAddress}
          />
        );
        buttons.push(
          <OrgModalButton
            key={OrgModalButtonTypes.contacts}
            type={OrgModalButtonTypes.contacts}
            locationGranted={locationGranted}
            address={closestAddress}
          />
        );
      }

      return buttons;
    },
    []
  );

  const fetchCurrLocation = useCallback(async () => {
    const organization = route.params.org;
    if (Object.keys(organization.addresses).length === 0) {
      setButtonList([]);
      return;
    }
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // TODO: WHAT HAPPENS WHEN THE USER DOES NOT ALLOW LOCATION PERMISSION
      const buttons = createModalButtons(null, organization.addresses, false);
      setButtonList(buttons);
      return;
    }
    const currLocation = await Location.getCurrentPositionAsync();
    const buttons = createModalButtons(
      currLocation,
      organization.addresses,
      true
    );
    setButtonList(buttons);
  }, [createModalButtons]);

  useEffect(() => {
    fetchCurrLocation();
  }, [route, fetchCurrLocation]);

  const onPressWebLink = () => {
    Linking.openURL(route.params.org);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: route.params.org.image }} style={styles.img} />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 25 }}>
        <View style={styles.bodyContainer}>
          <View style={styles.buttonsContainer}>{buttonList}</View>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Website:</Text>
            <TouchableHighlight
              style={styles.touchableStyle}
              underlayColor="rgba(83, 83, 83, 0.05)"
              onPress={onPressWebLink}
            >
              <Text style={styles.websiteLink}>{route.params.org.website}</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Description:</Text>
            <Text style={styles.descriptionText}>
              {route.params.org.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    width: "100%",
    height: 200,
  },
  headerText: {
    fontSize: 18,
    fontFamily: "nunito-bold",
    marginBottom: 5,
  },
  descriptionText: {
    fontFamily: "nunito-regular",
    fontSize: 16,
  },
  textContainer: {
    marginTop: 25,
  },
  websiteLink: {
    fontFamily: "nunito-regular",
    fontSize: 16,
    color: Colors.darkOrange,
    textDecorationLine: "underline",
  },
  touchableStyle: {
    alignSelf: "flex-start",
  },
  bodyContainer: {
    paddingHorizontal: 25,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },
  screen: {
    flex: 1,
  },
});

OrgsScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      org: PropTypes.shape({
        image: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        addresses: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default OrgsScreen;