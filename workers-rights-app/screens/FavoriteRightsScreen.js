import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { RIGHTSCATEGORIES, SUBRIGHTS } from "../data/dummy-data";
import SubRightsItem from "../components/SubRightsItem";

const FavoriteRightsScreen = (props) => {
  // Get the rights category that we passed in with navigation (eg. "Getting Paid")
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = RIGHTSCATEGORIES.find((cat) => cat.id == catId);
  const displayedSubRights = SUBRIGHTS.filter(
    (subright) => subright.categoryIds.indexOf(catId) >= 0
  );

  const renderSubright = (itemData) => {
    return (
        <SubRightsItem
            title={itemData.item.title}
            emoji={itemData.item.emoji}
            img={itemData.item.img}
            onSelect={() => {
            props.navigation.navigate({
                routeName: "RightsDetails",
                params: {
                subrightId: itemData.item.id,
                },
            });
            }}
        />
    );
  };

  return (
      <View>
        <Text>Welcome to the favorite screen!</Text>

        {/* Section to display the user's favorite rights and information */}
        <View style={styles.screen}>
        <FlatList
            data={displayedSubRights}
            renderItem={renderSubright}
            numColumns={1}
            style={{ width: "95%" }}
        />
        </View>
      </View>
    
  );
};

// the category id / name will change, so we need to make this dynamic
FavoriteRightsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = RIGHTSCATEGORIES.find((cat) => cat.id == catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});

export default FavoriteRightsScreen;
