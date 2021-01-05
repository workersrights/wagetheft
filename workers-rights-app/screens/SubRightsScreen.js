import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import SubRightsItem from "../components/SubRightsItem";
import ImportedData from "../data/FetchRightsData"; //eslint-disable-line

import Amplify, { Analytics } from "aws-amplify"; // for analytics

/*
 *
 * Functional Component Defintion: SubRightsScreen
 *
 * Displays SubRight categories in alphabetical order.
 *
 */

const SubRightsScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const displayedSubRights = ImportedData.getSubRights().filter(
    (subright) => subright.categoryIds.indexOf(catId) >= 0
  );
  displayedSubRights.sort((subA, subB) => (subA.title > subB.title ? 1 : -1));
  const parentCategory = ImportedData.getRightsCategories().find(
    (rightsCat) => rightsCat.id === catId
  );

  /*
   *
   * Functions is called when Flatlist is rendering SubRights. Populates the
   * SubRight components with the data from the Firebase database.
   *
   */

  const renderSubright = (itemData) => {
    return (
      <SubRightsItem
        title={itemData.item.title}
        img={parentCategory.image}
        onSelect={() => {
          Analytics.record("User clicked sub rights");
          navigation.navigate({
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

/*
 *
 * Sets the header of the SubRightsScreen to the category
 * title associated with the categoryid passed in from the
 * RightsScreen
 *
 */
SubRightsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = ImportedData.getRightsCategories().find(
    (cat) => cat.id === catId
  );

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

SubRightsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default SubRightsScreen;
