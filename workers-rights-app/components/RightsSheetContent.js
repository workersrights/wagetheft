import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
import * as FBAnalytics from "expo-firebase-analytics";
import Colors from "../constants/Colors";
import ImportedData from "../data/FetchRightsData"; //eslint-disable-line

/*
 * Functional Component Defintion: RightsSheetContent
 *
 * This component describes the look and feel of the sheet
 * that appears as a result of pressing a LearnMoreItem.
 *
 */

const RightsSheetContent = ({ learnMoreId }) => {
  const selectedLearnMore = ImportedData.getLearnMores().find(
    (learnmore) => learnmore.id === learnMoreId
  );
  if (!selectedLearnMore) {
    return null;
  }
  FBAnalytics.logEvent("learnMore_tile_click", {
    clickDetails: `Clicked ${selectedLearnMore.title}`,
  });
  const informationChunks = selectedLearnMore.informationChunks; //eslint-disable-line
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require("../images/question.png")}
          style={styles.titleImage}
        />
        <Text style={styles.titleText}>{selectedLearnMore.title}</Text>
      </View>
      {informationChunks.map((chunk) => (
        <View key={informationChunks.indexOf(chunk)}>
          <Text style={styles.header}>{chunk.header}</Text>
          <Text style={styles.body}>{chunk.body}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginVertical: 20,
  },
  titleContainer: {
    flexDirection: "row",
    margin: 20,
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  titleImage: {
    margin: 10,
    width: 40,
    height: 40,
  },
  titleText: {
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.darkOrange,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "justify",
    marginVertical: 10,
    marginHorizontal: 5,
  },
  body: {
    textAlign: "justify",
    marginHorizontal: 3,
  },
});

RightsSheetContent.propTypes = {
  learnMoreId: PropTypes.string.isRequired,
};

export default RightsSheetContent;
