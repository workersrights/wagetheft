import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from '../components/CustomHeaderButton';
import * as eventActions from "../store/actions/events";
import EventsHomeModule from "../components/EventsHomeModule.js";
import EventModal from '../components/EventModal';
import Colors from "../constants/Colors";

const categoryTitles = [
  { id: "t1", title: "Your Events" },
  { id: "t2", title: "Social" },
  { id: "t3", title: "Workshops" },
];

//In the EventCategoryScreen use props.navigation.categoryId or props.navigation.categoryTitle
//This allows you to access the pertinent info from this screen
const EventsHomeScreen = (props) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    props.navigation.setParams({ setIsModalOpen: setIsModalOpen });
  }, [isModalOpen]);

  const loadEvents = useCallback(async () => {
    setIsRefreshing(true);
    await dispatch(eventActions.fetchEvents());
    setIsRefreshing(false);
  }, [dispatch]);

  // Load events
  useEffect(() => {
    setIsLoading(true);
    loadEvents().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadEvents]);

  const renderEventModules = (itemData) => {
    return (
      <EventsHomeModule
        category={itemData.item.title}
        viewPress={() => {
          props.navigation.navigate({
            routeName: "EventCategory",
            params: {
              categoryId: itemData.item.id,
              categoryTitle: itemData.item.title,
            },
          });
        }}
        cardPress={(id) => {
          props.navigation.navigate({
            routeName: "EventDetails",
            params: {
              eventId: id,
            },
          });
        }}
        lastIndex={itemData.index === categoryTitles.length - 1}
      />
    );
  };

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.darkOrange} />
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <FlatList
        //onRefresh = {loadEvents}
        //refreshing = {isRefreshing}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadEvents}
            tintColor={Colors.darkOrange}
            colors={[Colors.darkOrange]}
          />
        }
        style={{ paddingTop: 40 }}
        data={categoryTitles}
        renderItem={renderEventModules}
        showsVerticalScrollIndicator={false}
      />
      <EventModal 
        isVisible={isModalOpen}
        onCloseModal={() => {setIsModalOpen(false);}}
      />
    </View>
  );
};

EventsHomeScreen.navigationOptions = navigationData =>{
  const setIsModalOpen = navigationData.navigation.getParam('setIsModalOpen');
  return {
    headerTitle: "Events",
    headerStyle: {
      // only color the background of the header if Android to fit the typical platform look
      backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
    },
    headerTintColor: Colors.darkOrange,
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Help"
          iconName="ios-help-circle-outline"
          iconSize={30}
          onPress={() => { setIsModalOpen(true); }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EventsHomeScreen;
