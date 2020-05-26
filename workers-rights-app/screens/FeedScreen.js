import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
//import RightsTweets from './RightsTweets-old';
import GetRightsTweets from "../data/GetRightsTweets"; // loads the data
import TweetContainer from '../components/TweetContainer'; // component with Tweet UI
import Colors from "../constants/Colors";

const FeedScreen = props => {
  const renderGridItem = (itemData) => {
    return (
      <TweetContainer
        name={itemData.item.name}
        screenName={itemData.item.screenName}
        text={itemData.item.text}
        userPhoto={itemData.item.userPhoto}
        onSelect={() => {}}
      />
    );
  };

  return(
    <View style={styles.screen}>
      <FlatList
          contentContainerStyle={styles.flatListStyle}
          data={GetRightsTweets.getLoadedTweets()}
          renderItem={renderGridItem}
          numColumns={1}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    flatListStyle: {

    }
})

FeedScreen.navigationOptions = {
  headerTitle: "Your Rights Information Feed",
  headerStyle: {
    // only color the background of the header if Android to fit the typical platform look
    backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
  },
  headerTintColor: Colors.darkOrange,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default FeedScreen;