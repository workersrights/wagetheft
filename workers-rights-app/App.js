import React, { useState } from "react";
import RightsNavigator from "./navigation/RightsNavigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from 'react-native-screens';
import ImportedData from './data/FetchRightsData.js'; 

enableScreens();

async function loadAllData() {
  fetchFonts();
  await ImportedData.importAllData();
}

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

