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
import rightReducer from './store/reducers/rights';
import rightsReducer from "./store/reducers/rights";

import * as firebase from 'firebase';
import firebaseConfig from './constants/ApiKeys';

enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-semibold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-extrabold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
  });
};

if (!firebase.apps.length) { // only load once
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  // Get a reference to the database service
  var db = firebase.database();
  var ref = db.ref('rights-categories');
  // console.log(ref);

  ref.once("value").then(function(snapshot) {
    console.log(snapshot.val());
    console.log(typeof snapshot.val());
  });
  
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
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
