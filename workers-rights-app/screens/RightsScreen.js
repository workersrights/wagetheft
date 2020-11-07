import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Platform, Dimensions } from "react-native";
import ImportedData from "../data/FetchRightsData";
import Colors from "../constants/Colors";
import RightsCategoryTile from "../components/RightsCategoryTile";
import RightsCategoryModal from "../components/RightsCategoryModal";

const RightsScreen = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState("c1");

  const openModalHandler = (id) => {
    setIsModalOpen(true);
    setActiveCategoryId(id);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const advanceScreenHandler = () => {
    closeModalHandler();

    props.navigation.navigate({
      routeName: activeCategoryId != "c7" ? "SubRights" : "FavoriteRights",
      params: {
        categoryId: activeCategoryId, // sending the rights category to the new screen
      },
    });
  };

  const renderGridItem = (itemData) => {
    return (
      <RightsCategoryTile
        title={itemData.item.title}
        image={itemData.item.image}
        onSelect={() => {
          openModalHandler(itemData.item.id);
        }}
      />
    );
  };

  // <RightsModal />
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
        showsVerticalScrollIndicator={false}
      />
      <RightsCategoryModal
        isVisible={isModalOpen}
        onCloseModal={closeModalHandler}
        categoryId={activeCategoryId}
        onAdvance={advanceScreenHandler}
      ></RightsCategoryModal>
    </View>
  );
};

RightsScreen.navigationOptions = {
  headerTitle: "Rights Information",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
  },
  headerTintColor: Colors.darkOrange,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
  },
});

export default RightsScreen;
