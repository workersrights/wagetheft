/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import * as Location from "expo-location";
import PropTypes from "prop-types";
import OrganizationContactBox from "../components/OrganizationContactBox";
import { haversineDist } from "../data/AddressUtils";

const ContactOrgsScreen = ({ route }) => {
  const { contactsAccess, locationAccess, org } = route.params;
  const [addressList, setAddressList] = useState([]);

  const sortByDistance = useCallback(async (tempAddressList) => {
    const currLocation = await Location.getCurrentPositionAsync();
    const currLat = currLocation.coords.latitude;
    const currLong = currLocation.coords.longitude;

    const addressListDistances = tempAddressList.map((address) => {
      const lat = parseFloat(address.lat);
      const long = parseFloat(address.long);
      const dist = haversineDist(lat, long, currLat, currLong);

      return { ...address, dist };
    });

    addressListDistances.sort((address1, address2) => {
      const lat1 = parseFloat(address1.lat);
      const long1 = parseFloat(address1.long);
      const lat2 = parseFloat(address2.lat);
      const long2 = parseFloat(address2.long);

      const dist1 = haversineDist(lat1, long1, currLat, currLong);
      const dist2 = haversineDist(lat2, long2, currLat, currLong);

      return dist1 - dist2;
    });

    setAddressList(addressListDistances);
  }, []);

  const renderContactBox = useCallback((itemData) => {
    const address = itemData.item;
    const count = itemData.index + 1;

    return (
      <OrganizationContactBox
        count={count}
        distance={address.dist}
        address={address}
        contactAccess={contactsAccess}
        orgName={org.name}
      />
    );
  }, []);

  const addressKeyExtractor = useCallback((item) => {
    const address = item;
    let key = "";
    if (address.street != null && address.street !== "") {
      key = address.street;
    } else {
      key = address.state;
    }
    return key;
  }, []);

  useEffect(() => {
    const tempAddressList = [];
    for (const latLongString of Object.keys(org.addresses)) {
      tempAddressList.push(org.addresses[latLongString]);
    }

    if (locationAccess) {
      sortByDistance(tempAddressList);
    }
    setAddressList(tempAddressList);
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        data={addressList}
        renderItem={renderContactBox}
        style={styles.list}
        keyExtractor={addressKeyExtractor}
        contentContainerStyle={{
          padding: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
  },
  list: {
    width: "100%",
  },
});

ContactOrgsScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      contactsAccess: PropTypes.bool.isRequired,
      locationAccess: PropTypes.bool.isRequired,
      org: PropTypes.shape({
        name: PropTypes.string.isRequired,
        addresses: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContactOrgsScreen;
