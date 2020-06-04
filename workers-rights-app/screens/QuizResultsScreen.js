import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { QUIZOPTIONS } from "../data/dummy-data";
import OrganizationBox from "../components/OrganizationBox";
import LearnMoreItem from "../components/LearnMoreItem";
import { Modalize } from "react-native-modalize"; // Credits to https://github.com/jeremybarbet/react-native-modalize
import { Portal } from "react-native-portalize";
import RightsSheetContent from "../components/RightsSheetContent";
import Colors from "../constants/Colors";
import ImportedData from "../data/FetchRightsData";
import RightsOrganizationModal from "../components/RightsOrganizationModal";
import CustomHeaderButton from "../components/CustomHeaderButton";

const QuizResultsScreen = (props) => {
  // Get list of selectedQuizEnds
  const selectedQuizEndIds = props.navigation.getParam("selectedQuizEnds");
  const selectedQuizEnds = QUIZOPTIONS.filter((qo) =>
    selectedQuizEndIds.includes(qo.id)
  );

  // Get list of learnMores
  // Get list of relevantSubRights (to get list of orgs to show)
  var learnMoreIdsToShow = [];
  var relevantSubRightIds = [];
  for (const [QEIndex, quizEndObject] of selectedQuizEnds.entries()) {
    // Extract subRights
    for (const [SRIndex, subRightId] of quizEndObject.subRights.entries()) {
      if (!relevantSubRightIds.includes(subRightId)) {
        relevantSubRightIds.push(subRightId);
      }
    }
    // Extract learnMores
    for (const [
      LMIndex,
      learnMoreId,
    ] of quizEndObject.childrenQuizOptions.entries()) {
      if (!learnMoreIdsToShow.includes(learnMoreId)) {
        learnMoreIdsToShow.push(learnMoreId);
      }
    }
  }
  const relevantSubRights = ImportedData.getSubRights().filter((sr) =>
    relevantSubRightIds.includes(sr.id)
  );

  // Get list of orgsToShow
  var orgIdsToShow = [];
  for (const [SRIndex, subRightObject] of relevantSubRights.entries()) {
    for (const [OIndex, orgId] of subRightObject.organizations.entries()) {
      if (!orgIdsToShow.includes(orgId)) {
        orgIdsToShow.push(orgId);
      }
    }
  }
  const orgsToShow = ImportedData.getOraganizations().filter((org) =>
    orgIdsToShow.includes(org.id)
  );

  // RENDERING!!
  const renderOrgItem = (itemData) => {
    return (
      <OrganizationBox
        title={itemData.item.name}
        image={itemData.item.image}
        onSelect={() => {
          openModalHandler(itemData.item.id);
        }}
      />
    );
  };

  // org modal stuff
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeOrganizationId, setActiveOrganizationId] = useState("");

  const openModalHandler = (id) => {
    setIsModalOpen(true);
    setActiveOrganizationId(id);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  // Modal  // State Hooks for LearnMore modals.
  const [activeLearnMoreId, setActiveLearnMoreId] = useState("lm1");
  const modalizeRef = useRef(null);
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
        {/* Boilerplate title and subtitle */}
        <Text style={styles.title}>Information for you</Text>
        <Text style={styles.subtitle}>
          Based on your choices in the quiz, we think that the following
          information and agencies will be of interest to you.
        </Text>

        {/* Organization section */}

        <Text style={styles.section}>
          Contact the following agencies for help:{" "}
        </Text>
        <View style={{ height: 230, marginTop: 20 }}>
          <FlatList
            data={orgsToShow}
            renderItem={renderOrgItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* ------------- LEARN MORE SECTION -------------- */}
        <Text style={styles.section}>Learn more:</Text>
        {learnMoreIdsToShow.map((learnMoreId) => (
          <LearnMoreItem
            id={learnMoreId}
            key={learnMoreId}
            onPress={() => {
              openLearnMoreHandler(learnMoreId);
            }}
          />
        ))}

        {/* ------- ORG MODAL ------- */}
        {activeOrganizationId !== "" && (
          <RightsOrganizationModal
            isVisible={isModalOpen}
            onCloseModal={closeModalHandler}
            id={activeOrganizationId}
          ></RightsOrganizationModal>
        )}

        {/* ------- LEARNMORE MODAL ------- */}
        <Portal>
          <Modalize ref={modalizeRef} modalStyle={styles.modalize}>
            <View style={styles.modalizeContent}>
              <RightsSheetContent learnMoreId={activeLearnMoreId} />
            </View>
          </Modalize>
        </Portal>
      </ScrollView>
    </View>
  );
};

QuizResultsScreen.navigationOptions = (props) => {
  return {
    headerTitle: "Quiz Results",

    headerStyle: {
      // only color the background of the header if Android to fit the typical platform look
      backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
    },
    headerTintColor: Colors.darkOrange,
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerBackTitle: "Back To Quiz",

    headerRight: () => (
      <TouchableOpacity
        style={{ paddingHorizontal: 15 }}
        onPress={() => props.navigation.navigate("Rights")}
      >
        <Text style={styles.doneButton}>Done</Text>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    padding: 30,
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    padding: 20,
    paddingTop: 0,
    textAlign: "center",
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
  doneButton: {
    fontSize: 17,
    color: Colors.darkOrange,
  },
});

export default QuizResultsScreen;
