import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, Text, RefreshControl, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import EventCategoryCard from '../components/EventCategoryCard';
import * as eventActions from '../store/actions/events';
import Colors from '../constants/Colors';

const EventCategoryScreen = props => {

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  const allEvents = useSelector(state => state.events.allEvents);
  const yourEvents = useSelector(state => state.events.yourEvents);
  const category = props.navigation.getParam("categoryTitle");

  const displayedEvents = (category === "Your Events") ? yourEvents : allEvents.filter(
    event => event.category === category);

  const renderCards = (itemData) => {
    return (
      <EventCategoryCard
        title={itemData.item.title}
        date={itemData.item.Date()}
        time={itemData.item.Time()}
        location={itemData.item.location}
        image={itemData.item.imageUrl}
        pressAction={(id) => {
          props.navigation.navigate({
            routeName: "EventDetails",
            params: {
              eventId: id,
            }
          })
        }
        }
        id={itemData.item.id}
      />
    );
  };

  const renderEmptyList = () => {
    return (
      <View style={styles.emptyListContainer}>
        <Text style={styles.noEventsText}>Add some events by tapping on the star in each event!</Text>
      </View>
    );
  }

  const renderSeparator = () => {
    return(
      <View style={styles.separator} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedEvents}
        renderItem={renderCards}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadEvents}
            tintColor={Colors.darkOrange}
            colors={[Colors.darkOrange]}
          />
        }
        ListEmptyComponent={renderEmptyList}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10
  },
  emptyListContainer: {
    height: Dimensions.get('window').height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  noEventsText: {
    fontSize: 18,
    fontFamily: "nunito-regular",
    color: Colors.darkGray,
    textAlign: 'center'
  },
  separator: {
    borderBottomColor: Colors.darkGray,
    borderBottomWidth: 0.5,
  }
});


// Sets the header title to the category title
EventCategoryScreen.navigationOptions = (navigationData) => {
  return { headerTitle: navigationData.navigation.getParam('categoryTitle') };
};


export default EventCategoryScreen;