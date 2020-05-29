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
    
    static async downloadRightsTweets() {
        var twitterObj = twitter(TWITTERKEYS);
        var tempArr = [];

        let screenNames = ["NLRB", "CA_EDD", "USDOL"];
        for(var name of screenNames) {
            const res = await getUserRecentTweets(twitterObj, name, 4);
            tempArr = [...tempArr, ...res]
        }
        shuffleArray(tempArr);
        GetRightsTweets.setLoadedTweets(tempArr);
    }
}

async function getUserRecentTweets(twitterObj, screenName, count) {
    var tempArr = [];
    var myPromise = twitterObj.rest.get('statuses/user_timeline', {screen_name: screenName, count: count, tweet_mode: "extended"})
    .then(console.log("done!"));
    return myPromise.then((info) => {
        for(var x of info) {
            var temp = new RightsTweet(x.id_str, x.user.name, x.user.screen_name, x.user.profile_image_url, x.full_text, x.created_at);
            tempArr.push(temp);
        }
        return tempArr;
    });
}

// TODO. temp solution; will need to sort the tweets array chrnologically
function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// TODO. temp solution, just runs when file loads; will need to call this somewhere more appropriate
GetRightsTweets.downloadRightsTweets();