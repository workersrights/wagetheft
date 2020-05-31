import React, { useState } from "react";
import { StyleSheet } from "react-native";
import RightsNavigator from "./navigation/RightsNavigator";
import { Host } from "react-native-portalize";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import eventsReducer from './store/reducers/events';
import rightsReducer from "./store/reducers/rights";

import ImportedData from './data/FetchRightsData.js'; 
//import './data/PushDummyData'; // to push data to firebase

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

enableScreens();

async function loadAllData() {
  fetchFonts();
  const result = await ImportedData.importAllData();
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

  const rootreducer = combineReducers({
    rights: rightsReducer,
    events: eventsReducer
  });
  const store = createStore(rootreducer, applyMiddleware(ReduxThunk));

  return (
    <Host >
      <Provider store={store}>
        <RightsNavigator />
      </Provider>
    </Host>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
