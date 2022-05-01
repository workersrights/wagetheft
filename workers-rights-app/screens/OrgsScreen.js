import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import * as Linking from "expo-linking";
import PropTypes from "prop-types";
import Colors from "../constants/Colors";

const OrgsScreen = ({ route }) => {
  const [org, setOrg] = useState({});

  useEffect(() => {
    setOrg(route.params.org);
  }, [route]);

  const onPressWebLink = () => {
    Linking.openURL(org.website);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: org.image }} style={styles.img} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Website:</Text>
          <TouchableHighlight
            style={styles.touchableStyle}
            underlayColor="rgba(83, 83, 83, 0.05)"
            onPress={onPressWebLink}
          >
            <Text style={styles.websiteLink}>{org.website}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Description:</Text>
          <Text style={styles.descriptionText}>{org.description}</Text>
        </View>
      </View>
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
});

OrgsScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      org: PropTypes.shape({
        image: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default OrgsScreen;
