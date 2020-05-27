import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../constants/Colors";
import ImportedData from "../data/FetchRightsData";

const LearnMoreItem = (props) => {
  const selectedLearnMore = ImportedData.getLearnMores().find(
    (learnmore) => learnmore.id === props.id
  );

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.box}>
      <View style={styles.txtContainer}>
        <Image source={selectedLearnMore.image} />
        <Text numberOfLines={2} style={styles.subrightstxt}>
          {selectedLearnMore.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    padding: 10,
    margin: 7,
    borderRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 5 },
    elevation: 3,
    backgroundColor: Colors.lightOrange,
  },
  subrightstxt: {
    fontSize: 15,
    paddingHorizontal: 15,
  },
  txtContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 5,
  },
});

export default LearnMoreItem;
