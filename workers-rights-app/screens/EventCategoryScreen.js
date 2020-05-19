import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import EventCategoryCard from '../components/EventCategoryCard';

const EventCategoryScreen = props => {

  const allEvents = useSelector(state => state.events.allEvents);
  const yourEvents = useSelector(state => state.events.yourEvents);
  const category = props.navigation.getParam("categoryTitle");

  const displayedEvents = (category === "Your Events") ? yourEvents : allEvents.filter(
    event => event.category === category);
  
    const renderCards = (itemData) => {
      const parseDateString = (timeStr) => {
        var moment = require('moment');
        const date = moment(timeStr).format("MMMM Mo, YYYY");
        return date.toString();
      };
      const parseTimeString = (timeStr) => {
        var moment = require('moment');
        const date = moment(timeStr).format("LT");
        return date.toString();
      };
        return (
          <EventCategoryCard
            title={itemData.item.title}
            date={parseDateString(itemData.item.date)}
            time={parseTimeString(itemData.item.time)}
            location={itemData.item.location}
            image={itemData.item.imageUrl}
            pressAction={(id) => {
                props.navigation.navigate({
                  routeName: "EventDetails",
                  params: {
                    eventId: id,
                  }
                }) }
            }
            id={itemData.item.id}
          />
        );
      };
    
    return (
       <View style={styles.container}>
         <FlatList
           data={displayedEvents}
           renderItem={renderCards}
           showsVerticalScrollIndicator={false}
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
    }
});


// Sets the header title to the category title
EventCategoryScreen.navigationOptions = (navigationData) => {
    return{headerTitle: navigationData.navigation.getParam('categoryTitle')};
};


export default EventCategoryScreen;