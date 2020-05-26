import React from "react";
import { Dimensions, View, Text, StyleSheet, Image } from "react-native";

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
    container: { },
    box: {
        width: Dimensions.get("window").width * 1,
        height: Dimensions.get("window").height * 0.16,
        flexDirection: 'row',
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor:  "#cccccc" // light gray
    },
    userPhoto: {
        width: 80,
        height: 80
    },
    tweetText: {
        fontFamily: "nunito-regular",
        fontSize: 14,
        width: Dimensions.get("window").width - 80 - 10
    },
    tweetUser: {
        fontFamily: "nunito-bold",
        fontSize: 16
    }
});

export default TweetContainer;
