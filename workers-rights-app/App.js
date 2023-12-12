import React, { useState, useEffect, useCallback } from "react";
import { enableScreens } from "react-native-screens";
import { Host } from "react-native-portalize";
import * as Font from "expo-font";
import { NativeModules, Platform } from "react-native"; // for language
import analytics from "@react-native-firebase/analytics";
import * as Sentry from "sentry-expo";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RightsNavigator from "./navigation/RightsNavigator";
import ImportedData from "./data/FetchRightsData"; // eslint-disable-line
import DSN from "./constants/SentryKeys";

Sentry.init({
  dsn: DSN,
  enableInExpoDevelopment: true,
  debug: false, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});

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

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
          "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
          "nunito-semibold": require("./assets/fonts/Nunito-SemiBold.ttf"),
          "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
          "nunito-extrabold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
        });
        
        // Get device language
        const deviceLanguage =
        Platform.OS === "ios"
        ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
        : NativeModules.I18nManager.localeIdentifier;

        await ImportedData.importAllData(deviceLanguage);
        analytics().logEvent("AppStart", { purpose: "User Started the app" });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setDataLoaded(true);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (dataLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [dataLoaded]);

  if (!dataLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Host>
          <RightsNavigator />
      </Host>
    </GestureHandlerRootView>
  );
}
