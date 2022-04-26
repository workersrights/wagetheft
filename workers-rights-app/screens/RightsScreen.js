import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import * as FBAnalytics from "expo-firebase-analytics";
import ImportedData from "../data/FetchRightsData"; //eslint-disable-line
import RightsCategoryTile from "../components/RightsCategoryTile";
import RightsCategoryModal from "../components/RightsCategoryModal";

/*
 *
 * Function Component Definiton: Rights Screen
 *
 */

const RightsScreen = ({ navigation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState("");
  const [activeCategory, setActiveCategory] = useState({});

  const openModalHandler = (id) => {
    const selectedCategory = ImportedData.getRightsCategories().filter(
      (category) => category.id === id
    )[0];
    setActiveCategory(selectedCategory);
    setActiveCategoryId(id);
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  /*
   *
   * Functions is called on Modal advance. Tells the navigation flow
   * to navigate to the subRights page with the given categoryID
   *
   */

  const advanceScreenHandler = () => {
    closeModalHandler();

    navigation.navigate({
      name: "SubRights",
      params: {
        categoryId: activeCategoryId,
      },
    });
  };

  /*
   *
   * Functions called by the Flatlist component. Used to render the list of
   * RightsCategoryTiles.
   *
   */

  const renderGridItem = (itemData) => {
    return (
      <RightsCategoryTile
        title={itemData.item.title}
        image={itemData.item.image}
        onSelect={() => {
          FBAnalytics.logEvent("category_tile_click", {
            clickDetails: `Clicked ${itemData.item.title}`,
          });
          openModalHandler(itemData.item.id);
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={{
          width: "100%",
          alignItems: "center",
        }}
        data={ImportedData.getRightsCategories()}
        renderItem={renderGridItem}
        numColumns={2}
      />
      <RightsCategoryModal
        showModal={isModalOpen}
        onCloseModal={closeModalHandler}
        selectedCategory={activeCategory}
        onAdvance={advanceScreenHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
  },
});

RightsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default RightsScreen;
