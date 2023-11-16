import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import PropTypes from "prop-types";
import Colors from "../constants/Colors";

/*
 * Functional Component Defintion: SubRightsItem
 *
 * This component outlines the look of SubRightItem
 * on the SubRightsScreen.
 *
 */

const SubRightsItem = ({ onSelect, img, title }) => {
  return (
    <TouchableHighlight onPress={onSelect} style={styles.touchable}>
      <View style={styles.subrights}>
        <View style={styles.txtContainer}>
          <Image style={styles.icon} source={img} />
          <View style={styles.contentContainer}>
            <Text style={styles.subrightstxt}>{title}</Text>
          </View>
          <Text style={styles.subrightstxt}>→</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    margin: 5,
    borderRadius: 8,
  },
  subrights: {
    width: "100%",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: Colors.lightOrange,
  },
  contentContainer: {
    maxWidth: "80%",
  },
  subrightstxt: {
    fontSize: 16,
    paddingHorizontal: 2,
    textAlign: "center",
  },
  txtContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

SubRightsItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  img: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default SubRightsItem;
