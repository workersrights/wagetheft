import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from '../components/CustomHeaderButton';
import GetRightsTweets from "../data/GetRightsTweets"; // loads the data
import TweetContainer from "../components/TweetContainer"; // component with Tweet UI
import Colors from "../constants/Colors"; // for navigation styline
import FeedModal from "../components/FeedModal";

const FeedScreen = (props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    props.navigation.setParams({ setIsModalOpen: setIsModalOpen });
  }, [isModalOpen]);

  const renderGridItem = (itemData) => {
    return (
      <TweetContainer
        {...itemData.item}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        contentContainerStyle={styles.flatListStyle}
        data={GetRightsTweets.getLoadedTweets()}
        renderItem={renderGridItem}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
       <FeedModal 
        isVisible={isModalOpen}
        onCloseModal={() => {setIsModalOpen(false);}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  flatListStyle: {},
});

// Style the top nav bar
FeedScreen.navigationOptions = (navigationData) => {
  const setIsModalOpen = navigationData.navigation.getParam('setIsModalOpen');

  return {
    headerTitle: "Rights Twitter Feed",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Help"
          iconName="ios-help-circle-outline"
          iconSize={30}
          onPress={() => { setIsModalOpen(true); }}
        />
      </HeaderButtons>
    ),
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
    },
    headerTintColor: Colors.darkOrange,
    headerTitleStyle: {
      fontWeight: "bold",
    }
  }
};

export default FeedScreen;
