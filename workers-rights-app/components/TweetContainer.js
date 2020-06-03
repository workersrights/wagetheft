import React from "react";
import { Dimensions, View, Text, StyleSheet, Image } from "react-native";
import * as Linking from 'expo-linking';
import { TouchableNativeFeedback, TouchableOpacity } from "react-native-gesture-handler";

const TweetContainer = (props) => {
  let TouchablePlatformSpecific =
    Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;
  return (
    <TouchablePlatformSpecific 
      style={styles.touch}
      onPress={()=>{Linking.openURL(props.link)}}
    >
    <View style={styles.container} >
      <View style={styles.tweetHeader}>
        <View style={styles.userInfoContainer}>
          <View style={styles.photoContainer}>
            <Image
              style={styles.userPhoto}
              source={{ uri: props.userPhoto }}
            ></Image>
          </View>
          <View style={styles.userNamesContainer}>
            <Text style={styles.tweetUserName}>{props.name}</Text>
            <Text style={styles.tweetUserHandle}> {"@" + props.screenName} </Text>
          </View>
        </View>
        <View style={{alignSelf: "center"}}>
          <Text style={styles.tweetText}>Tu, June 2</Text>
        </View>
      </View>
      <Text style={styles.tweetText}>{props.text}</Text>
    </View>
    </TouchablePlatformSpecific>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.95,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 5,
    padding: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2,
    margin: "0.5%",
  },

  tweetHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  userInfoContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },

  photoContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    overflow: "hidden",
  },

  userNamesContainer: {
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 4,
  },

  userPhoto: {
    width: "100%",
    height: "100%",
  },

  tweetText: {
    fontFamily: "nunito-regular",
    fontSize: 14,
  },

  tweetUserName: {
    fontFamily: "nunito-bold",
    fontSize: 14,
  },
  tweetUserHandle: {
    fontFamily: "nunito-regular",
    fontSize: 10,
  },
});

export default TweetContainer;
