import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { SUBRIGHTS, ORGANIZATIONS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import OrganizationBox from "../components/OrganizationBox";
import LearnMoreItem from "../components/LearnMoreItem";
import RightsSheetContent from "../components/RightsSheetContent";
import { Modalize } from "react-native-modalize"; // Credits to https://github.com/jeremybarbet/react-native-modalize
import { Portal } from "react-native-portalize";
import Colors from "../constants/Colors";

const RightsDetailsScreen = (props) => {
  // Get the parent subright
  const parentSubRightId = props.navigation.getParam("subrightId");
  const parentSubRight = SUBRIGHTS.find(
    (subRight) => subRight.id === parentSubRightId
  );
  // Get list of LearnMore Ids to display. Works on empty array as well.
  const displayedLearnMoreIds = parentSubRight.learnMores;
  
  // Get list of relevant orgs to this specific subright
  const relevantOrgs = ORGANIZATIONS.filter(org => (selectedSubright.organizations).includes(org.id));

  // State Hooks for LearnMore modals.
  const [activeLearnMoreId, setActiveLearnMoreId] = useState("lm1");
  const modalizeRef = useRef(null);

  const renderOrgItem = (itemData) => {
    return (
      <OrganizationBox
        title={itemData.item.title}
        image={itemData.item.image}
      />
    );
  };

  const openLearnMoreHandler = (id) => {
    setActiveLearnMoreId(id);
    modalizeRef.current?.open();
  };

    return(
        <View style={styles.screen}>
            <ScrollView style={{marginHorizontal: 20}} showsVerticalScrollIndicator={false}>
                {/* Initial subright description */}
                <Text style={styles.section}>Description: </Text>
                <Text>{selectedSubright.description}</Text>
                
                {/* Organization section */}
                <Text style={styles.section}>Contact the following agencies for help: </Text>
                <View style={{ height: 230, marginTop: 20 }}> 
                    <FlatList
                        data={relevantOrgs}
                        renderItem={renderGridItem}
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
  modalize: {
    height: "85%",
    backgroundColor: Colors.lightOrange,
  },
  modalizeContent: {
    flex: 1,
  },
});

export default RightsDetailsScreen;
