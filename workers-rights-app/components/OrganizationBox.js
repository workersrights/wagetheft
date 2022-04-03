import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import PropTypes from "prop-types";

/*
 * Functional Component Defintion: OrganizationBox
 *
 * This component outlines the rounded tile hosting
 * the organization in the RightsDetailScreen
 *
 */

const OrganizationBox = ({ onSelect, image, title }) => {
  return (
    <View style={styles.box}>
      <TouchableHighlight onPress={onSelect} style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.imgStyle} />
      </TouchableHighlight>
      <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={styles.orgTitle}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 229,
    width: 284,
    marginRight: 15,
  },
  imageContainer: {
    flex: 4,
    borderRadius: 6,
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    margin: "2%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 25,
  },
  orgTitle: {
    fontSize: 16,
    fontFamily: "nunito-semibold",
  },
  imgStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    borderRadius: 6,
  },
});

OrganizationBox.propTypes = {
  onSelect: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default OrganizationBox;
