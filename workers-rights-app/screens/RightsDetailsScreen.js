import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import PropTypes from "prop-types";
import * as FBAnalytics from "expo-firebase-analytics";
import OrganizationBox from "../components/OrganizationBox";
import LearnMoreItem from "../components/LearnMoreItem";
import RightsSheetContent from "../components/RightsSheetContent";
import Colors from "../constants/Colors";
import ImportedData from "../data/FetchRightsData"; //eslint-disable-line

/*
 *
 * Functional Component Defintion: RightsDetailsScreen
 *
 * Displays RightsDetailScreen
 *
 */

const RightsDetailsScreen = ({ route, navigation }) => {
  const [activeLearnMoreId, setActiveLearnMoreId] = useState("");
  const modalizeRef = useRef(null);

  // Get the parent subright
  const parentSubRightId = route.params.subrightId;
  const parentSubRight = ImportedData.getSubRights().find(
    (subRight) => subRight.id === parentSubRightId
  );

  // Get list of LearnMore Ids to display. Works on empty array as well.
  const displayedLearnMoreIds = parentSubRight.learnMores
    ? parentSubRight.learnMores
    : [];

  // Get list of relevant orgs to this specific subright
  const relevantOrgs =
    parentSubRight.organizations === undefined
      ? []
      : ImportedData.getOraganizations().filter((org) =>
          parentSubRight.organizations.includes(org.id)
        );

  const openModalHandler = (org) => {
    navigation.navigate({
      name: "OrgStack",
      params: {
        org,
      },
    });
  };

  /*
   *
   * Function is called to render OrganizationBox components
   * in a horizontal FlatList
   *
   */

  const renderOrgItem = (itemData) => {
    return (
      <OrganizationBox
        title={itemData.item.name}
        image={itemData.item.image}
        onSelect={() => {
          FBAnalytics.logEvent("org_tile_click", {
            clickDetails: `Clicked ${itemData.item.name} org box`,
          });
          openModalHandler(itemData.item);
        }}
      />
    );
  };

  const openLearnMoreHandler = (id) => {
    setActiveLearnMoreId(id);
    modalizeRef.current.open(); //eslint-disable-line
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.descriptionSection}>
          <Text style={styles.section}>Description: </Text>
          <Text>{parentSubRight.description}</Text>

          <Text style={styles.section}>
            Contact the following agencies for help:
          </Text>
          <Text>(Tap on an organization for more information)</Text>
        </View>
        <View style={styles.orgContainer}>
          <FlatList
            data={relevantOrgs}
            renderItem={renderOrgItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20 }}
          />
        </View>

        <View style={styles.learnMoresSection}>
          <Text style={styles.section}>Learn more:</Text>
          {displayedLearnMoreIds.map((displayedLearnMoreId) => (
            <LearnMoreItem
              id={displayedLearnMoreId}
              key={displayedLearnMoreId}
              onPress={() => {
                openLearnMoreHandler(displayedLearnMoreId);
              }}
            />
          ))}
        </View>
      </ScrollView>

      <Portal>
        <Modalize
          ref={modalizeRef}
          modalStyle={styles.modalize}
          modalTopOffset={50}
        >
          <View style={styles.modalizeContent}>
            <RightsSheetContent learnMoreId={activeLearnMoreId} />
          </View>
        </Modalize>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  descriptionSection: {
    paddingHorizontal: 20,
  },
  learnMoresSection: {
    paddingHorizontal: 20,
  },
  section: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 20,
  },
  modalize: {
    height: "85%",
    backgroundColor: Colors.lightOrange,
  },
  modalizeContent: {
    flex: 1,
  },
  orgContainer: {
    marginTop: 20,
  },
  scrollViewStyle: {
    width: "100%",
  },
});

RightsDetailsScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      subrightId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default RightsDetailsScreen;
