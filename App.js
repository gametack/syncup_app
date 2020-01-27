// import Amplify from "aws-amplify";
import React from 'react';
// import { withAuthenticator } from 'aws-amplify-react-native';
// import awsConfig from "./aws-exports";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Room from './src/components/room'
import Player from './src/components/player'
import PSpotify from "./src/provider/spotify/spotify"
 
const provider = new PSpotify();
 
const MainNavigator = createStackNavigator({
    room: {screen: props => <Room {...props} provider={provider} />},
    player: {screen: Player}
  });
const App = createAppContainer(MainNavigator);

export default App;