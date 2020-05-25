import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RightsTweets from './RightsTweets';



const ForumScreen = props => {
  return(
    <View style={styles.screen}>
      <Text>Rights Twitter Feed</Text>
      <RightsTweets/>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginVertical: 100,
        marginHorizontal: 50
    }
})

export default ForumScreen;