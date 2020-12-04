import React, { useState } from "react";
import { enableScreens } from "react-native-screens";
import { Host } from "react-native-portalize";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import RightsNavigator from "./navigation/RightsNavigator";
import ImportedData from "./data/FetchRightsData"; // eslint-disable-line
import { NativeModules, Platform } from 'react-native'; // for language


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
 * Firebase and load all fonts. The function waits until the loading
 * process is complete by waiting until all promises are resolved.
 *
 */

async function loadAllData() {
  await Font.loadAsync({
    "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-semibold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-extrabold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
  });
  
  // Get device language
  let deviceLanguage = 
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;
  console.log("Device language: ", deviceLanguage); // eg. Device language:  fr_BE, or en
  //deviceLanguage = "es";

  await ImportedData.importAllData(deviceLanguage);
}

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
    <Host>
      <RightsNavigator />
    </Host>
  );
}
