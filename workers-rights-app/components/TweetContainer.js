import React from "react";
import { Dimensions, View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";

const TweetContainer = (props) => {
  return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Image style={styles.userPhoto} source={{uri: props.userPhoto}}></Image>
          <View>
            <Text style={styles.tweetUser}>{props.name + "  @" + props.screenName}</Text>
            <Text style={styles.tweetText}>{props.text}</Text>
          </View>
      </View>
      </View>

  );
};

const styles = StyleSheet.create({
    box: {
        width: Dimensions.get("window").width * 1,
        height: Dimensions.get("window").height * 0.16,
        flexDirection: 'row',
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor:  "#cccccc"
    },
    container: {
        //alignItems: 'center' // TODO: maybe remove
    },
    userPhoto: {
        width: 80,
        height: 80
    },
    tweetText: {
        fontFamily: "nunito-regular",
        fontSize: 14,
        width: Dimensions.get("window").width * 0.90 - 80
    },
    tweetUser: {
        fontFamily: "nunito-bold",
        fontSize: 16
    }
});

export default TweetContainer;
