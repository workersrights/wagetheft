import React, { useState } from "react";
import RightsNavigator from "./navigation/RightsNavigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from 'react-native-screens';
import ImportedData from './data/FetchRightsData.js'; 

/*
 * 
 * Provides native primitives to represent screens instead of 
 * plain <View> components in order to better take advantage of 
 * operating system behavior and optimizations around screens
 * 
 */
enableScreens();

/*
 * 
 * Asynchronous function to import data into rights from 
 * Friebase. 
 * 
 */
async function loadAllData() {
  fetchFonts();
  await ImportedData.importAllData();
}

/*
 * 
 * Function loads the functions into the app by calling the 
 * Expo Font.loadAsync function which returns a promise 
 * that is resolved after fetching is complete
 * 
 */
const fetchFonts = () => {
  Font.loadAsync({
    "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-semibold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-extrabold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={loadAllData}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <RightsNavigator />
  );
}

