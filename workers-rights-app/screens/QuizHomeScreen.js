import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import Colors from "../constants/Colors";
import ButtonTemplate from "../components/ButtonTemplate";

const QuizHomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollWrap}>
        {/* Everything here is boilerplate */}
        {/* Title */}
        <View>
          <Text style={styles.title}>Tell us how we can help you</Text>
        </View>
        {/* Description */}
        <View style={styles.descContainer}>
          <Text style={styles.desc}>
            Are you experiencing issues in the workplace? Or do you just want to
            learn more about your rights?
          </Text>
        </View>
        {/* Quiz Icon */}
        <View style={styles.iconContainer}>
          <Image
            source={require("../images/quiz-icon.png")}
            style={styles.iconStyle}
          />
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.desc}>
            Take a short quiz and let us direct you to information that might be
            most useful to you!
          </Text>
        </View>
        {/* Buttons */}
        <ButtonTemplate
          title="START QUIZ!"
          style={styles.startQuizButtonStyle}
          titleStyle={styles.buttonTitleStyle}
          onPress={() =>
            props.navigation.push("QuizContent", {
              quizPageNo: 1,
              selectedQuizOptions: [],
              globalQuizEnds: [],
            })
          }
        />
      </ScrollView>
    </View>
  );
};

QuizHomeScreen.navigationOptions = {
  headerTitle: "Quiz",
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
  scrollWrap: {
    height: "100%",
    padding: 30,
    alignItems: "center",
  },
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  descContainer: {
    marginBottom: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  desc: {
    fontSize: 18,
    textAlign: "center",
  },
  iconStyle: {
    width: 100,
    height: 100,
  },
  startQuizButtonStyle: {
    width: "95%",
    height: 50,
    borderRadius: 5,
    position: "absolute",
    bottom: 0.05 * Dimensions.get("window").height, // Hard calculated to fit small screens too.
  },
  buttonTitleStyle: {
    fontSize: 16,
  },
  buttonTitleStyleOrange: {
    fontSize: 16,
    color: Colors.darkOrange,
  },
});

export default QuizHomeScreen;
