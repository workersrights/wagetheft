import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import OrganizationBox from "../components/OrganizationBox";
import LearnMoreItem from "../components/LearnMoreItem";
import RightsSheetContent from "../components/RightsSheetContent";
import { Modalize } from "react-native-modalize"; // Credits to https://github.com/jeremybarbet/react-native-modalize
import { Portal } from "react-native-portalize";
import Colors from "../constants/Colors";
import RightsOrganizationModal from "../components/RightsOrganizationModal";
import ImportedData from "../data/FetchRightsData";

const RightsDetailsScreen = (props) => {
  // Get the parent subright
  const parentSubRightId = props.navigation.getParam("subrightId");
  const parentSubRight = ImportedData.getSubRights().find(
    (subRight) => subRight.id === parentSubRightId
  );
  // Get list of LearnMore Ids to display. Works on empty array as well.
  const displayedLearnMoreIds = parentSubRight.learnMores
    ? parentSubRight.learnMores
    : []; // if empty

  // Get list of relevant orgs to this specific subright
  const relevantOrgs = ImportedData.getOraganizations().filter((org) =>
    parentSubRight.organizations.includes(org.id)
  );

  // org modal stuff
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeOrganizationId, setActiveOrganizationId] = useState("o1");

  const openModalHandler = (id) => {
    setIsModalOpen(true);
    setActiveOrganizationId(id);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  // State Hooks for LearnMore modals.
  const [activeLearnMoreId, setActiveLearnMoreId] = useState("lm1");
  const modalizeRef = useRef(null);

  const renderOrgItem = (itemData) => {
    return (
      <OrganizationBox
        title={itemData.item.title}
        image={itemData.item.image}
        onSelect={() => {
          openModalHandler(itemData.item.id);
        }}
      />
    );
  };

  const openLearnMoreHandler = (id) => {
    setActiveLearnMoreId(id);
    modalizeRef.current?.open();
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={{ marginHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Initial subright description */}
        <Text style={styles.section}>Description: </Text>
        <Text>{parentSubRight.description}</Text>

        {/* Organization section */}
        <Text style={styles.section}>
          Contact the following agencies for help:{" "}
        </Text>
        <View style={{ height: 230, marginTop: 20 }}>
          <FlatList
            data={relevantOrgs}
            renderItem={renderOrgItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* ------------- LEARN MORE SECTION -------------- */}
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
      </ScrollView>

      <RightsOrganizationModal
        isVisible={isModalOpen}
        onCloseModal={closeModalHandler}
        organizationId={activeOrganizationId}
      ></RightsOrganizationModal>

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

RightsDetailsScreen.navigationOptions = (navigationData) => {
  const subrightId = navigationData.navigation.getParam("subrightId");
  const parentSubRight = ImportedData.getSubRights().find(
    (subright) => subright.id === subrightId
  );

  if (parentSubRight.title.length > 25) {
    return {
      headerTitle: parentSubRight.title.substring(0, 21) + "...",
      headerBackTitle: "Back",
    };
  } else {
    return { headerTitle: parentSubRight.title, headerBackTitle: "Back" };
  }
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
});

export default RightsDetailsScreen;
