import React from "react";
import { View, StyleSheet, Text } from "react-native";
import OrganizationContactBox from "../components/OrganizationContactBox";

const ContactOrgsScreen = ({ route }) => {
  return (
    <View style={styles.screen}>
      <OrganizationContactBox />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
});

export default ContactOrgsScreen;
