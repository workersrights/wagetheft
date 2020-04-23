import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Platform } from "react-native";
import { RIGHTSCATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import RightsCategoryTile from "../components/RightsCategoryTile";
import RightsCategoryModal from "../components/RightsCategoryModal";
//var globalProps = null

const RightsScreen = (props) => {
  //globalProps = props
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState("c1");

  const openModalHandler = (id) => {
    setIsModalOpen(true);
    setActiveCategoryId(id);
  };

  const closeModalHandler = () => {
    console.log("closeModalHandler() called.");
    setIsModalOpen(false);
  };

  const advanceScreenHandler = () => {
    closeModalHandler();
    props.navigation.navigate({
      routeName: "SubRights",
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
        data={RIGHTSCATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
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
    // only color the background of the header if Android to fit the typical platform look
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
    alignItems: "center",
    margin: 10,
  },
});

export default RightsScreen;
