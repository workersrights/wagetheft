import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { SUBRIGHTS, LEARNMORES, ORGANIZATIONS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import OrganizationBox from "../components/OrganizationBox";
import LearnMoreItem from "../components/LearnMoreItem";
import LearnMoreModal from "../components/LearnMoreModal";

const RightsDetailsScreen = (props) => {
  // Get the parent subright
  const parentSubRightId = props.navigation.getParam("subrightId");
  const parentSubRight = SUBRIGHTS.find(
    (subRight) => subRight.id === parentSubRightId
  );
  // Get list of LearnMore Ids to display. Works on empty array as well.
  const displayedLearnMoreIds = parentSubRight.learnMores;

  // State Hooks for LearnMore modals.
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [activeLearnMoreId, setActiveLearnMoreId] = useState("lm1");

  const openLearnMoreHandler = (id) => {
    console.log("openLearnMoreHandler() called.");
    setIsLearnMoreOpen(true);
    setActiveLearnMoreId(id);
  };

  const closeLearnMoreHandler = () => {
    console.log("closeLearnMoreHandler() called.");
    setIsLearnMoreOpen(false);
  };

  const renderOrgItem = (itemData) => {
    return (
      <OrganizationBox
        title={itemData.item.title}
        image={itemData.item.image}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={{ marginHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.section}>Description: </Text>
        <Text>
          An employer has the right to make many types of deductions from an
          employee’s pay. For anything that is for the employee’s benefit, the
          employer must first get the employee’s consent before providing the
          good or service and deducting the cost of the employee’s pay. However,
          there are limits on what employers can deduct from pay.{" "}
        </Text>
        <Text style={styles.section}>Organizations that can help: </Text>
        <View style={{ height: 130, marginTop: 20 }}>
          <FlatList
            data={ORGANIZATIONS}
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

        <LearnMoreModal
          isVisible={isLearnMoreOpen}
          onCloseModal={closeLearnMoreHandler}
          id={activeLearnMoreId}
          //onAdvance={advanceScreenHandler}
        ></LearnMoreModal>
      </ScrollView>
    </View>
  );
};

RightsDetailsScreen.navigationOptions = (navigationData) => {
  const subrightId = navigationData.navigation.getParam("subrightId");
  const selectedSubright = SUBRIGHTS.find(
    (subright) => subright.id === subrightId
  );
  return {
    headerTitle: selectedSubright.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Fav"
          iconName="ios-star-outline"
          onPress={() => {
            console.log("mark as favorite!");
          }}
        />
      </HeaderButtons>
    ),
  };
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
});

export default RightsDetailsScreen;
