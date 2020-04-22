import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { EVENTS } from "../data/dummy-data";
import EventCategoryCard from '../components/EventCategoryCard';

const EventCategoryScreen = props => {
    const renderCards = (itemData) => {
        return (
          <EventCategoryCard
            title={itemData.item.title}
            date={itemData.item.date}
            time={itemData.item.time}
            location={itemData.item.location}
            image={itemData.item.image}
            pressAction={(id) => {
                props.navigation.navigate({
                  routeName: "EventDetails",
                  params: {
                    eventId: id,
                  },
                }) }
            }
            id={itemData.item.id}
          />
        );
      };
    
    {/* validEvents isn't going to be used yet */}
    const validEvents = EVENTS.filter(
        e => e.category === props.category);
    return (
       <View style={styles.container}>
         <FlatList
           data={EVENTS}
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