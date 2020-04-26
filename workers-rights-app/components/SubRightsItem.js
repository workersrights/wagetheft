import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../constants/Colors";

const SubRightsItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.subrights}>
      <View style={styles.txtContainer}>
        <Image style={styles.icon} source={props.img} />
        <Text style={styles.subrightstxt}>{props.title}</Text>
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
  subrightstxt: {
    fontSize: 16,
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

export default SubRightsItem;
