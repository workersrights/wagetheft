import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { CheckBox } from "react-native-elements";
import Colors from "../constants/Colors";

const QuizOptionItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsChecked(!isChecked);
        props.onSelect(props.id, isChecked); // isChecked here is still the original isChecked, because this is within same render cycle.
      }}
      style={styles.quizOption}
    >
      <View style={styles.txtContainer}>
        <Image style={styles.icon} source={props.image} />
        <Text style={styles.description}>{props.description}</Text>
        <View style={styles.checkBox}>
          <CheckBox
            checked={isChecked}
            onPress={() => {
              setIsChecked(!isChecked);
              props.onSelect(props.id, isChecked); // isChecked here is still the original isChecked, because this is within same render cycle.
            }} // TouchableOpacity's onPress duplicates this to make sure whole bar is pressable.
            checkedColor={Colors.darkOrange}
            size={24}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  quizOption: {
    alignItems: "center",
    margin: 7,
    borderRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 5 },
    elevation: 3,
    backgroundColor: Colors.lightOrange,
  },
  description: {
    fontSize: 16,
    maxWidth: Dimensions.get("window").width * 0.5,
    margin: 15,
  },
  txtContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    margin: 15,
    marginRight: 0,
  },
  checkBox: {
    padding: 0,
    margin: 0,
    height: "100%",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QuizOptionItem;
