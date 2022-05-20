import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ContactOrgsScreen = ({ route }) => {
  return (
    <View style={styles.screen}>
      <Text>{route.params.org.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ff0000",
  },
});

export default ContactOrgsScreen;
