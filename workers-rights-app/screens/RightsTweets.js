import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
/* Necessary for Twitter API */
import twitter from 'react-native-twitter';
import TWITTERKEYS from '../constants/MyTwitterKeys';


const RightsTweets = props => {
  // Instantiating twitter object
  var twitterObj = twitter(TWITTERKEYS);

  const getRecentTweets = () => {
    var myPromise = twitterObj.rest.get('statuses/user_timeline', {screen_name: 'CA_EDD', count: 5})
    .then(console.log("done!"));
    
    myPromise.then((info) => {
      for(var x of info) {
        console.log(x.text, "\n\n");
      }
      //console.log("text of first object: ", info[0].text)
    });
  };

  return (
    <View style={styles.footer} >
       <Button onPress={getRecentTweets} title="submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 48,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
});

export default RightsTweets;