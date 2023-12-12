import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import analytics from "@react-native-firebase/analytics";
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
  analytics().logEvent("learnMore_tile_click", {
    clickDetails: `Clicked ${selectedLearnMore.title}`,
  });

  const loadInformationChunks = () => {
    const { informationChunks } = selectedLearnMore;
    if (typeof informationChunks === "undefined" || informationChunks == null) {
      return null;
    }
    return informationChunks.map((chunk) => {
      if (chunk.header === "" && chunk.body === "") {
        return null;
      }
      return (
        <View style={styles.topic} key={informationChunks.indexOf(chunk)}>
          {chunk.header !== "" ? (
            <Text style={styles.header}>{chunk.header}</Text>
          ) : null}
          {chunk.body !== "" ? (
            <Text style={styles.body}>{`\t${chunk.body}`}</Text>
          ) : null}
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require("../images/question.png")}
          style={styles.titleImage}
        />
        <Text style={styles.titleText}>{selectedLearnMore.title}</Text>
        </View>
        {loadInformationChunks()}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  titleImage: {
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
    textAlign: "left",
    fontFamily: "nunito-regular",
    fontSize: 16,
  },
  topic: {
    marginBottom: 10,
  },
});

RightsSheetContent.propTypes = {
  learnMoreId: PropTypes.string.isRequired,
};

export default RightsSheetContent;
