import React, {useState} from 'react';
import {Button, StyleSheet, FlatList, View} from 'react-native';
/* Necessary for Twitter API */
import twitter from 'react-native-twitter';
import TWITTERKEYS from '../constants/MyTwitterKeys';
import TweetContainer from '../components/TweetContainer';
import RightsTweet from "../models/rightsTweet";


const RightsTweets = props => {
  var tweetOne = new RightsTweet("25073877",
                                "EDD",
                                "CA_EDD",
                                "",
                                "EDD offices, UI claims support, and technical support phone lines are closed today in observation of Memorial Day, but EDD staff are still working to process your claims. The UI automated self-service line 866-333-4606 is available 24/7. We apologize for any inconvenience.",
                                "");
  var testDataArr = [tweetOne];
  
  // Instantiating twitter object
  var twitterObj = twitter(TWITTERKEYS);
  

  const getRecentTweets = () => {
    var myPromise = twitterObj.rest.get('statuses/user_timeline', {screen_name: 'CA_EDD', count: 5})
    .then(console.log("done!"));
    myPromise.then((info) => {
      
      for(var x of info) {
        // console.log(x.text);
        // console.log(x.id_str);
        // console.log(x.user.name);
        // console.log(x.user.profile_image_url);
        // console.log(x.user.screen_name);
        // console.log(x.created_at);
        // console.log("\n")
        var temp = new RightsTweet(x.id_str, x.user.name, x.user.screen_name, x.user.profile_image_url, x.text, x.created_at);
        testDataArr.push(temp);
      }
    });
  };

  // const renderGridItem = (itemData) => {
  //   return (
  //     <TweetContainer
  //       name={itemData.item.name}
  //       screenName={itemData.item.screenName}
  //       text={itemData.item.text}
  //       onSelect={() => {}}
  //     />
  //   );
  // };

  return (
    <View>
       <Button onPress={getRecentTweets} title="Get Tweets" />
       {/* <FlatList
          contentContainerStyle={styles.flatListStyle}
          data={testDataArr}
          renderItem={renderGridItem}
          numColumns={1}
        /> */}
    </View>
  );
};


const styles = StyleSheet.create({
  flatListStyle: {
  }
});

export default RightsTweets;