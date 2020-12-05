import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
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
    <TouchableOpacity
      onPress={onSelect}
      style={styles.subrights}
      testID="subItem"
    >
      <View style={styles.txtContainer}>
        <Image style={styles.icon} source={img} />
        <View style={styles.contentContainer}>
          <Text style={styles.subrightstxt} testID="text">
            {title}
          </Text>
        </View>
        <Text style={styles.subrightstxt}>→</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  subrights: {
    alignItems: "center",
    padding: 15,
    margin: 7,
    borderRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 5 },
    elevation: 3,
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
