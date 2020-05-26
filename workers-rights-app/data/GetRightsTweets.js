import React, {useState} from 'react';
import {Button, StyleSheet, FlatList, View} from 'react-native';
/* Necessary for Twitter API */
import twitter from 'react-native-twitter';
import TWITTERKEYS from '../constants/MyTwitterKeys'; // secret Twitter keys
import RightsTweet from "../models/rightsTweet"; // model for RightsTweet


export default class GetRightsTweets {
    constructor() { }
  
    static loadedTweets = [];
    
    // Setter
    static setLoadedTweets(data) {
        this.loadedTweets = data;
    }
  
    // Getter
    static getLoadedTweets() {
        return this.loadedTweets;
    }
    
    // Helper
    // static async getRightsTweets() {
    //     var tweetOne = new RightsTweet("25073877",
    //                                     "EDD",
    //                                     "CA_EDD",
    //                                     "",
    //                                     "EDD offices, UI claims support, and technical support phone lines are closed today in observation of Memorial Day, but EDD staff are still working to process your claims. The UI automated self-service line 866-333-4606 is available 24/7. We apologize for any inconvenience.",
    //                                     ""); 
    //     var temp = [tweetOne];
    //     GetRightsTweets.setLoadedTweets(temp);
    // }
    static async downloadRightsTweets() {
        var twitterObj = twitter(TWITTERKEYS);
        var tempArr = [];
        
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
                tempArr.push(temp);
            }
            GetRightsTweets.setLoadedTweets(tempArr);
        });
    }

}

GetRightsTweets.downloadRightsTweets();