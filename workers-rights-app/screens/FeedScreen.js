import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import GetRightsTweets from "../data/GetRightsTweets"; // loads the data
import TweetContainer from '../components/TweetContainer'; // component with Tweet UI
import Colors from "../constants/Colors"; // for navigation styline

const FeedScreen = props => {
  const renderGridItem = (itemData) => {
    return (
      <TweetContainer
        name={itemData.item.name}
        screenName={itemData.item.screenName}
        text={itemData.item.text}
        userPhoto={itemData.item.userPhoto}
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
    flatListStyle: { }
})

// Style the top nav bar
FeedScreen.navigationOptions = {
  headerTitle: "Your Rights Information Feed",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
  },
  headerTintColor: Colors.darkOrange,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default FeedScreen;