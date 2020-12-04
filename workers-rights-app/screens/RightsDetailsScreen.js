import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import PropTypes from "prop-types";
import OrganizationBox from "../components/OrganizationBox";
import LearnMoreItem from "../components/LearnMoreItem";
import RightsSheetContent from "../components/RightsSheetContent";
import Colors from "../constants/Colors";
import RightsOrganizationModal from "../components/RightsOrganizationModal";
import ImportedData from "../data/FetchRightsData"; //eslint-disable-line

import Amplify, { Analytics } from "aws-amplify"; // for analytics

/*
 *
 * Functional Component Defintion: RightsDetailsScreen
 *
 * Displays RightsDetailScreen
 *
 */

const RightsDetailsScreen = ({ navigation }) => {
  // Get the parent subright
  const parentSubRightId = navigation.getParam("subrightId");
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeOrganizationId, setActiveOrganizationId] = useState("");

  const openModalHandler = (id) => {
    setIsModalOpen(true);
    setActiveOrganizationId(id);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  // Corresponds to lm1. Needs to be initialized with any garbage learnMore, otherwise app will crash because
  const [activeLearnMoreId, setActiveLearnMoreId] = useState(
    "-M7LY3fU0-iSv0HX94zB"
  );
  const modalizeRef = useRef(null);

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
          Analytics.record("User clicked organization box");
          openModalHandler(itemData.item.id);
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
        <Text style={styles.section}>Description: </Text>
        <Text>{parentSubRight.description}</Text>

        <Text style={styles.section}>
          Contact the following agencies for help:
        </Text>
        <Text>(Tap on an organization for more information)</Text>
        <View style={styles.orgContainer}>
          <FlatList
            data={relevantOrgs}
            renderItem={renderOrgItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Text style={styles.section}>Learn more:</Text>
        {displayedLearnMoreIds.map((displayedLearnMoreId) => (
          <LearnMoreItem
            id={displayedLearnMoreId}
            key={displayedLearnMoreId}
            onPress={() => {
              Analytics.record("User clicked learn more");
              openLearnMoreHandler(displayedLearnMoreId);
            }}
          />
        ))}
      </ScrollView>

      {activeOrganizationId !== "" && (
        <RightsOrganizationModal
          isVisible={isModalOpen}
          onCloseModal={closeModalHandler}
          id={activeOrganizationId}
        />
      )}

      <Portal>
        <Modalize ref={modalizeRef} modalStyle={styles.modalize}>
          <View style={styles.modalizeContent}>
            <RightsSheetContent learnMoreId={activeLearnMoreId} />
          </View>
        </Modalize>
      </Portal>
    </View>
  );
};

/*
 *
 * Sets the header of the RightsDetailScreen to the category
 * title associated with the subrightID passed in from the
 * SubRightsScreen
 *
 */

RightsDetailsScreen.navigationOptions = (navigationData) => {
  const subrightId = navigationData.navigation.getParam("subrightId");
  const parentSubRight = ImportedData.getSubRights().find(
    (subright) => subright.id === subrightId
  );

  if (parentSubRight.title.length > 25) {
    return {
      headerTitle: `${parentSubRight.title.substring(0, 21)}...`,
      headerBackTitle: "Back",
    };
  }
  return { headerTitle: parentSubRight.title, headerBackTitle: "Back" };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
    height: 230,
    marginTop: 20,
  },
  scrollViewStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
  },
});

RightsDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default RightsDetailsScreen;
