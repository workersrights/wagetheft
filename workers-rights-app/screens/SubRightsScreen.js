import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import { Analytics } from "aws-amplify"; // for analytics
import SubRightsItem from "../components/SubRightsItem";
import ImportedData from "../data/FetchRightsData"; //eslint-disable-line

/*
 *
 * Functional Component Defintion: SubRightsScreen
 *
 * Displays SubRight categories in alphabetical order.
 *
 */

const SubRightsScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId;
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
            name: "RightsDetails",
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});

SubRightsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SubRightsScreen;
