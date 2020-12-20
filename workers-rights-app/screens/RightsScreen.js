import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Platform } from "react-native";
import PropTypes from "prop-types";
import ImportedData from "../data/FetchRightsData"; //eslint-disable-line
import Colors from "../constants/Colors";
import RightsCategoryTile from "../components/RightsCategoryTile";
import RightsCategoryModal from "../components/RightsCategoryModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Amplify, { Analytics } from "aws-amplify"; // for analytics

/*
 * Function Component Definiton: Rights Screen
 */

const RightsScreen = ({ navigation }) => {
  /* A function to store a marker on user's device to mark user as not a new user.
   */
  const rememberUser = async (value) => {
    try {
      await AsyncStorage.setItem('@seen_Before', value)
    } catch (e) {
      console.log(e);
    }
  };

  /* NOT USED. A function to help a developer delete a key from local storage.
   */
  const forgetUser = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    }
    catch (e) {
      return false;
    }
  };

  /* useEffect checks if this user has opened the app before. 
   * If not, will navigate to intro screens.
   */
  useEffect(() => {
    const recognizeUser = async () => {
      try {
        const value = await AsyncStorage.getItem('@seen_Before', value);
        if (value !== null) {
          navigation.navigate({
            routeName: "Rights",
          });
        }
        else {
          rememberUser('1');
          navigation.navigate({
            routeName: "Intro",
          });
        }
      } catch (e) {
          console.log(e);
      }
    };
    recognizeUser();
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState("c1");

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
      routeName: "SubRights",
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
            attributes: {category: itemData.item.title}
          });
          //Analytics.record("User clicked rights category");
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
        isVisible={isModalOpen}
        onCloseModal={closeModalHandler}
        categoryId={activeCategoryId}
        onAdvance={advanceScreenHandler}
      />
    </View>
  );
};

/*
 *
 * Set up the layout of the navigation header. Provides the color
 * title, and font weights of the header and header text of the
 * Rights Screen.
 *
 */
RightsScreen.navigationOptions = {
  headerTitle: "Rights Information",
  headerLeft: null,
  headerShown: true,
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

RightsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default RightsScreen;
