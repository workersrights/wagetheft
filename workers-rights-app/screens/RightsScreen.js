import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import { Analytics } from "aws-amplify"; // for analytics
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

  const openModalHandler = (id) => {
    setIsModalOpen(true);
    setActiveCategoryId(id);
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
          Analytics.record({
            name: "User clicked rights category",
            attributes: { category: itemData.item.title },
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
      {isModalOpen ? (
        <RightsCategoryModal
          onCloseModal={closeModalHandler}
          categoryId={activeCategoryId}
          onAdvance={advanceScreenHandler}
        />
      ) : null}
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
