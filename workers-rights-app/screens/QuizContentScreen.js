import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";
import { QUIZOPTIONS } from "../data/dummy-data";
import QuizOptionItem from "../components/QuizOptionItem";
import ButtonTemplate from "../components/ButtonTemplate";

const QuizContentScreen = (props) => {
  /* FLOW AND VARIABLES: (since QuizContentScreen is recycled from page to page)
  ------------------------------------------------------------------------------------------------------------------------------------
  Previous Page  :                                                              Next Page:
  =======                                                     ===============================================================
  | ... |   ---> passed as Param: "selectedQuizOptions" --->  | previouslySelectedQOIds  ---> currentQOs ---> selectedQOIds | ---> ...
  | ... |   ---> passed as Param: "quizPageNo"          --->  | quizPageNo                                        ---> += 1 | ---> ...
  | ... |   ---> passed as Param: "globalQuizEnds"      --->  | globalQuizEnds      ---> updated --->        globalQuizEnds | ---> ...
  =======                                                     ===============================================================
  ------------------------------------------------------------------------------------------------------------------------------------
  */
  //Just getting all the Quiz Options and stuff
  const quizPageNo = props.navigation.getParam("quizPageNo");
  const previouslySelectedQOIds = props.navigation.getParam(
    "selectedQuizOptions"
  ); // e.g. ["qo1", "qo4"]
  const previouslySelectedQOs = QUIZOPTIONS.filter(
    (quizOption) => previouslySelectedQOIds.indexOf(quizOption.id) >= 0
  );

  //Create list of currentQOs to display
  var currentQOIds = [];
  for (const [index, QO] of previouslySelectedQOs.entries()) {
    let QOChildren = QO.childrenQuizOptions; // Array of children QOs
    for (const [childIndex, QOChild] of QOChildren.entries()) {
      if (!currentQOIds.includes(QOChild)) {
        currentQOIds.push(QOChild);
      }
    }
  }
  if (quizPageNo === 1) {
    currentQOIds = ["qo1", "qo2", "qo3", "qo4", "qo5", "qo6"]; //Hard coded to present first page
  }
  const currentQOs = QUIZOPTIONS.filter(
    (quizOption) => currentQOIds.indexOf(quizOption.id) >= 0
  );

  const renderQuizOptions = (itemData) => {
    return (
      <QuizOptionItem
        id={itemData.item.id}
        description={itemData.item.description}
        image={itemData.item.image}
        onSelect={checkHandler}
      />
    );
  };

  //Prepare list of selectedQOIds to pass on.
  const [selectedQOIds, setSelectedQOIds] = useState([]);
  const checkHandler = (someQOId, isChecked) => {
    const someQO = currentQOs.find((QO) => QO.id === someQOId);
    if (!isChecked) {
      // Add if previously unchecked (i.e. now checked)
      if (!selectedQOIds.includes(someQOId)) {
        setSelectedQOIds([...selectedQOIds, ...[someQOId]]); // Add to list of checked QOs

        if (someQO.isLast) {
          if (!currentQuizEnds.includes(someQOId)) {
            setCurrentQuizEnds([...currentQuizEnds, ...[someQOId]]); // Add to list of QuizEnds (local to this page)
          }
        }
      }
    } else {
      // Delete if previously checked (i.e. now unchecked)
      if (selectedQOIds.includes(someQOId)) {
        setSelectedQOIds([
          ...selectedQOIds.filter((qoid) => qoid !== someQOId),
        ]); // Delete from list of checked QOs

        if (someQO.isLast) {
          if (currentQuizEnds.includes(someQOId)) {
            setCurrentQuizEnds([
              ...currentQuizEnds.filter((qoid) => qoid !== someQOId),
            ]); // Did from list of QuizEnds (local to this page)
          }
        }
      }
    }
    console.log(currentQuizEnds);
  };

  const [currentQuizEnds, setCurrentQuizEnds] = useState([]);

  const titleText =
    quizPageNo === 1 || quizPageNo === 2
      ? "What issue would you like to learn about?"
      : "What are some more specific issues?";

  return (
    <View style={styles.screen}>
      <Text style={styles.titleQuestion}>{titleText}</Text>
      <Text style={styles.checkAllThatApply}>(Check all that apply)</Text>
      <FlatList
        data={currentQOs}
        renderItem={renderQuizOptions}
        numColumns={1}
        style={{ width: "95%" }}
      />
      <ButtonTemplate
        title="NEXT PAGE →"
        style={styles.nextPageButtonStyle}
        titleStyle={styles.buttonTitleStyle}
        onPress={() =>
          props.navigation.push("QuizContent", {
            quizPageNo: quizPageNo + 1,
            selectedQuizOptions: selectedQOIds,
          })
        }
      />
    </View>
  );
};

QuizContentScreen.navigationOptions = {
  headerTitle: "Quiz",
  headerStyle: {
    // only color the background of the header if Android to fit the typical platform look
    backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
  },
  headerTintColor: Colors.darkOrange,
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerBackTitle: "Previous",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleQuestion: {
    padding: 30,
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  checkAllThatApply: {
    paddingBottom: 20,
  },
  nextPageButtonStyle: {
    position: "relative",
    width: "65%",
    height: 50,
    margin: 30,
    borderRadius: 5,
    bottom: 0, // Hard calculated to fit small screens too.
  },
  buttonTitleStyle: {
    fontSize: 16,
  },
});

export default QuizContentScreen;
