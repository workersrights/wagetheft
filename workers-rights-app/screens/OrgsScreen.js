import React from "react";
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
import * as Contacts from "expo-contacts";
import Colors from "../constants/Colors";

const OrgsScreen = ({ route, navigation }) => {
  const onPressWebLink = () => {
    Linking.openURL(route.params.org.website);
  };

  const onPressContactOrgs = async () => {
    const locationPermissions =
      await Location.requestForegroundPermissionsAsync();
    const contactPermissions = await Contacts.requestPermissionsAsync();

    const locationAccess = locationPermissions.status === "granted";
    const contactsAccess = contactPermissions.status === "granted";

    navigation.navigate({
      name: "ContactList",
      params: {
        org: route.params.org,
        contactsAccess,
        locationAccess,
      },
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: route.params.org.image }} style={styles.img} />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 25 }}>
        <View style={styles.bodyContainer}>
          <TouchableHighlight
            style={{ borderRadius: 10, marginTop: 25, width: "85%" }}
            underlayColor="rgba(83, 83, 83, 0.05)"
            onPress={onPressContactOrgs}
          >
            <View style={styles.contactButton}>
              <Text style={styles.buttonText}>
                Contact Nearest Organization
              </Text>
            </View>
          </TouchableHighlight>
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
    width: "100%",
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
    alignItems: "center",
  },
  screen: {
    flex: 1,
  },
  contactButton: {
    borderRadius: 10,
    backgroundColor: Colors.darkOrange,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    width: "100%",
  },
  buttonText: {
    fontFamily: "nunito-bold",
    fontSize: 16,
    textAlign: "center",
    color: "#ffffff",
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
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OrgsScreen;
