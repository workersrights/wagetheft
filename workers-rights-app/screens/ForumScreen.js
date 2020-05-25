import React, {Component} from 'react';
import {AsyncStorage, Button, TextInput, View, StyleSheet} from 'react-native';

import twitter, {auth} from 'react-native-twitter';
import Footer from '../screens/Footer';
import Page from '../screens/Page';
import Timeline from '../screens/Timeline';

var myTokens = {
    consumerKey: 'spNwJjNfUFgb4nZ1Txfq3YR4M',
    consumerSecret: 'v1BkLeHi8vrJQaZp4IwRZFcGknDHEQxhHmaOqYeGOWKyDbg0Nj',
    accessToken: '1520144994-rv23rHf05p0GRKjQC9uuvSSgsgJdYgm7zFNsBRE',
    accessTokenSecret: 'NpxK8xj3Q1KlJmAACnTj0RvQL0UKbwyNNitlDd0kXjsdq',
};

class ForumScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: true,
      tokens: {
        consumerKey: 'spNwJjNfUFgb4nZ1Txfq3YR4M',
        consumerSecret: 'v1BkLeHi8vrJQaZp4IwRZFcGknDHEQxhHmaOqYeGOWKyDbg0Nj',
        accessToken: '1520144994-rv23rHf05p0GRKjQC9uuvSSgsgJdYgm7zFNsBRE',
        accessTokenSecret: 'NpxK8xj3Q1KlJmAACnTj0RvQL0UKbwyNNitlDd0kXjsdq',
      },
      twitter: twitter(myTokens),
    };
  }
//   componentDidMount() {
//     AsyncStorage.getItem('tokens')
//       .then((tokens) => {
//         if (tokens) {
//           this.handleTokens(JSON.parse(tokens));
//         }
//       });
//   }

//   componentDidMount() {
//     console.log("hey there!");
//     this.setState({
//       authorized: true,
//       tokens,
//       twitter: twitter(tokens),
//     });
//   }
//   handleTokens(tokens) {
//     this.setState({
//       authorized: true,
//       tokens,
//       twitter: twitter(tokens),
//     });
//   }
  render() {
    console.log(this.state.twitter);
    return this.state.authorized ?
      <View style={styles.screen}>
        <Page title="home" main={<Timeline twitter={this.state.twitter} />} />
        <Footer twitter={this.state.twitter} />
      </View> :
      <View style={styles.screen}>
        <TextInput
          placeholder="Consumer Key"
          onChangeText={(consumerKey) => {
            this.setState({tokens: {...this.state.tokens, consumerKey}});
          }}
        />
        <TextInput
          placeholder="Consumer Secret"
          onChangeText={(consumerSecret) => {
            this.setState({tokens: {...this.state.tokens, consumerSecret}});
          }}
        />
        <Button
          onPress={() => {
            auth(this.state.tokens, 'rnte://auth')
              .then(({accessToken, accessTokenSecret}) => {
                const tokens = {...this.state.tokens, accessToken, accessTokenSecret};
                this.handleTokens(tokens);
                AsyncStorage.setItem('tokens', JSON.stringify(tokens));
              });
          }}
          title="auth"
        />
      </View>;
  }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ForumScreen;



// import React from 'react';
// import { View, Text, StyleSheet} from 'react-native';
// import twitter, {auth} from 'react-native-twitter';
// import Timeline from "../screens/Timeline";

// var myTokens = {
//     consumer_key: "spNwJjNfUFgb4nZ1Txfq3YR4M",
//     consumer_secret: "v1BkLeHi8vrJQaZp4IwRZFcGknDHEQxhHmaOqYeGOWKyDbg0Nj",
//     access_token: "1520144994-rv23rHf05p0GRKjQC9uuvSSgsgJdYgm7zFNsBRE",
//     access_token_secret: "NpxK8xj3Q1KlJmAACnTj0RvQL0UKbwyNNitlDd0kXjsdq"
// };

// const ForumScreen = props => {
//     return(
//         <View style={styles.screen}>
//             <Text>The Forum Screen!</Text>
//             <Timeline twitter={null}/>
//         </View>
        

//     );
// };

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })

// export default ForumScreen;