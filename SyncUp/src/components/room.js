import React, { Component } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, Image, Text } from "react-native";
export default class Room extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          style={styles.partyimage}
          source={require("../assets/images/party.jpg")}
          resizeMode="cover"
        />
        <View style={styles.actiongroup}>
          <View style={styles.music}>
            <Icon
              style={styles.musicicon}
              type="Ionicons"
              name="ios-musical-notes"
            />
            <Text style={styles.musiclabel}>What&#39;s Playing</Text>
          </View>
          <View style={styles.people}>
            <Icon style={styles.peopleicon} type="Ionicons" name="ios-people" />
            <Text style={styles.peoplelabel}>What&#39;s Playing</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flexDirection: "column",
    flex: 1
  },
  partyimage: {
    top: 0,
    left: 0,
    width: 375,
    height: 242.25,
    position: "absolute"
  },
  actiongroup: {
    height: "90.32%",
    flexDirection: "column",
    alignSelf: "stretch",
    justifyContent: "space-around"
  },
  music: {
    height: 72.55,
    alignSelf: "stretch",
    marginTop: 0,
    borderWidth: 1
  },
  musicicon: {
    top: 0,
    position: "absolute",
    color: "grey",
    fontSize: 40,
    left: "46.67%"
  },
  musiclabel: {
    top: "75.19%",
    left: "34.48%",
    color: "#121212",
    position: "absolute",
    fontSize: 18
  },
  people: {
    height: 72.55,
    alignSelf: "stretch",
    marginTop: 0
  },
  peopleicon: {
    top: 0,
    position: "absolute",
    color: "grey",
    fontSize: 40,
    left: "45.32%"
  },
  peoplelabel: {
    top: "75.19%",
    left: "34.48%",
    width: 116.43,
    height: 18,
    color: "#121212",
    position: "absolute",
    fontSize: 18
  }
});
