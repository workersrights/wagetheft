import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import SubRightsItem from "../components/SubRightsItem";
import ImportedData from "../data/FetchRightsData";

const SubRightsScreen = (props) => {
  // Get the rights category that we passed in with navigation (eg. "Getting Paid")
  const catId = props.navigation.getParam("categoryId");
  const displayedSubRights = ImportedData.getSubRights().filter(
    (subright) => subright.categoryIds.indexOf(catId) >= 0
  );
  displayedSubRights.sort((subA, subB) => (subA.title > subB.title ? 1 : -1));
  const parentCategory = ImportedData.getRightsCategories().find(
    (rightsCat) => rightsCat.id === catId
  );

  const renderSubright = (itemData) => {
    return (
      <SubRightsItem
        title={itemData.item.title}
        emoji={itemData.item.emoji}
        img={parentCategory.image}
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
    <View style={styles.screen}>
      <FlatList
        data={displayedSubRights}
        renderItem={renderSubright}
        numColumns={1}
        style={{ width: "95%" }}
      />
    </View>
  );
};

// the category id / name will change, so we need to make this dynamic
SubRightsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = ImportedData.getRightsCategories().find((cat) => cat.id == catId);

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

export default SubRightsScreen;
